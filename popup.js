const displayDomains = () => {
  chrome.storage.local.get(null, (object) => {
    if (Object.values(object) === []) { return; }

    Object.values(object).map(value => {
      const list = document.createElement('li');
      list.innerHTML = value;
      createRemoveBtn(list, value);
      document.getElementById('displayDomains').appendChild(list);
    })
  });
};

displayDomains();

const createRemoveBtn = (list, value) => {
  const removeBtn = document.createElement('button');
  removeBtn.className = 'domain-manager__domain-remove';
  removeBtn.innerText = 'x';
  removeBtn.addEventListener('click', () => {
    chrome.storage.local.remove(value);
    list.remove();
  })
  list.appendChild(removeBtn);
};

const inputCurrentDomain = () => {
  const checkbox = document.querySelector('.domain-manager__input-current-domain input');
  const input = document.querySelector('.domain-manager__domain-input');

  checkbox.addEventListener('click', () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
      if (checkbox.checked) {
        const url = tabs[0].url;
        const { hostname } = new URL(url);
        input.value = hostname;
      } else {
        input.value = '';
      }
    });
  })
}

inputCurrentDomain();

const addDomain = () => {
  document.getElementById('domainSubmit').addEventListener('click', () => {
    const userDomain = document.getElementById('userDomain').value.trim();
    const storeValue = {};
    storeValue[userDomain] = userDomain;
    chrome.storage.local.set(storeValue);
  })
};

addDomain();

