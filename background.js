let domains = [];
chrome.storage.local.get(null, object => {
  domains = Object.values(object);
})

chrome.omnibox.onInputStarted.addListener(() => {
  chrome.omnibox.setDefaultSuggestion({
    description: 'Select domain below.'
  });
})

chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  const suggestions = domains.map(domain => { return { content: 'site:' + domain + ' ' + text, description: domain } })
  suggest(suggestions)
})

chrome.omnibox.onInputEntered.addListener((text) => {
  const newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
  chrome.tabs.update({ url: newURL });
});
