(function () {
  const form = document.getElementById('site-search-domain-form');
  const input = document.getElementById('site-search-domain-input');

  form.addEventListener('submit', (event) => {
    const value = input.value;
    const domain = {}
    domain[value] = value;

    chrome.storage.local.set(domain);
    event.preventDefault();
  })
})();
