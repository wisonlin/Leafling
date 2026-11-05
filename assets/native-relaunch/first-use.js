/* Copy only the visible starter request after a user click. No network or storage. */
(() => {
  'use strict';
  document.querySelectorAll('[data-copy-prompt]').forEach((button) => {
    const field = document.getElementById(button.dataset.copyPrompt);
    const status = document.getElementById(button.getAttribute('aria-describedby'));
    if (!field || !status) return;
    button.hidden = false;
    button.addEventListener('click', async () => {
      try {
        if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(field.value);
        status.textContent = 'Copied. Paste this request into your Leafling chat.';
      } catch (_) {
        field.focus();
        field.select();
        field.setSelectionRange(0, field.value.length);
        status.textContent = 'Text selected. Use your device’s Copy command, then paste it into Leafling.';
      }
    });
  });
})();
