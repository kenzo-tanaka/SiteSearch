const displayDomains = () => {
  chrome.storage.local.get(null, (object) => {
    if (Object.values(object) === []) { return; }

    Object.values(object).map(value => {
      const list = document.createElement('li');
      list.innerHTML = value;
      const removeBtn = createRemoveBtn(value);
      list.appendChild(removeBtn);
      document.getElementById('displayDomains').appendChild(list);
    })
  });
};

displayDomains();

const createRemoveBtn = (value) => {
  const removeBtn = document.createElement('button');
  removeBtn.className = 'domain-manager__domain-remove';
  removeBtn.innerText = 'x';
  removeBtn.addEventListener('click', () => {
    chrome.storage.local.remove(value);
    list.remove();
  })
  return removeBtn;
}

const addDomain = () => {
  document.getElementById('domainSubmit').addEventListener('click', () => {
    const userDomain = document.getElementById('userDomain').value.trim();
    const storeValue = {};
    storeValue[userDomain] = userDomain;
    chrome.storage.local.set(storeValue);
  })
};

addDomain();

