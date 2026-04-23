# Leafling Landing Page

This folder contains a GitHub Pages/Jekyll landing page for Leafling, based on [`emilbaehr/automatic-app-landing-page`](https://github.com/emilbaehr/automatic-app-landing-page).

## Before Publishing

1. If the App Store listing is live, set `ios_app_id` or `appstore_link` in `_config.yml`.
2. Publish this folder as the root of the GitHub Pages repository, or copy it into the Pages repo that will host the Leafling site.

Recommended URLs after publishing to the `wisonlin/Leafling` GitHub Pages repository:

- Marketing URL: `https://wisonlin.github.io/Leafling/`
- Support URL: `https://wisonlin.github.io/Leafling/support/`
- Privacy Policy URL: `https://wisonlin.github.io/Leafling/privacypolicy/`

## Local Build

The template uses the `github-pages` gem. On machines with a current Ruby environment:

```bash
bundle install
bundle exec jekyll build
```

The current macOS system Ruby in this workspace is too old for the latest transitive dependencies, so GitHub Pages should be used as the source of truth for final rendering unless a newer local Ruby is selected.
