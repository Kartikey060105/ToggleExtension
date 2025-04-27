chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'toggleTheme') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    files: ['content.js'],
                }).catch((err) => {
                    console.error("Error executing content.js:", err);
                });
            } else {
                console.error("No active tab found");
            }
        });
    }
});
