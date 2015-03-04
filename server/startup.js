Meteor.startup(function() {
//   BrowserPolicy.content.allowScriptOrigin("http://*.googleapis.com");
//   BrowserPolicy.content.allowScriptOrigin("https://*.googleapis.com");
//   BrowserPolicy.content.allowOriginForAll("https://*.googleapis.com");
//   BrowserPolicy.content.allowConnectOrigin("https://*.googleapis.com");
//   BrowserPolicy.framing.restrictToOrigin("https://youtube.com")
//   BrowserPolicy.framing.allowAll()
//   BrowserPolicy.content.allowInlineScripts();
  BrowserPolicy.content.allowEval();
});