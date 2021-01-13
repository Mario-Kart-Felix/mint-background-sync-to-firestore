
function onDocumentReady(){
  return new Promise((resolve) => {
    const readyStateCheckInterval = setInterval(function handler() {
      if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        return resolve();
      }
    }, 10);
  })
}
