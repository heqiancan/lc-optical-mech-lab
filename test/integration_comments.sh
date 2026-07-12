#!/usr/bin/env bash
set -euo pipefail

tmp_dir="$(mktemp -d)"
tmp_override="${tmp_dir}/comments-test-override.yml"
tmp_site="${tmp_dir}/site"

cleanup() {
  rm -rf "${tmp_dir}"
}
trap cleanup EXIT

# This site's _config.yml excludes _posts/ (it publishes no demo blog content),
# so re-include just that path here to exercise the giscus/disqus wiring
# against the starter's example posts, leaving the rest of the exclude list
# (e.g. assets/jupyter/, which needs a local jupyter binary) untouched.
ruby -rpsych -e "
cfg = Psych.unsafe_load_file('_config.yml')
excludes = Array(cfg['exclude']).reject { |p| p == '_posts/' }
override = {
  'giscus' => {
    'repo' => 'alshedivat/al-folio',
    'repo_id' => 'R_kgDOExample',
    'category' => 'Comments',
    'category_id' => 'DIC_kwDOExample',
  },
  # This site leaves disqus_shortname blank (it doesn't use Disqus), so set a
  # dummy shortname here to exercise the al_comments disqus wiring.
  'disqus_shortname' => 'al-folio-test',
  'exclude' => excludes,
}
puts override.to_yaml
" >"${tmp_override}"

bundle exec jekyll build --config "_config.yml,${tmp_override}" -d "${tmp_site}" >/dev/null

giscus_page="${tmp_site}/blog/2022/giscus-comments/index.html"
disqus_page="${tmp_site}/blog/2015/disqus-comments/index.html"

grep -q 'https://giscus.app/client.js' "${giscus_page}"
if grep -q 'giscus comments misconfigured' "${giscus_page}"; then
  echo "unexpected giscus misconfiguration warning in ${giscus_page}" >&2
  exit 1
fi

grep -q 'id="disqus_thread"' "${disqus_page}"
grep -q '.disqus.com/embed.js' "${disqus_page}"

echo "comments integration checks passed"
