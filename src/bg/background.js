const options = new Store('settings', {
  'apiKey': 'Enter your firebase apiKey',
});

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(`received ${request.event || 'unknown'} event`);
      if ( request.event === 'file-downloaded') {
        const firebase = initializeFirebase({settings: options});
        return uploadStringToFirebaseStorage({
          stringContent: request.payload.fileContent,
          firebase,
          filePath: `mint/tmp/transactions-${Date.now()}.csv`,
        });
      }

      sendResponse('message from background');
    });
