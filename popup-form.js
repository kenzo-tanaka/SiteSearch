(function () {
  const form = document.getElementById('site-search-domain-form');
  const input = document.getElementById('site-search-domain-input');

  form.addEventListener('submit', (event) => {
    const domain = input.value;
    chrome.storage.local.set({ 'domain': domain })
    event.preventDefault();
  })
})();
