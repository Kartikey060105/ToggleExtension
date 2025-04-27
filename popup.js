const toggleSwitch = document.querySelector('input[type="checkbox"]')

toggleSwitch.addEventListener('change', () => {
    chrome.runtime.sendMessage({action : 'toggleTheme'})
})