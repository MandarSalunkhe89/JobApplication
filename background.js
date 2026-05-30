// JobApply Pro - Background Script
chrome.runtime.onInstalled.addListener(() => {
  console.log('JobApply Pro installed');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getProfile') {
    chrome.storage.local.get('profile', (data) => {
      sendResponse({ profile: data.profile || {} });
    });
    return true;
  }
});