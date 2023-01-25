
let uploadedFileAsArray = [];


function uploadFromFile() {
    const content = document.querySelector('.content');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      // this will then display a text file
      content.innerText = reader.result;
      uploadedFileAsArray.push(reader.result);
    }, false);
  
    if (file) {
      reader.readAsText(file);
    }

    //uploadedFileAsArray.push("test");
    //uploadedFileAsArray.push("test2");

    var text = ["This is some text. \n This is a line break"];
    
    console.log(uploadedFileAsArray);
    console.log(text);



}
