chrome.commands.onCommand.addListener(async function(command) {
  await chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
    chrome.tabs.query({ currentWindow: true}, function(sbat) {
      let targetIndex = 0;
      switch(command.slice(-1)) {
        case '1':
          break;
        case '4':
          targetIndex = -1;
          break;
        case '2':
          targetIndex = sbat.findIndex(i => i.id === tabs[0].id) - 1;
          break;
        case '3':
          targetIndex = (sbat.findIndex(i => i.id === tabs[0].id) + 1) % sbat.length;
          break;
      }
      chrome.tabs.move(tabs[0].id, {index: targetIndex});
    });
  });
});

// vim: set ts=2 sts=2 sw=2 et:
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/move
