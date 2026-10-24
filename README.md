# Leafling

**Build your own apps. Connected to your iPhone.**

Create a personal app in chat, run it on your iPhone or iPad inside Leafling, and keep improving it. Connect your app to supported phone features with the access you allow.

- [Download Leafling](https://apps.apple.com/us/app/leafling/id6762119069)
- [Visit the website](https://wisonlin.github.io/Leafling/)
- [Read the product update: personal apps connected to your iPhone](https://wisonlin.github.io/Leafling/updates/native-personal-apps/)
- [Support](https://wisonlin.github.io/Leafling/support/) · [Privacy](https://wisonlin.github.io/Leafling/privacypolicy/)

Personal apps use HTML, CSS, and JavaScript inside Leafling. A JSON Bridge connects supported actions to native iOS SDKs, subject to device availability and permissions. AI creation and editing require internet and an existing ChatGPT account; its usage limits apply.

The product update includes a real Photo Wall official-example recording with limited Photos access, and a separately labeled Voice List design concept. The recording demonstrates Photos access, saving, and first opening from Apps. It does not demonstrate AI creation or Reminders writes.

This repository contains Leafling's public website and support pages, not the iOS app source code. Generated personal apps run inside Leafling; they are not standalone iOS apps for App Store distribution.

## Website development

GitHub Pages publishes the root of `main` using Jekyll, with `url: https://wisonlin.github.io` and `baseurl: /Leafling`.

```sh
bundle install
bundle exec jekyll serve
```

Keep the sitemap aligned with public routes. The App Store link is rendered in static HTML. Optional website analytics respects the visitor's choice, DNT, GPC, and `analytics=off`.

The original website template is [Automatic App Landing Page by Emil Baehr](https://github.com/emilbaehr/automatic-app-landing-page), under the [MIT license](LICENSE). That attribution concerns the website template, not the Leafling iOS app.
