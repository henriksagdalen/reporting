
let uploadedFileAsString = "";


function uploadFromFile() {
    // const content = document.querySelector('.content');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      // this will then display a text file
      //content.innerText = reader.result;
      uploadedFileAsString = reader.result;
      console.log(uploadedFileAsString);

      var stringSplitted = uploadedFileAsString.split(/\r?\n/);
      console.log(stringSplitted);

      // Extract the classification from text file, and set the classification option to the correct option.
      var allClassifications = document.querySelector(".classification select");
      var allClassificationsArray = [];
      let reportClassification = uploadedFileAsString.slice(16,19);
      console.log(reportClassification);

      for (var i = 1; i < 5; i++) {
        allClassificationsArray.push(allClassifications.options[i].value);
      }

    }, false);
    if (file) {
      reader.readAsText(file);
    }
}
