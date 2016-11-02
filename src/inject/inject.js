chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

        var doc_body = document.getElementsByTagName('body');
        
        if (doc_body.length != 1) {return;}
        
        // If full page ad is displayed & user is logged in, remove ad
        if (doc_body[0].classList.contains('frontpage-ad-visible') && doc_body[0].classList.contains('user-logged-in')) {
            console.log("HSUX: Removing full-page ad.");
            doc_body[0].classList.remove('frontpage-ad-visible');
        }

        // Hide 'order now plz' campaigns
        var e = document.getElementById('order-campaign-element');
        if (e) {
            e.remove();
        }
	}
	}, 10);
});
