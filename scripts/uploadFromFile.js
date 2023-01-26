
let uploadedFileAsString = "";

function uploadFromFile() {
    // const content = document.querySelector('.content');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      // this will then display a text file
      //content.innerText = reader.result;
      uploadedFileAsString = reader.result;

      var stringSplittedToArray = uploadedFileAsString.split(/\r?\n/);
      console.log(stringSplittedToArray);
      
      // Search trough the array and remove every item that has a empty string value. Return it as a new array.
      var arrayWithoutEmptyElements = [];
      for (var i = 0; i <= stringSplittedToArray.length; i++) {
        if (stringSplittedToArray[i] !== "") {
          arrayWithoutEmptyElements.push(stringSplittedToArray[i])
        }
      }

      console.log(arrayWithoutEmptyElements);

      // In the new array, join all elements from one input field to the next. 
      var indexOfClassification = arrayWithoutEmptyElements.indexOf();
      console.log(indexOfClassification);


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
