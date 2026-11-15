# Leafling

**Make the apps you want on your iPhone.**

Create a personal app in chat, run it on your iPhone or iPad inside Leafling, and keep improving it. Connect your app to supported phone features with the access you allow.

- [Download Leafling](https://apps.apple.com/us/app/leafling/id6762119069)
- [Visit the website](https://wisonlin.github.io/Leafling/)
- [Try Photo Wall and learn to make your first app](https://wisonlin.github.io/Leafling/updates/native-personal-apps/)
- [Support](https://wisonlin.github.io/Leafling/support/) · [Privacy](https://wisonlin.github.io/Leafling/privacypolicy/)

Personal apps use HTML, CSS, and JavaScript inside Leafling. A JSON Bridge connects supported actions to native iOS SDKs, subject to device availability and permissions. AI creation and editing need internet and an AI connection you set up. Use your ChatGPT account or your own OpenAI API key where available in Settings. Access, usage limits, and billing follow the connection you choose.

The first app guide shows how to try Photo Wall with samples, save it, and reopen it from Apps. It also shows an example chat and a working packing checklist. Version 1.5.6 uses more distinctive icons and colors for tools in chat and in Apps.

This repository contains Leafling's public website and support pages, not the iOS app source code. Generated personal apps run inside Leafling; they are not standalone iOS apps for App Store distribution.

## Website development

GitHub Pages publishes the root of `main` using Jekyll, with `url: https://wisonlin.github.io` and `baseurl: /Leafling`.

```sh
bundle install
bundle exec jekyll serve
```

Keep the sitemap aligned with public routes. The App Store link is rendered in static HTML. Optional website analytics respects the visitor's choice, DNT, GPC, and `analytics=off`.

The original website template is [Automatic App Landing Page by Emil Baehr](https://github.com/emilbaehr/automatic-app-landing-page), under the [MIT license](LICENSE). That attribution concerns the website template, not the Leafling iOS app.
