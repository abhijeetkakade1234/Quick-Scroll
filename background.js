let lastClickTime = 0;
const doubleClickDelay = 300; // milliseconds

chrome.action.onClicked.addListener((tab) => {
  const currentTime = new Date().getTime();
  
  if (currentTime - lastClickTime < doubleClickDelay) {
    // Double click detected, scroll to bottom
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: scrollToBottom
    });
  } else {
    // Single click, scroll to top
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: scrollToTop
    });
  }
  
  lastClickTime = currentTime;
});

/**
 * Scrolls the window to the top of the page smoothly.
 *
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/**
 * Scrolls the window to the bottom of the page smoothly.
 *
 */
function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
}