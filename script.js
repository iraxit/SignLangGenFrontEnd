// Event listener for image upload button
uploadButton.addEventListener('click', () => {
  console.log('upload button clicked')
  const file = imageUpload.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('image', file);
    fetch('/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        console.log('Image uploaded successfully!');
      } else {
        console.error('Error uploading image!');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  } else {
    alert("Please select an image file.");
  }
});

// Event listener for image upload button
queryaiButton.addEventListener('click', () => {
  console.log('Query AI button clicked')
  const url = 'https://signlanggen.onrender.com/queryai';
  fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.blob();
  })
  .then((blob) => showProduct(blob, product))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));
  });
  
  
