var observeDOM = (function() {
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;

    return function(obj, callback){
        if(MutationObserver) {
            
            var obs = new MutationObserver(function(mutations, observer){
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
                console.log('Stress factor hidden ...')
            }
        });
}

window.onload = function () {

    console.log('loaded extension');
    removeStressFactors();

    observeDOM(document, function() { 
        removeStressFactors();
    });
}
