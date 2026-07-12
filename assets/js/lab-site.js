(() => {
  document.documentElement.classList.add("lab-js");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initHomeBrand() {
    if (document.querySelector(".navbar-brand")) return;
    const container = document.querySelector("#navbar > .container");
    if (!container) return;

    const brand = document.createElement("a");
    brand.className = "navbar-brand title";
    brand.href = "/";
    brand.textContent = "中国科学院长春光机所";
    container.insertBefore(brand, container.firstChild);
  }

  function revealContent() {
    const items = document.querySelectorAll("[data-reveal]");
    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${(index % 5) * 70}ms`);
      observer.observe(item);
    });
  }

  function animateNumbers() {
    if (reducedMotion) return;
    document.querySelectorAll("[data-count]").forEach((element) => {
      const target = Number(element.dataset.count);
      const prefix = element.dataset.prefix || "";
      const suffix = element.dataset.suffix || "";
      let start;

      function tick(time) {
        start ??= time;
        const progress = Math.min((time - start) / 900, 1);
        const value = Math.round(target * (1 - Math.pow(1 - progress, 3)));
        element.textContent = `${prefix}${value.toLocaleString("zh-CN")}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    });
  }

  async function initOpticalField() {
    const canvas = document.querySelector("[data-optical-canvas]");
    if (!canvas || reducedMotion) return;

    const mobile = window.matchMedia("(max-width: 720px), (pointer: coarse)").matches;
    if (mobile || !window.WebGLRenderingContext) return;

    try {
      const module = await import("https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js");
      const app = module.default(canvas, {
        tubes: {
          colors: ["#39d9ff", "#7269ff", "#ff8a4c"],
          lights: {
            intensity: 90,
            colors: ["#39d9ff", "#526dff", "#9a7dff", "#ff8a4c"],
          },
        },
      });
      canvas.classList.add("is-ready");

      document.addEventListener("visibilitychange", () => {
        if (document.hidden) app?.pause?.();
        else app?.play?.();
      });
    } catch (error) {
      canvas.dataset.webglFallback = "true";
    }
  }

  async function initLightRaysField() {
    const canvas = document.querySelector("[data-rays-canvas]");
    if (!canvas || reducedMotion) return;

    const mobile = window.matchMedia("(max-width: 720px), (pointer: coarse)").matches;
    if (mobile || !window.WebGLRenderingContext) return;

    try {
      const { Renderer, Program, Triangle, Mesh } = await import("https://cdn.jsdelivr.net/npm/ogl@0.0.116/+esm");

      const RAYS_COLOR = [0.224, 0.851, 1.0]; // #39d9ff
      const RAYS_SPEED = 1.1;
      const LIGHT_SPREAD = 0.85;
      const RAY_LENGTH = 1.15;
      const FADE_DISTANCE = 1.0;
      const SATURATION = 1.0;
      const MOUSE_INFLUENCE = 0.15;
      const NOISE_AMOUNT = 0.06;
      const DISTORTION = 0.03;

      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const renderer = new Renderer({ canvas, dpr, alpha: true });
      const gl = renderer.gl;

      const vertex = /* glsl */ `
        attribute vec2 position;
        void main() {
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `;

      const fragment = /* glsl */ `
        precision highp float;
        uniform float iTime;
        uniform vec2  iResolution;
        uniform vec2  rayPos;
        uniform vec2  rayDir;
        uniform vec3  raysColor;
        uniform float raysSpeed;
        uniform float lightSpread;
        uniform float rayLength;
        uniform float fadeDistance;
        uniform float saturation;
        uniform vec2  mousePos;
        uniform float mouseInfluence;
        uniform float noiseAmount;
        uniform float distortion;

        float noise(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }

        float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord,
                          float seedA, float seedB, float speed) {
          vec2 sourceToCoord = coord - raySource;
          vec2 dirNorm = normalize(sourceToCoord);
          float cosAngle = dot(dirNorm, rayRefDirection);

          float d = distortion * sin(iTime * 1.5 + length(sourceToCoord) * 0.005);
          float distortedAngle = cosAngle + d;

          float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));
          float dist = length(sourceToCoord);
          float maxDistance = max(iResolution.x, iResolution.y) * rayLength;
          float lengthFalloff = clamp((maxDistance - dist) / maxDistance, 0.0, 1.0);

          float fadeFactor = fadeDistance * max(iResolution.x, iResolution.y);
          float fadeFalloff = clamp((fadeFactor - dist) / fadeFactor, 0.0, 1.0);

          float baseStrength = clamp(
            (0.5 + 0.2 * sin(distortedAngle * seedA + iTime * speed)) +
            (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed * 0.8)),
            0.0, 1.0
          );

          return baseStrength * lengthFalloff * fadeFalloff * spreadFactor;
        }

        void main() {
          vec2 coord = gl_FragCoord.xy;

          vec2 finalRayDir = normalize(rayDir);
          if (mouseInfluence > 0.0) {
            vec2 mouseScreenPos = mousePos * iResolution.xy;
            vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
            finalRayDir = normalize(mix(finalRayDir, mouseDirection, mouseInfluence));
          }

          float r1 = rayStrength(rayPos, finalRayDir, coord, 45.2, 31.4, 0.8 * raysSpeed);
          float r2 = rayStrength(rayPos, finalRayDir, coord, 28.5, 19.8, 1.2 * raysSpeed);
          float r3 = rayStrength(rayPos, finalRayDir, coord, 12.1, 56.2, 0.5 * raysSpeed);

          float combined = (r1 * 0.4 + r2 * 0.4 + r3 * 0.2);
          combined = pow(combined, 0.7);
          combined *= 1.5;
          vec3 finalColor = raysColor * combined;

          if (noiseAmount > 0.0) {
            float n = noise(coord * 0.01 + iTime * 0.05);
            finalColor *= (1.0 - noiseAmount + noiseAmount * n);
          }

          if (saturation != 1.0) {
            float gray = dot(finalColor, vec3(0.299, 0.587, 0.114));
            finalColor = mix(vec3(gray), finalColor, saturation);
          }

          gl_FragColor = vec4(finalColor, combined);
        }
      `;

      const uniforms = {
        iTime: { value: 0 },
        iResolution: { value: [1, 1] },
        rayPos: { value: [0, 0] },
        rayDir: { value: [0, 1] },
        raysColor: { value: RAYS_COLOR },
        raysSpeed: { value: RAYS_SPEED },
        lightSpread: { value: LIGHT_SPREAD },
        rayLength: { value: RAY_LENGTH },
        fadeDistance: { value: FADE_DISTANCE },
        saturation: { value: SATURATION },
        mousePos: { value: [0.5, 0.5] },
        mouseInfluence: { value: MOUSE_INFLUENCE },
        noiseAmount: { value: NOISE_AMOUNT },
        distortion: { value: DISTORTION },
      };

      const geometry = new Triangle(gl);
      const program = new Program(gl, { vertex, fragment, uniforms, transparent: true });
      const mesh = new Mesh(gl, { geometry, program });
      const container = canvas.parentElement;

      const getAnchorAndDir = (w, h) => {
        const outside = 0.2;
        return { anchor: [0.5 * w, -outside * h], dir: [0, 1] };
      };

      const updatePlacement = () => {
        const wCSS = container.clientWidth || 1;
        const hCSS = container.clientHeight || 1;
        renderer.setSize(wCSS, hCSS);
        const w = wCSS * dpr;
        const h = hCSS * dpr;
        uniforms.iResolution.value = [w, h];
        const { anchor, dir } = getAnchorAndDir(w, h);
        uniforms.rayPos.value = anchor;
        uniforms.rayDir.value = dir;
      };

      const ro = new ResizeObserver(updatePlacement);
      ro.observe(container);
      updatePlacement();

      const pointer = { x: 0.5, y: 0.5 };
      const smooth = { x: 0.5, y: 0.5 };

      const onMove = (event) => {
        const rect = container.getBoundingClientRect();
        pointer.x = (event.clientX - rect.left) / rect.width;
        pointer.y = (event.clientY - rect.top) / rect.height;
      };
      window.addEventListener("pointermove", onMove, { passive: true });

      let raf = 0;
      const startRAF = () => {
        if (raf) return;
        raf = requestAnimationFrame(render);
      };

      function render(time) {
        uniforms.iTime.value = time * 0.001;
        const smoothing = 0.94;
        smooth.x = smooth.x * smoothing + pointer.x * (1 - smoothing);
        smooth.y = smooth.y * smoothing + pointer.y * (1 - smoothing);
        uniforms.mousePos.value = [smooth.x, 1 - smooth.y];

        renderer.render({ scene: mesh });
        raf = requestAnimationFrame(render);
      }

      canvas.classList.add("is-ready");
      startRAF();

      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          if (raf) cancelAnimationFrame(raf);
          raf = 0;
        } else {
          startRAF();
        }
      });
    } catch (error) {
      canvas.dataset.webglFallback = "true";
    }
  }

  function cardTilt() {
    if (reducedMotion || window.matchMedia("(pointer: coarse)").matches) return;
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--tilt-x", `${-y * 2.5}deg`);
        card.style.setProperty("--tilt-y", `${x * 3}deg`);
      });
      card.addEventListener("pointerleave", () => {
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHomeBrand();
    revealContent();
    animateNumbers();
    cardTilt();
    initOpticalField();
    initLightRaysField();
  });
})();
