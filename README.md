# Leafling

Make personal web apps on iPhone and iPad. Try ready-made examples such as Photo Wall, Voice Note, and Leave Reminder, keep a useful tool, and use an existing ChatGPT account to create or change your own.

- [Download Leafling on the App Store](https://apps.apple.com/us/app/leafling/id6762119069)
- [Visit the website](https://wisonlin.github.io/Leafling/)
- [Get support](https://wisonlin.github.io/Leafling/support/)
- [Privacy policy](https://wisonlin.github.io/Leafling/privacypolicy/)

Leafling is free to download. AI generation and editing require an existing ChatGPT account; its usage limits apply. Generated apps run inside Leafling. They are personal web apps, not standalone iOS apps for App Store distribution.

This repository contains the public website and support pages. It does not contain the Leafling iOS app source code.

## Website development

GitHub Pages publishes the root of the `main` branch. The site uses Jekyll with `url: https://wisonlin.github.io` and `baseurl: /Leafling`.

With a compatible Ruby environment:

```sh
bundle install
bundle exec jekyll serve
```

The App Store link is configured in `_config.yml` and rendered in the HTML without requiring an Apple API response. `sitemap.xml` lists the four public pages; update it when public routes change.

The website is based on [Automatic App Landing Page by Emil Baehr](https://github.com/emilbaehr/automatic-app-landing-page), under the [MIT license](LICENSE). That attribution applies to the website template, not the Leafling iOS app.
