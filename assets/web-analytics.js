/* Explicit, consent-gated aggregate website measurement. No SDK or stored visitor ID. */
(function () {
  'use strict';
  var node = document.getElementById('leafling-analytics-config');
  if (!node) return;
  var cfg;
  try { cfg = JSON.parse(node.textContent); } catch (_) { return; }
  var settings = cfg.analytics || {}, registry = cfg.registry || {};
  var allowedPaths = ['/Leafling/', '/Leafling/support/', '/Leafling/privacypolicy/', '/Leafling/changelog/'];
  if (!settings.enabled || location.protocol !== 'https:' || location.hostname !== 'wisonlin.github.io' ||
      allowedPaths.indexOf(location.pathname) === -1) return;
  var params = new URLSearchParams(location.search);
  var blocked = navigator.globalPrivacyControl === true || navigator.doNotTrack === '1' ||
    window.doNotTrack === '1' || params.get('analytics') === 'off';
  var internal = params.get('analytics') === 'internal';
  var channels = registry.channels || [];
  var direct = channels.find(function (c) { return c.id === 'website_direct'; });
  if (!direct || !/^phc_[A-Za-z0-9]+$/.test(settings.public_project_token || '') ||
      !/^https:\/\/(us|eu)\.i\.posthog\.com$/.test(settings.host || '')) return;
  // Accept complete registry tuples only; never transmit unknown/raw UTM or referrer values.
  var channel = channels.find(function (c) {
    return c.id === params.get('utm_source') && c.medium === params.get('utm_medium') &&
      c.campaign === params.get('utm_campaign') && c.content === params.get('utm_content');
  }) || direct;
  var preferenceKey = 'leafling_analytics_preference_v1';
  var preference = null, session = null, pageSent = false;
  try { preference = localStorage.getItem(preferenceKey); } catch (_) { /* Memory-only choice still works. */ }
  var links = Array.prototype.slice.call(document.querySelectorAll('a[href]')).filter(function (a) {
    try { var u = new URL(a.href); return u.hostname === 'apps.apple.com' && /\/id6762119069$/.test(u.pathname); }
    catch (_) { return false; }
  });
  var originalLinks = links.map(function (a) { return a.href; });
  function allowed() { return !blocked && preference === 'allow'; }
  function updateLinks() {
    links.forEach(function (a, i) {
      var u;
      try { u = new URL(channel.apple_campaign_url); } catch (_) { u = null; }
      var verified = channel.apple_link_status === 'generated_in_asc_ui' && u &&
        u.hostname === 'apps.apple.com' && u.searchParams.get('pt') === registry.apple_provider_token &&
        u.searchParams.get('ct') === channel.apple_campaign_token;
      a.href = allowed() && !internal && verified ? u.href : originalLinks[i];
    });
  }
  function capture(event, cta) {
    if (!allowed() || !window.crypto || !crypto.randomUUID) return;
    if (!session) session = 'web_' + crypto.randomUUID();
    var properties = {
      distinct_id: session, session_id: session, platform: 'web', flow: 'website', schema_version: 1,
      channel: channel.id, campaign: channel.campaign, content: channel.content,
      page_path: location.pathname, cta_location: cta, is_internal: internal,
      $process_person_profile: false, $geoip_disable: true, $ip: null
    };
    // Do not await; navigation works even if the endpoint is blocked, slow or offline.
    try {
      fetch(settings.host + '/batch/', {
        method: 'POST', credentials: 'omit', mode: 'cors', keepalive: true, referrerPolicy: 'no-referrer',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ api_key: settings.public_project_token,
          batch: [{ event: event, properties: properties, timestamp: new Date().toISOString(), uuid: crypto.randomUUID() }] })
      }).catch(function () {});
    } catch (_) { /* Download remains available. */ }
  }
  function pageview() { if (allowed() && !pageSent) { pageSent = true; capture('web_pageview', 'none'); } }
  links.forEach(function (a) {
    a.addEventListener('click', function () {
      capture('web_store_click', a.closest('.downloadButtonsContainer') ? 'hero' : 'other');
    });
  });
  var panel = document.createElement('aside');
  panel.className = 'analytics-choice'; panel.setAttribute('aria-label', 'Website analytics');
  var message = document.createElement('p');
  message.textContent = blocked ? 'Website analytics are off because of your privacy preference.' :
    'Allow optional analytics? We count page visits and App Store clicks to understand which links help people find Leafling.';
  panel.appendChild(message);
  var privacy = document.createElement('a'); privacy.href = '/Leafling/privacypolicy/#website-analytics';
  privacy.textContent = 'Privacy details'; panel.appendChild(privacy);
  function button(text, value) {
    var b = document.createElement('button'); b.type = 'button'; b.textContent = text;
    b.addEventListener('click', function () {
      preference = value;
      try { localStorage.setItem(preferenceKey, value); } catch (_) {}
      panel.hidden = true;
      updateLinks(); pageview();
      if (value !== 'allow') session = null;
    }); panel.appendChild(b);
  }
  if (!blocked) { button('Allow analytics', 'allow'); button('No thanks', 'deny'); }
  else { var close = document.createElement('button'); close.type = 'button'; close.textContent = 'Close'; close.onclick = function () { panel.hidden = true; }; panel.appendChild(close); }
  panel.hidden = blocked || preference === 'allow' || preference === 'deny';
  // Keep the choice after the download CTA in document flow: no choice is required to download.
  var downloads = document.querySelector('.downloadButtonsContainer');
  if (downloads) downloads.insertAdjacentElement('afterend', panel);
  else document.body.appendChild(panel);
  var manage = document.createElement('button'); manage.type = 'button'; manage.className = 'analytics-manage';
  manage.textContent = 'Analytics choices'; manage.onclick = function () {
    panel.hidden = !panel.hidden;
    if (!panel.hidden) panel.scrollIntoView({ block: 'nearest' });
  };
  document.body.appendChild(manage);
  updateLinks(); pageview();
}());
