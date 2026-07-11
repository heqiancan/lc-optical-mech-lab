(() => {
  document.documentElement.classList.add("lab-js");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    revealContent();
    animateNumbers();
    cardTilt();
    initOpticalField();
  });
})();
