chrome.contextMenus.create({
  id: 'current-page',
  title: 'Site search',
  type: 'normal',
  contexts: ['page'],
});
