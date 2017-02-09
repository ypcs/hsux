chrome.extension.sendMessage({}, function(response) {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-420043-34', 'auto', 'hsux');
    ga('hsux.send', {hitType: 'event', eventCategory: 'user', eventAction: 'load', eventLabel: 'Load HSUX'});
    
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
          clearInterval(readyStateCheckInterval);

          var doc_body = document.getElementsByTagName('body');
          
          if (doc_body.length != 1) {return;}
          
        // If full page ad is displayed & user is logged in, remove ad
        if (doc_body[0].classList.contains('frontpage-ad-visible') && doc_body[0].classList.contains('user-logged-in')) {
            console.log("HSUX: Removing full-page ad.");
            doc_body[0].classList.remove('frontpage-ad-visible');
            ga('hsux.send', {hitType: 'event', eventCategory: 'user', eventAction: 'remove-frontpage-ad', eventLabel: 'Remove frontpage ad'});
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
                    console.log("HSUX: removing element #" + hide_these_elements[i] + ".");
                    e.remove();
                    ga('hsux.send', {hitType: 'event', eventCategory: 'user', eventAction: 'remove-element-' + hide_these_elements[i], eventLabel: 'Remove element ' + hide_these_elements[i]});
                }
            }
        }
    }, 10);
});
