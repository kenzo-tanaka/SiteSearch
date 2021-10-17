// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function displayWords() {
  chrome.storage.local.get(['domains'], function (object) {
    const pageList = document.getElementById('displayWords');
    if (object.domains) {
      searchWords = object.domains
      for (var i = 0; i < searchWords.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerText = searchWords[i]
        pageList.appendChild(listItem);
      }
    }
  });
}

displayWords();

document.getElementById('domainSubmit').addEventListener('click', () => {
  const userWords = document.getElementById('userDomain').value.trim();
  chrome.storage.local.get(['domains'], function (object) {
    const newWords = object.domains || [];
    newWords.push(userWords);
    chrome.storage.local.set({ domains: newWords });
  })
})

document.getElementById('clearList').addEventListener('click', () => {
  chrome.storage.local.clear();
})

