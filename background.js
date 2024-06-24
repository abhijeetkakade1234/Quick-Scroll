// Variable to hold the timeout for click detection
let clickTimeout; 


/**
 * Add a listener for clicks on the extension icon
 * @param {Object} tab - The current tab object
 */
chrome.action.onClicked.addListener(function(tab) { 
    if (clickTimeout) {
        clearTimeout(clickTimeout);
        scrollToBottom();
        clickTimeout = null; // Reset the timeout
    } else {
        scrollToTop();
        clickTimeout = setTimeout(() => {
            clickTimeout = null; // Reset the timeout after a delay
        }, 300); // 300ms timeout to detect double-click
    }
});

/**
 * Function to scroll to the top of the page
 */
function scrollToTop() {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
}

/**
 * Function to scroll to the bottom of the page
 */
function scrollToBottom() {
  // Scroll to the bottom of the page
  window.scrollTo(0, document.body.scrollHeight);
}

