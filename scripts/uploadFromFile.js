
let uploadedFileAsString = "";

function uploadFromFile() {
    // const content = document.querySelector('.content');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      // this will then display a text file
      //content.innerText = reader.result;
      uploadedFileAsString = reader.result;

      // Split the string into an array, separated by line breaks.
      var stringSplittedToArray = uploadedFileAsString.split(/\r?\n/);
      console.log(stringSplittedToArray);
      
      // Search trough the array and remove every item that has a empty string value. Return it as a new array.
      var arrayWithoutEmptyElements = [];
      for (var i = 0; i < stringSplittedToArray.length; i++) {
        if (stringSplittedToArray[i] !== "") {
          arrayWithoutEmptyElements.push(stringSplittedToArray[i])
        }
      }

      // Write the new array without empty elements to console.
      console.log(arrayWithoutEmptyElements);

      // Create an array of all available classifications
      var allClassifications = document.querySelector(".classification select");
      var allClassificationsArray = [];
      for (var i = 1; i < allClassifications.length; i++) {
        allClassificationsArray.push(allClassifications.options[i].value);
      }

      // 
      for (var i = 0; i < allClassificationsArray.length; i++) {
        if (allClassificationsArray[i] == arrayWithoutEmptyElements[0].slice(16,19)) {
          console.log(allClassificationsArray[i]);
          
        }
      }


    }, false);
    if (file) {
      reader.readAsText(file);
    }
}
