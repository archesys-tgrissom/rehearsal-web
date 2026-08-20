// Datadog RUM bootstrap (demo shim). With a real client token this is where
// @datadog/browser-rum init runs; with the placeholder it stays inert by design.
(function () {
  var cfg = window.DD_RUM_CONFIG || {};
  if (!cfg.clientToken || cfg.clientToken.indexOf("__") === 0) return; // placeholder: inert
})();
