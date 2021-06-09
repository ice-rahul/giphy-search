const downloadFile = async (url, name) => {
  if (!url) {
    return new Error('Please Enter a Url');
  }

  const response = await fetch(url);
  const blob = await response.blob();
  const blobURL = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = blobURL;
  a.style = 'display: none';

  if (name && name.length) a.download = name;
  document.body.appendChild(a);
  a.click();
  return true;
};

export default downloadFile;
