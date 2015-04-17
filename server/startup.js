Meteor.startup(function() {
  BrowserPolicy.content.allowScriptOrigin("http://*.googleapis.com");
  BrowserPolicy.content.allowScriptOrigin("https://*.googleapis.com");
  BrowserPolicy.content.allowOriginForAll("https://*.googleapis.com");
  BrowserPolicy.content.allowConnectOrigin("http://app.quantifiedcrowd.uk");
//   BrowserPolicy.framing.restrictToOrigin("https://youtube.com")
//   BrowserPolicy.framing.allowAll()
  BrowserPolicy.content.allowInlineScripts();
  BrowserPolicy.content.allowEval();
  BrowserPolicy.content.allowOriginForAll('fonts.gstatic.com');
  BrowserPolicy.content.allowOriginForAll('*.googleapis.com');
  BrowserPolicy.content.allowOriginForAll('maps.gstatic.com');
  BrowserPolicy.content.allowEval('https://ajax.googleapis.com');
});