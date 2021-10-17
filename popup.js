const displayDomains = () => {
  chrome.storage.local.get(null, (object) => {
    if (Object.values(object) === []) { return; }

    Object.values(object).map(value => {
      const list = document.createElement('li');
      list.innerHTML = value;
      document.getElementById('displayDomains').appendChild(list);
    })
  });
};

displayDomains();

const addDomain = () => {
  document.getElementById('domainSubmit').addEventListener('click', () => {
    const userDomain = document.getElementById('userDomain').value.trim();
    const storeValue = {};
    storeValue[userDomain] = userDomain;
    chrome.storage.local.set(storeValue);
  })
};

addDomain();


// chrome.storage.local.remove('domains');
