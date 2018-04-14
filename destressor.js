var observeDOM = (function() { //This methods code I got from StackOverflow https://stackoverflow.com/a/14570614/1924774
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;

    return function(obj, callback) {
        if(MutationObserver) {
            
            var obs = new MutationObserver((mutations, observer) => {
                if(mutations[0].addedNodes.length || mutations[0].removedNodes.length)
                    callback();
            });

            obs.observe(obj, {childList: true, subtree: true});
        }
        else if(eventListenerSupported){
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    };
})();

function removeStressFactors() {
    document
        .querySelectorAll('.js_sr_persuation_msg, .hprt-table-cheapest-block-banner-wrapper, .urgency_message_x_people, .fe_banner__red, .only_x_left, .hp-rt-recently-booked, .top_scarcity')
        .forEach(stressFactor => {
            if(stressFactor.style.display != 'none') {
                stressFactor.style.display = 'none';
            }
        });
}

window.onload = function () {

    //Remove current stressors
    removeStressFactors();

    //Start monitoring for new stressors
    observeDOM(document, function() { 
        removeStressFactors();
    });
}
