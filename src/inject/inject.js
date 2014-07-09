console.log("Loading inject.js.");
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
        // TODO: Check if body has class (full page add, requires user 
        //       intervention) & user is logged in (ie. has probably 
        //       paid for content)
        // user-logged-in ; frontpage-ad-visible
	}
	}, 10);
});
