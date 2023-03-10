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

//#region CLASSIFICATIONS
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

//#endregion

//#region STATIC VALUES
      function staticValues(variableName, elementID, arrayIndex, sliceNumber) {
        var variableName = document.getElementById(elementID);
        variableName.value = arrayWithoutEmptyElements[arrayIndex].slice(sliceNumber);
      }

      staticValues(from, "from", 1, 6);
      staticValues(to, "to", 2, 4);
      staticValues(writeroperator, "writeroperator", 3, 17);
      staticValues(ownposition, "ownposition", 4, 14);
      staticValues(naitai, "naitai", 5, 9);
      staticValues(dtgfrom, "dtgfrom", 6, 10);
      staticValues(dtgto, "dtgto", 7, 8)
/*
      // Get the "from" value from the report, and put it in the from-field. 
      var from = document.getElementById("from");
      from.value = arrayWithoutEmptyElements[1].slice(6);

      // Get the "to" value from the report, and put it in the to-field.
      var to = document.getElementById("to");
      to.value = arrayWithoutEmptyElements[2].slice(4);

      // Get the "writer/operator" from the report, and put it in the writer/operator field.
      var writerOperator = document.getElementById("writeroperator");
      writerOperator.value = arrayWithoutEmptyElements[3].slice(17);

      // Get the "own position" from the report, and put it in the "own position" field.
      var ownPosition = document.getElementById("ownposition");
      ownPosition.value = arrayWithoutEmptyElements[4].slice(14);

      // Get the NAI/TAI from the report, and put it in the NAI/TAI position field.
      var naitai = document.getElementById("naitai");
      naitai.value = arrayWithoutEmptyElements[5].slice(9);

      // Get the "DTG from" the report, and put it in the DTG-from field.
      var dtgFrom = document.getElementById("dtgfrom");
      dtgFrom.value = arrayWithoutEmptyElements[6].slice(10);

      // Get the "DTG to" the report, and put it in the DTG-to field.
      var dtgTo = document.getElementById("dtgto");
      dtgTo.value = arrayWithoutEmptyElements[7].slice(8);
*/
//#endregion

//#region BLUF
      function findIndex(variableName, keyword) {
        var variableName = "";
        for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
          if (arrayWithoutEmptyElements[i] == keyword) {
            variableName = i + 1;
            return variableName;
          }
        }
      }

      var blufindex = findIndex(blufstartindex, "Bottom Line Up Front:");
      console.log(blufindex);

      // Find the array elements that contains the BLUF information. Probably excessive because bluf will always start at array-index 8 for now.
      var blufStartsAtIndex = "";
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Bottom Line Up Front:") {
          blufStartsAtIndex = i + 1;
        }
      }
      
      // Find the array element that contains pattern of life. This will indicate where the BLUF information ends.
      var blufEndsAtIndex = "";
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Pattern of life:") {
          blufEndsAtIndex = i;
        }
      }
      
      // Iterate trough the elements in the array that contains the BLUF information, and write it to a string. 
      var blufContent = "";
      for (var i = blufStartsAtIndex; i < blufEndsAtIndex; i++) {
        blufContent = blufContent + arrayWithoutEmptyElements[i];
        blufContent = blufContent + "\n";
      }

      // Input the string in the BLUF-field in the report.
      var bluf = document.getElementById("bluf");
      bluf.value = blufContent;
//#endregion

//#region PATTERN OF LIFE
      // Find the array element that contains "Pattern of life"-string value. This will indicate the start of "Pattern of life"-information.
      var polStartsAtIndex = blufEndsAtIndex + 1;

      // Find the array element that contains "static units in NAI".
      var polEndsAtIndex = "";
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Static units in NAI:") {
          polEndsAtIndex = i;
        }
      }

      // Iterate trough the elements in the array that contains the POL information, and write it to a string.
      var polContent = "";
      for (var i = polStartsAtIndex; i < polEndsAtIndex; i++) {
        polContent = polContent + arrayWithoutEmptyElements[i];
        polContent = polContent + "\n";
      }
      
      // Input the string in the POL-field in the report. 
      var patternOfLife = document.getElementById("patternoflife");
      patternOfLife.value = polContent;
//#endregion

