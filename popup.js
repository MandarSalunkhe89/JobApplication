document.getElementById('scanBtn').addEventListener('click', async () => {
  const status = document.getElementById('status');
  status.textContent = 'Scanning...';
  
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const response = await chrome.tabs.sendMessage(tab.id, { action: 'detectJob' });
    status.textContent = `Found: ${response.title}`;
  } catch (error) {
    status.textContent = 'Error: ' + error.message;
  }
});