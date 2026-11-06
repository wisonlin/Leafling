---
layout: page
title: Support
include_in_header: true
---

# Leafling Support

Need help with Leafling? Use this page to find setup notes and contact support.

New to Leafling? Learn how to connect AI, create a tool, open the saved result, and keep improving it.

<a href="{{ "/updates/native-personal-apps/" | relative_url }}" target="_self" style="display:inline-flex;align-items:center;min-height:44px">Open the first app guide</a>

<h2 id="ai-connection">AI connection and costs</h2>

These steps describe the published Leafling 1.5.5 setup. AI chat, app creation, and AI editing need internet and a connection you choose. You can browse official examples, write drafts, and open saved local apps before connecting.

<nav aria-label="AI help topics" style="display:flex;flex-wrap:wrap;gap:4px 18px"><a href="#chatgpt-setup" target="_self" style="display:inline-flex;align-items:center;min-height:44px">ChatGPT</a><a href="#api-key-setup" target="_self" style="display:inline-flex;align-items:center;min-height:44px">API key</a><a href="#ai-costs" target="_self" style="display:inline-flex;align-items:center;min-height:44px">Costs</a><a href="#connection-troubleshooting" target="_self" style="display:inline-flex;align-items:center;min-height:44px">Troubleshooting</a></nav>

<h3 id="chatgpt-setup">Connect with your ChatGPT account</h3>

1. Open **Settings → AI Connection** in Leafling.
2. Select **ChatGPT**, then tap **Connect ChatGPT**.
3. Complete OpenAI’s sign-in flow and return to Leafling. If the connection is still missing, check the ChatGPT status in Settings before sending a message.

