browser.commands.onCommand.addListener(async function(command) {
  const target_index = command.slice(-1) % 9 - 1;
	const sbat = await browser.tabs.query({currentWindow: true, active: true});
	let current = sbat[0]
  var moving = browser.tabs.move(current.id, {index: target_index});
  moving.then(onMoved, onError);
});

// vim: set ts=2 sts=2 sw=2 et:
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/move
