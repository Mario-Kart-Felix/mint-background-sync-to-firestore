
chrome.extension.sendMessage({}, () => {
	console.log(`connection to background page has been established`);
	onDocumentReady()
		.then(() => {
			console.log(`document is ready`);
			return downloadFile({url: "https://mint.intuit.com/transactionDownload.event?queryNew=&offset=0&filterType=cash&comparableType=8"})
		})
		.then(blob => blob.text())
		.then(fileContent => {
			console.log(`file downloaded, sending to the background`);
			chrome.extension.sendMessage({
				event: "file-downloaded",
				payload: {
					fileContent
				}
			})
		})
});
