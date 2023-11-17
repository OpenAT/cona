/*
// For all shop links, scroll parent to top on click
const debug = false;
let parent_scroll_top_enabled = true;

if (window.self !== window.top) {
    if (debug) {
        console.log("Inside an iframe, parent-scroll-iframe-top enabled");
    }
} else {
    if (debug) {
        console.log("Not inside an iframe, parent-scroll-iframe-top disabled");
    }
    parent_scroll_top_enabled = false;
}

function waitForIframeResizer() {
    if (!parent_scroll_top_enabled) {
        return;
    }

    if (window.parentIFrame) {
        if (debug) {
            console.log("iFrameResizer found!");
        }
        setupLinks();
    } else {
        if (debug) {
            console.log("iFrameResizer not found, looking again...");
        }
        setTimeout(waitForIframeResizer, 500);
    }
}

waitForIframeResizer();

function setupLinks() {
    try {
        if (document.querySelector('[data-latest-product-theme="cona_inline_test"]')) {
            addScrollTopFrameElementHandler('add_to_cart');
            addScrollTopFrameElementHandler('wsd_checkout_form_submit_button');
        }

    } catch(error) {
        if (debug) {
            console.info('parent-scroll-iframe-top: ' + error);
        }
    }
}

function addScrollTopFrameElementHandler(elementId) {
	var element = document.getElementById(elementId);
	if (element) {
	    if (debug) {
    		console.info("Hooking " + elementId);
	    }
		element.addEventListener('click', function(e) {
			window.parentIFrame.getPageInfo((i) => { window.parentIFrame.scrollTo(0, i.offsetTop); })
		});
	}
}
*/