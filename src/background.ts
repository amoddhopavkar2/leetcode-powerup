// Background service worker for LeetCode Power-Up
console.log('Background service worker initialized');

// Listen for installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received:', message);
  // Add your message handling logic here
  return true; // Keep the message channel open for async responses
}); 