//#region STATIC UNITS IN NAI
      // Find the start of the elements that belongs to "Static Units in NAI".
      var staticUnitsStartsAtIndex = polEndsAtIndex + 1;

      // Find the array element that contains "Overall comment".
      var staticUnitsEndsAtIndex = "";
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Overall comment:") {
          staticUnitsEndsAtIndex = i;
        }
      }

      // Iterate trough the elements in the array that contains information about static units, and write it to the table in the report.
      var staticUnits = [];

      // Calculate how many rows that are needed in the table
      var tableRowCounter = staticUnitsEndsAtIndex - staticUnitsStartsAtIndex;

      // Split each of the strings into separate arrays, to make it easier to extract the text we need.
      for (var i = staticUnitsStartsAtIndex; i < staticUnitsEndsAtIndex; i++) {
        staticUnits.push(arrayWithoutEmptyElements[i].split(" "));
      }
      
      // Get the table from the HTML-document
      var staticUnitsTable = document.getElementById("staticunits");

      // Create the needed amount of rows and cells, based on the row counter.
      for (var i = 0; i < tableRowCounter; i++) {

        // Create a table row.
        var row = document.createElement("tr");
        
        // Create the cells that store the input fields.
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");

        // Create the input fields, and make an incremental id-value
        var input1 = document.createElement("input");
        input1.id = 'staticunit' + (i + 1);
        var input2 = document.createElement("input");
        input2.id = 'staticdtg' + (i + 1);

        // Append the input-fields to the cells
        cell1.appendChild(input1);
        cell2.appendChild(input2);

        // Append the cells to the new row.
        row.appendChild(cell1);
        row.appendChild(cell2);

        // Append the row to the table
        staticUnitsTable.appendChild(row);
        // Repeat the process for all rows of static units.
      }

      // Declare a variable to store the value for static unit, and dtg.
      var staticUnitValue;
      var staticDTGValue;

      // Iterate trough all array elements that contain static units, and input the values in the table cells.
      for (var i = 0; i < tableRowCounter; i++) {
        var staticUnitID = "staticunit" + i;
        var staticDTGID = "staticdtg" + i;
          staticUnitValue = document.getElementById(staticUnitID);
          staticDTGValue = document.getElementById(staticDTGID);

          // Only extract the "Unit" and the "DTG" from the array.
          staticUnitValue.value = staticUnits[i][0];
          staticDTGValue.value = staticUnits[i][3];
      }
      console.log(staticUnits);

//#endregion

//#region OVERALL COMMENT

      // Find the array index of where "Overall comment"-content is stored
      var overallCommentStartsAtIndex;
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Overall comment:") {
          overallCommentStartsAtIndex = i + 1;
        }
      }

      // Find the array index of where "Overall comment"-content ends.
      var overallCommentEndsAtIndex;
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Overall assessment:") {
          overallCommentEndsAtIndex = i;
        }
      }

      // Declare a variable for storing the content of the "Overall comment".
      var overallCommentContent = "";

      // Iterate trough the elements that belongs to "Overall comment", and assign them to the "Overall comment"-field.
      for (var i = overallCommentStartsAtIndex; i < overallCommentEndsAtIndex; i++) {
        overallCommentContent = overallCommentContent + arrayWithoutEmptyElements[i];
        overallCommentContent = overallCommentContent + "\n";
      }

      // Get the element that will display the overall comment
      var overallCommentElement = document.getElementById("overallcomment");

      // Set the value of the element equal to the content of the "Overall comment"-array elements. 
      overallCommentElement.value = overallCommentContent;
//#endregion

//#region OVERALL ASSESSMENT
      // Get the index of where the content for "Overall assessment" starts.
      var overallAssessmentStartsAtIndex = overallCommentEndsAtIndex + 1;
      
      // Search for the first element that contains the string "Journal number:". Break the loop when it finds the first string that matches the value. 
      // Set the "Overall assessment"-end index equal to the index given from the match above.
      var overallAssessmentEndsAtIndex;
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i].substring(0,15) == "Journal number:") {
          overallAssessmentEndsAtIndex = i;
          break;
        }
      }

      // Iterate trough all the elements that contains content for the Overall assessment, and append them to the string. 
      var overallAssessmentContent = "";
      for (var i = overallAssessmentStartsAtIndex; i < overallAssessmentEndsAtIndex; i++) {
        overallAssessmentContent = overallAssessmentContent + arrayWithoutEmptyElements[i];
        overallAssessmentContent = overallAssessmentContent + "\n";
      }

      // Get the overall assessment field from the report, and add the content to the field. 
      var overallAssessmentValue = document.getElementById("overallassessment");
      overallAssessmentValue.value = overallAssessmentContent;
//#endregion

