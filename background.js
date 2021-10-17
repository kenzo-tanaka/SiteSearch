const domains = [
  'railsguide.jp',
  'docs.ruby-lang.org/ja',
  'github.com',
  'developer.mozilla.org',
  'developer.chrome.com/docs/extensions/'
];

chrome.omnibox.onInputStarted.addListener(() => {
  chrome.omnibox.setDefaultSuggestion({
    description: 'Select domain below.'
  });
})

chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  const suggestions = domains.map(domain => { return { content: domain + ' ' + text, description: domain } })
  suggest(suggestions)
})

chrome.omnibox.onInputEntered.addListener((text) => {
  const newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
  chrome.tabs.update({ url: newURL });
});
