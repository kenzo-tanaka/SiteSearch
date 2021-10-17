chrome.omnibox.onInputEntered.addListener((text) => {
  // Encode user input for special characters , / ? : @ & = + $ #
  const target = 'site:railsguides.jp ' + text
  const newURL = 'https://www.google.com/search?q=' + encodeURIComponent(target);
  chrome.tabs.create({ url: newURL });
});
