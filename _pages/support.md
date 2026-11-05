---
layout: page
title: Support
include_in_header: true
---

# Leafling Support

Need help with Leafling? Use this page to find setup notes and contact support.

New to Leafling? Follow the [first app guide]({{ "/updates/native-personal-apps/" | relative_url }}) to connect AI, create a tool, open the saved result, and keep improving it.

## Contact

Email: limwihing@gmail.com

Please include:

- Your device model and iOS version
- The Leafling app version
- A short description of the issue
- Screenshots if they help explain the problem

## Common Questions

### Do I need an API key?

In Leafling 1.5.5 and later, choose either ChatGPT or OpenAI API key in Settings > AI Connection. Earlier versions use ChatGPT sign-in. With ChatGPT, connect your existing account. With OpenAI API key, enter your own key and a Model ID available to your API account, then tap Save API settings. You only need the connection you choose. Your chosen account’s access, usage limits, and billing apply; Leafling Pro does not provide AI usage or API credits. You can browse examples, write drafts, and open saved local apps before connecting AI.

### Where are my AI connection credentials stored?

ChatGPT OAuth tokens and your personal OpenAI API key are stored separately in the iOS Keychain. Basic connection/account details and model preferences stay locally on your device. Switching connection keeps the other credentials; removing the personal API key does not sign out of ChatGPT. Saving or switching settings does not send your draft or make a model request.

### What is sent to OpenAI?

When you send an AI message, Leafling sends your message and relevant conversation context to OpenAI through the selected ChatGPT or API-key connection. App creation or editing may also send relevant project files. If you explicitly use an AI feature inside an example or saved app, the content you choose to process may be sent. Unsent drafts remain local.

### Where are generated projects stored?

Your conversations, drafts, saved apps, and version history are stored locally on your device. Leafling does not publish them to a public app marketplace.

### Why do examples ask for permissions?

Some examples show how a web app can connect to native iPhone capabilities. Permissions are requested only when you interact with a feature that needs them, and iOS controls the permission prompt.

### Why do examples ask for Motion & Fitness access?

The built-in Step Coach example can read today's step count from the device pedometer. Motion & Fitness permission is requested only after you tap a button that needs it.
