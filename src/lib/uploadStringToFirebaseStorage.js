function uploadStringToFirebaseStorage({stringContent, firebase, filePath}) {
  const storageRef = firebase.storage().ref();

  const fileRef = storageRef.child(filePath);
  return fileRef.putString(stringContent)
      .then(() => {
        console.log(`content has been uploaded to ${fileRef.fullPath}`);
      });
}