//#region JOURNAL NUMBERS
      // Find the element that contains the first "Journal number:" for the report. This is the same index as where "overall assessment" ends.
      var journalNumberStartIndex = overallAssessmentEndsAtIndex;
      
      // Display the content for the first observation in the input fields.
      var firstJournalNumber = document.getElementById("journalnumber");
      var firstDTG = document.getElementById("dtg0");
      firstJournalNumber.value = arrayWithoutEmptyElements[journalNumberStartIndex].substring(16);
      firstDTG.value = arrayWithoutEmptyElements[journalNumberStartIndex + 1].substring(5,11);

      // Find the index of where the array elements for the first fact in the report starts.
      var firstFactsIndexStart = journalNumberStartIndex + 2; // Equal to +2 since journalnumber and DTG takes up one array element each.
      var firstFactsIndexEnd; // Declared but not assigned yet.

      // Assign the facts-content to a string variable, and slice out the generic part ("Facts:"). Add line break at the end.
      var firstFactsContent = arrayWithoutEmptyElements[firstFactsIndexStart].slice(7) + "\n";

      // Find the index of where "Comment:"-content starts, to know where facts-content ends.
      for (i = firstFactsIndexStart; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i].substring(0,8) == "Comment:") {
          firstFactsIndexEnd = i;
          break;
        }
      }

      // Get the content for the first facts field, by iterating trough the array elements that contains the facts.
      for (var i = firstFactsIndexStart + 1; i < firstFactsIndexEnd; i++) {
        firstFactsContent = firstFactsContent + arrayWithoutEmptyElements[i];
        firstFactsContent = firstFactsContent + "\n";
      }
      
      // Get the facts element from the HTML, and assign the content to display it in the browser.
      var factsContent = document.getElementById("facts0");
      factsContent.value = firstFactsContent;
      
      // Find the array index of where the comment content starts.
      var firstCommentIndexStart = firstFactsIndexEnd;

      // Find the index of where "Assessment:"-content starts, to know where comment-content ends.
      var firstCommentIndexEnd;
      for (i = firstCommentIndexStart; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i].substring(0,11) == "Assessment:") {
          firstCommentIndexEnd = i;
          break;
        }
      }

      // Slice out the first part of the Comment-content.
      var firstCommentContent = arrayWithoutEmptyElements[firstCommentIndexStart].slice(9) + "\n";
      
      // Iterate trough the rest of the array-elements that contains the assessment-contents.
      for (var i = firstCommentIndexStart + 1; i < firstCommentIndexEnd; i++) {
        firstCommentContent = firstCommentContent + arrayWithoutEmptyElements[i];
        firstCommentContent = firstCommentContent + "\n";
      }

      // Get the "Comment:"-element from the HTML, and assign the content to the element to display it in the browser.
      var commentContent = document.getElementById("comment0");
      commentContent.value = firstCommentContent;

      // Find the index of where "Assessment:"-content starts, to know where comment-content ends.
      var firstAssessmentIndexStart = firstCommentIndexEnd;

      // Find the index of where "Assessment:"-content ends.
      var firstAssessmentIndexEnd;
      for (i = firstAssessmentIndexStart; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i].substring(0,15) == "Journal number:") {
          firstAssessmentIndexEnd = i;
          break;
        }
      }

      // Slice out the first part of the assessment-content. 
      var firstAssessmentContent = arrayWithoutEmptyElements[firstAssessmentIndexStart].slice(12) + "\n"

      // Iterate trough the array elements that contains the content for the assessment. 
      for (var i = firstAssessmentIndexStart + 1; i < firstAssessmentIndexEnd; i++) {
        firstAssessmentContent = firstAssessmentContent + arrayWithoutEmptyElements[i];
        firstAssessmentContent = firstAssessmentContent + "\n";
      }

      
      // Get the HTML-element and assign the assessment-content to the element to display it in the browser.
      var assessmentContent = document.getElementById("assessment0");
      assessmentContent.value = firstAssessmentContent;


      // Calculate the journal numbers in the report.
      var journalNumberCounter = 0;
      var journalNumberArray = [];
      for (var i = journalNumberStartIndex; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i].substring(0,15) == "Journal number:") {
          journalNumberArray.push(i);
          journalNumberCounter = journalNumberCounter + 1;
        }
      }
      
      // Get the HTML-element where all newly created HTML-fields are to be appended.
      var container = document.getElementById("addHere");

      // Iterate trough all the remaining journal numbers.
      for (var i = 1; i < journalNumberCounter; i++) {
        // Creates all the HTML elements based on the number of observations in the report.
        var createJournalNumber = document.createElement('input');
        createJournalNumber.type = 'number';
        createJournalNumber.id = 'journalnumber' + parseInt(i);
        createJournalNumber.placeholder = 'Journal number'
        container.appendChild(createJournalNumber);
        container.appendChild(document.createElement('br'));

        var createDTG = document.createElement('input');
        createDTG.type = 'text';
        createDTG.id = 'dtg' + parseInt(i);
        createDTG.placeholder = 'DTG';
        container.appendChild(createDTG);
        container.appendChild(document.createElement('br'));

        var createFacts = document.createElement('textarea');
        createFacts.type = 'text';
        createFacts.id = 'facts' + parseInt(i);
        createFacts.placeholder = 'Facts'
        container.appendChild(createFacts);
        container.appendChild(document.createElement('br'));

        var createComment = document.createElement('textarea');
        createComment.type = 'text';
        createComment.id = 'comment' + parseInt(i);
        createComment.placeholder = 'Comment'
        container.appendChild(createComment);
        container.appendChild(document.createElement('br'));

        var createAssessment = document.createElement('textarea');
        createAssessment.type = 'text';
        createAssessment.id = 'assessment' + parseInt(i);
        createAssessment.placeholder = 'Assessment'
        container.appendChild(createAssessment);
        container.appendChild(document.createElement('br'));
        container.appendChild(document.createElement('br'));
      }

      // Set the rest of the journal numbers based on the first journal number.
      for (var i = parseInt(firstJournalNumber.value); i < journalNumberCounter; i++) {
        var journalNumberID = 'journalnumber' + parseInt(i);
        var journalNumber = document.getElementById(journalNumberID);
        journalNumber.value = i + 1;
      }

      // Find the DTG's of the rest of the report
      var DTG = [];
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i].substring(0,4) == "DTG:") {
          DTG.push(arrayWithoutEmptyElements[i].substring(5,11));
        }
      }

      // Get the ID for the DTG HTML elements
      for (var i = 1; i < journalNumberCounter; i++) {
        var dtgID = 'dtg' + parseInt(i);
        var dtgValue = document.getElementById(dtgID);
        dtgValue.value = DTG[i];
      }

      var factsIndexes = [];
      for (var i = firstAssessmentIndexEnd; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i].substring(0,6) == "Facts:") {
          factsIndexes.push(i);
        }
      }
      
      var commentIndexes = [];
      for (var i = firstAssessmentIndexEnd; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i].substring(0,8) == "Comment:") {
          commentIndexes.push(i);
        }
      }

      var assessmentIndexes = [];
      for (var i = firstAssessmentIndexEnd; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i].substring(0,11) == "Assessment:") {
          assessmentIndexes.push(i);
        }
      }

      var counter1 = 1;
      for (var i = 0; i < factsIndexes.length; i++) {
        var facts = "";
        
        for (var a = factsIndexes[i]; a < commentIndexes[i]; a++) {
          facts = facts + arrayWithoutEmptyElements[a] + "\n";
        }
        var factsID = 'facts' + counter1;
        var factsElement = document.getElementById(factsID);
        factsElement.value = facts.substring(7);
        counter1 = counter1 + 1;
      }

      var counter2 = 1;
      for (var i = 0; i < factsIndexes.length; i++) {
        var comment = "";
        
        for (var a = commentIndexes[i]; a < assessmentIndexes[i]; a++) {
          comment = comment + arrayWithoutEmptyElements[a] + "\n";
        }
        var commentID = 'comment' + counter2;
        var commentElement = document.getElementById(commentID);
        commentElement.value = comment.substring(9);
        counter2 = counter2 + 1;
      }
      
      var f = 2;
      var counter3 = 1;

      for (j = 0; j < assessmentIndexes.length; j++) {
        var assessment = "";
          for (var i = assessmentIndexes[j]; i < parseInt(journalNumberArray[f]) && journalNumberArray[f] <= parseInt(journalNumberArray[journalNumberArray.length - 1]); i++) {
           assessment = assessment + arrayWithoutEmptyElements[i] + "\n";
         }
         if(assessmentIndexes[j] == assessmentIndexes[assessmentIndexes.length - 1]){
            for (var g = assessmentIndexes[assessmentIndexes.length - 1]; g < arrayWithoutEmptyElements.length; g++ ) {
              assessment = assessment + arrayWithoutEmptyElements[g] + "\n";
            }
          }
        f++;
        var assessmentID = 'assessment' + counter3;
        var assessmentElement = document.getElementById(assessmentID);
        assessmentElement.value = assessment.substring(12);
        counter3++; 
      }

    }, false);
    if (file) {
        reader.readAsText(file);
    }
}