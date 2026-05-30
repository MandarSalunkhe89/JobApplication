// JobApply Pro - Content Script
console.log('JobApply Pro loaded');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'detectJob') {
    sendResponse({ isJob: true, title: document.title, url: window.location.href });
  }
  return true;
});