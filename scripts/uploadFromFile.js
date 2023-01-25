


var text = "";

function previewFile() {
    const content = document.querySelector('.content');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      // this will then display a text file
      content.innerText = reader.result;
      text.push(reader.result);
    }, false);
  
    if (file) {
      reader.readAsText(file);
      console.log(text);
    }
  }
