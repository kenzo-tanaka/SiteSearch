chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  suggest([
    { content: 'site:railsguide.jp ' + text, description: 'site:railsguide.jp ' }
  ])
})

chrome.omnibox.onInputEntered.addListener((text) => {
  const target = 'site:railsguides.jp ' + text
  const newURL = 'https://www.google.com/search?q=' + encodeURIComponent(target);
  chrome.tabs.create({ url: newURL });
});
