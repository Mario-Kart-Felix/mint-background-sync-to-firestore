function downloadFile({url, ...options}) {
  return fetch(url, options)
      .then( (res) => res.blob() );
}
