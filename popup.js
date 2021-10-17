function displayDomains() {
  chrome.storage.local.get(['domains'], function (object) {
    const pageList = document.getElementById('displayDomains');
    if (object.domains) {
      const domains = object.domains;
      domains.map(domain => {
        const list = document.createElement('li');
        list.innerHTML = domain;
        pageList.appendChild(list);
      })
    }
  });
}

displayDomains();

document.getElementById('domainSubmit').addEventListener('click', () => {
  const userDomain = document.getElementById('userDomain').value.trim();
  chrome.storage.local.get(['domains'], function (object) {
    const newDomain = object.domains || [];
    newDomain.push(userDomain);
    chrome.storage.local.set({ domains: newDomain });
  })
})

document.getElementById('clearList').addEventListener('click', () => {
  chrome.storage.local.clear();
})

