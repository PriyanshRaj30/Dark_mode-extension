document.getElementById('toggleDarkMode').addEventListener('click', () => {
    // Send a message to the content script to toggle dark mode
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['content.js']
      });
    });
  });