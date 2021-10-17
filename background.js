const domains = [
  'railsguide.jp',
  'docs.ruby-lang.org/ja',
  'github.com',
  'developer.mozilla.org',
];

chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  const suggestions = domains.map(domain => { return { content: domain + ' ' + text, description: domain } })
  suggest(suggestions)
})

chrome.omnibox.onInputEntered.addListener((text) => {
  const newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
  chrome.tabs.create({ url: newURL });
});
