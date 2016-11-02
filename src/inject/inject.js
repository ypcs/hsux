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

        // Remove other elements from the page
        var hide_these_elements = [
            'order-campaign-element', // 'Order now plz'
            //'news-list-area',         // Newsfeeds for IL, Metro, etc.
            //'iltapulu_fp_box_iframe', // Iltapulu
            //'top-extra-links',        // Top extra links, 'HS', 'Nyt', 'Oikotie' etc.
            ];

            for (var i=0; i<hide_these_elements.length; i++) {
                var e = document.getElementById(hide_these_elements[i]);
                if (e) {
                    console.log("HSUX: removing element #" + hide_these_elements[i] ".");
                    e.remove();
                }
            }
        }
    }, 10);
});