You do not paste an API key into this connection. Access and limits come from the account you connect; signing in does not create an extra AI allowance. Leafling cannot guarantee that every account or model is available. See [OpenAI’s ChatGPT connection guidance](https://learn.chatgpt.com/docs/sign-in-with-chatgpt).

<h3 id="api-key-setup">Connect with your own OpenAI API key</h3>

1. Open **Settings → AI Connection** and select **OpenAI API key**.
2. Enter your own key **inside Leafling**, and enter a **Model ID** available to that API account. Use the actual API model ID, not a ChatGPT display name.
3. Tap **Save API settings**. The **API Settings Saved** message confirms local storage; it does not test the key, model access, or billing.

You only need the connection you choose. A ChatGPT sign-in is not an API key, and the ChatGPT model picker does not choose your API model. Selecting or saving settings does not send a model request. When you later send a message or ask AI to create or edit an app, the selected connection is used.

<h3 id="ai-costs">Which payment covers what?</h3>

- **Leafling Pro:** a separate, one-time App Store purchase for more room to save or import apps in this version. It is not a recurring AI subscription, does not buy a ChatGPT plan, and does not supply API credits or model usage. The free plan holds up to 3 created or imported apps; trying an official example does not use a saved-app slot.
- **ChatGPT connection:** your connected OpenAI account’s plan access and usage limits apply. Any ChatGPT plan or usage costs belong to OpenAI’s service, separately from Leafling Pro. Do not purchase Leafling Pro to solve a ChatGPT access or usage-limit error.
- **API-key connection:** OpenAI bills API usage to the organization/project associated with your key. Model usage follows the applicable [OpenAI API prices](https://developers.openai.com/api/docs/pricing) and your account’s credits, billing, and limits. Saving a key in Leafling does not fund that account.

OpenAI currently offers separately claimable API credits to eligible ChatGPT Pro and Business subscribers. Linking an eligible subscription to an API organization is a separate step; eligibility, expiry, and coverage restrictions apply. Do not assume that signing into Leafling activates it or that every API request qualifies. Check [OpenAI’s current credit-benefit terms](https://developers.openai.com/api/docs/guides/chatgpt-api-credits) and the balance for the organization that owns your key. Leafling does not claim this benefit for you.

OpenAI account and billing references checked November 6, 2026. Terms can change; use the linked official pages for current eligibility and rates.

<h3 id="connection-troubleshooting">If you cannot connect or send</h3>

- **A setup prompt appears:** check which connection is selected in **Settings → AI Connection**. For **Connect ChatGPT**, finish that sign-in flow. For **Set Up OpenAI API Key**, save the key and model in the API section. Having credentials for the other connection does not complete the selected one.
- **Settings Not Saved:** read the field named in the message. Supply a key and Model ID, remove accidental spaces or line breaks, and use a model ID from your API account. If the message says secure storage is unavailable, try again; contact support if it persists.
- **API Settings Saved, but a message fails:** local saving is not an online credential check. Verify the selected mode, key/project, and model access. An authentication or model-access error is different from a Leafling saved-app limit.
- **An API credit/billing limit is reported:** review the owning API organization’s balance and limits before deciding whether to add funds. A ChatGPT subscription or Leafling Pro purchase does not itself fix an API-key error.
- **A rate limit or temporary service error is reported:** wait before retrying and follow any retry guidance in the error. Repeated sends can worsen a rate limit; do not treat every 429 as a request to pay. See [OpenAI’s error guidance](https://developers.openai.com/api/docs/guides/error-codes).
- **You still need help:** include the Leafling version, selected connection, and the exact error message when contacting support below. Hide API keys, tokens, and account details in screenshots.

Once connected, continue creating, opening, and improving your tool.

<a href="{{ "/updates/native-personal-apps/" | relative_url }}#first-app" target="_self" style="display:inline-flex;align-items:center;min-height:44px">Back to first app guide</a>

## Contact

Email: limwihing@gmail.com

Please include:

- Your device model and iOS version
- The Leafling app version
- A short description of the issue
- Screenshots if they help explain the problem

## Common Questions

### Do I need an API key?

Only if you choose the API-key connection. Use the <a href="#chatgpt-setup" target="_self">ChatGPT</a> or <a href="#api-key-setup" target="_self">API-key</a> steps above; you do not need both.

### Where are my AI connection credentials stored?

ChatGPT OAuth tokens and your personal OpenAI API key are stored separately in the iOS Keychain. Basic connection/account details and model preferences stay locally on your device. Switching connection keeps the other credentials; removing the personal API key does not sign out of ChatGPT. Saving or switching settings does not send your draft or make a model request.

### What is sent to OpenAI?

When you send an AI message, Leafling sends your message and relevant conversation context to OpenAI through the selected ChatGPT or API-key connection. App creation or editing may also send relevant project files. If you explicitly use an AI feature inside an example or saved app, the content you choose to process may be sent. Unsent drafts remain local.

<h3 id="reviewed-data-help">What happens to reviewed data in internal test builds?</h3>

This applies to the shared-data internal test candidate 1.5.6 (4), not general App Store availability. You review and approve rows, fields, or edited text before they return to the requesting chat or app. Approved results may then be used by that app or sent through your current AI connection. These actions process original media locally rather than automatically attaching it to AI results; they are not a promise that the whole workflow is offline.

Data and references may be cached locally. Reference expiry is not instant erasure of chat history or save-prevention receipts. Leaving an app page or deleting a chat does not undo a Photos or Reminders save you already confirmed. Review what you share, and confirm system writes separately.

<a href="{{ "/privacypolicy/" | relative_url }}#reviewed-task-data" target="_self" style="display:inline-flex;align-items:center;min-height:44px">Reviewed-data privacy</a>

### Where are generated projects stored?

Your conversations, drafts, saved apps, and version history are stored locally on your device. Leafling does not publish them to a public app marketplace.

### Why do examples ask for permissions?

Some examples show how a web app can connect to native iPhone capabilities. Permissions are requested only when you interact with a feature that needs them, and iOS controls the permission prompt.

### Why do examples ask for Motion & Fitness access?

The built-in Step Coach example can read today's step count from the device pedometer. Motion & Fitness permission is requested only after you tap a button that needs it.
