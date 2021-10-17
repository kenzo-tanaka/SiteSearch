// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function displayWords() {
  chrome.storage.local.get(['domains'], function (object) {
    let pageList = document.getElementById('displayWords');
    if (object.domains) {
      searchWords = object.domains
      for (var i = 0; i < searchWords.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerText = searchWords[i]
        pageList.appendChild(listItem);
      }
    }
  });
}

displayWords();

document.getElementById('domainSubmit').onclick = function () {
  let userWords = document.getElementById('userDomain').value.trim();
  chrome.storage.local.get(['domains'], function (object) {
    let newWords = object.domains || [];
    newWords.push(userWords);
    chrome.storage.local.set({ domains: newWords });
  })
}

document.getElementById('clearList').onclick = function () {
  chrome.storage.local.clear();
}
