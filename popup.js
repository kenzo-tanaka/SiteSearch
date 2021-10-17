function displayDomains() {
  chrome.storage.local.get(['domains'], (object) => {
    if (object.domains) {
      const domains = object.domains;
      domains.map(domain => {
        const list = document.createElement('li');
        list.innerHTML = domain;
        document.getElementById('displayDomains').appendChild(list);
      })
    }
  });
}

displayDomains();

document.getElementById('domainSubmit').addEventListener('click', () => {
  const userDomain = document.getElementById('userDomain').value.trim();
  chrome.storage.local.get(['domains'], (object) => {
    const newDomain = object.domains || [];
    newDomain.push(userDomain);
    chrome.storage.local.set({ domains: newDomain });
  })
})

document.getElementById('clearList').addEventListener('click', () => {
  chrome.storage.local.clear();
})

