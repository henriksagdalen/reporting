
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
      // Push all the values from the query selector as string values to an array.
      for (var i = 1; i < allClassifications.length; i++) {
        allClassificationsArray.push(allClassifications.options[i].value);
      }

      // Check if the classification from the report matches one of the possible classifications, and set the report classification to the matched value.
      for (var i = 0; i < allClassificationsArray.length; i++) {
        if (allClassificationsArray[i] == arrayWithoutEmptyElements[0].slice(16,19)) {
          var classificationSelect = document.getElementById("klasser");
          classificationSelect.value = allClassificationsArray[i];
        }
      }

      // Get the "from" value from the report, and put it in the from-field. 
      var from = document.getElementById("from");
      from.value = arrayWithoutEmptyElements[1].slice(6,100);

      // Get the "to" value from the report, and put it in the to-field.
      var to = document.getElementById("to");
      to.value = arrayWithoutEmptyElements[2].slice(4,100);

      // Get the "writer/operator" from the report, and put it in the writer/operator field.
      var writerOperator = document.getElementById("writeroperator");
      writerOperator.value = arrayWithoutEmptyElements[3].slice(17,100);

      // Get the "own position" from the report, and put it in the "own position" field.
      var ownPosition = document.getElementById("ownposition");
      ownPosition.value = arrayWithoutEmptyElements[4].slice(14,100);

      // Get the NAI/TAI from the report, and put it in the NAI/TAI position field.
      var naitai = document.getElementById("naitai");
      naitai.value = arrayWithoutEmptyElements[5].slice(9,100);

      // Get the "DTG from" the report, and put it in the DTG-from field.
      var dtgFrom = document.getElementById("dtgfrom");
      dtgFrom.value = arrayWithoutEmptyElements[6].slice(9,100);

      // Get the "DTG to" the report, and put it in the DTG-to field.
      var dtgTo = document.getElementById("dtgto");
      dtgTo.value = arrayWithoutEmptyElements[7].slice(9,100);

      // Find the array elements that contains the BLUF information. Probably excessive because bluf will always start at array-index 8.
      var blufStartsAtIndex = "";
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Bottom Line Up Front:") {
          blufStartsAtIndex = i + 1;
        }
      }
      console.log(blufStartsAtIndex);
      
      var blufEndsAtIndex = "";
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Pattern of life:") {
          blufEndsAtIndex = i;
        }
      }
      console.log(blufEndsAtIndex);
      
      var blufContent = "";
      for (var i = blufStartsAtIndex; i < blufEndsAtIndex; i++) {
        blufContent = blufContent + arrayWithoutEmptyElements[i];
      }

      console.log(blufContent);
      var blufValueFromFile = document.getElementById("bluf");
      blufValueFromFile.value = blufContent;
      

    }, false);
    if (file) {
      reader.readAsText(file);
    }
}
