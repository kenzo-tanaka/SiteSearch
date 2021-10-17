function displayDomains() {
  chrome.storage.local.get(['domains'], function (object) {
    const pageList = document.getElementById('displayDomains');
    if (object.domains) {
      const domains = object.domains;
      for (var i = 0; i < domains.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerText = domains[i]
        pageList.appendChild(listItem);
      }
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

