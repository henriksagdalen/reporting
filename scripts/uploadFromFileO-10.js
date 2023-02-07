let uploadedFileAsString = "";

function getReportContentO10(indexStart, indexEnd, content, array, elementID) {
    for (var i = indexStart; i <= indexEnd; i++) {
        content = content + array[i] + "\n";
    }
    var element = document.getElementById(elementID);
    element.value = content;
    return content;
}

function fileContentToArrayO10() {
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
/*
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
        if (allClassificationsArray[i] == arrayWithoutEmptyElements[0].slice(16,20)) {
          var classificationSelect = document.getElementById("classification");
          classificationSelect.value = allClassificationsArray[i];
          console.log(classificationSelect.value)
        }
        console.log(allClassificationsArray[i])
      }
   */   
//#endregion

//#region STATIC VALUES
      // Get the "from" value from the report, and put it in the from-field. 
      var from = document.getElementById("from");
      from.value = arrayWithoutEmptyElements[1].slice(6);

      // Get the "to" value from the report, and put it in the to field.
      var to = document.getElementById("to");
      to.value = arrayWithoutEmptyElements[2].slice(4);

      // Get the writer/operator value from the report, and put it in the writer/operator field.
      var writerOperator = document.getElementById("writeroperator");
      writerOperator.value = arrayWithoutEmptyElements[3].slice(17);

      // Get the own position value from the report, and put it in the own position field.
      var ownPosition = document.getElementById("ownposition");
      ownPosition.value = arrayWithoutEmptyElements[4].slice(14);

      // Get the DTG for the report, and put it in the DTG position field.
      var dtg = document.getElementById("dtg0");
      dtg.value = arrayWithoutEmptyElements[5].slice(5);

      // Declare all the variables that stores the starting and ending indexes for the different content.
      var ownSituationIndexStart;
      var ownSituationIndexEnd;

      var enemySituationIndexStart;
      var enemySituationIndexEnd;

      var enemyCOAIndexStart;
      var enemyCOAIndexEnd;

      var temperatureIndexStart;
      var temperatureIndexEnd;

      var windIndexStart;
      var windIndexEnd;

      var precipitationIndexStart;
      var precipitationIndexEnd;

      var cloudCoverageIndexStart;
      var cloudCoverageIndexEnd;

      var sunIndexStart;
      var sunIndexEnd;

      var messageFromOpsIndexStart;
      var messageFromOpsIndexEnd;

      var messageFromSDAIndexStart;
      var messageFromSDAIndexEnd;

      var referencesIndexStart;
      var referencesIndexEnd;
      
      var newsIndexStart;
      var newsIndexEnd;

    // Iterate trough all the elements in the array, and find the starting indexes of all the different contents.
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i].substring(0,14) == "Own situation:") {
            ownSituationIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,16) == "Enemy situation:") {
            enemySituationIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,19) == "Enemy COA next 24h:") {
            enemyCOAIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,21) == "Temperature low-high:") {
            temperatureIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,14) == "Wind low-high:") {
            windIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,23) == "Precipitation low-high:") {
            precipitationIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,15) == "Cloud coverage:") {
            cloudCoverageIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,15) == "Sunrise/Sunset:") {
            sunIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,17) == "Message from OPS:") {
            messageFromOpsIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,17) == "Message from SDA:") {
            messageFromSDAIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,11) == "References:") {
            referencesIndexStart = i;
        }
        if (arrayWithoutEmptyElements[i].substring(0,14) == "In other news:") {
          newsIndexStart = i;
      }
      }
      
      // Get the content for the own situation field.
      var ownSituationContent = "";
      ownSituationIndexEnd = enemySituationIndexStart - 1;
      for (var i = ownSituationIndexStart; i <= ownSituationIndexEnd; i++) {
        ownSituationContent = ownSituationContent + arrayWithoutEmptyElements[i] + "\n";
      }
      var ownSituationElement = document.getElementById("ownsituation0");
      ownSituationElement.value = ownSituationContent.substring(15);

      // Get the content for the enemy situation field.
      var enemySituationContent = "";
      enemySituationIndexEnd = enemyCOAIndexStart - 1;
      for (var i = enemySituationIndexStart; i <= enemySituationIndexEnd; i++) {
        enemySituationContent = enemySituationContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var enemySituationElement = document.getElementById("enemysituation0");
      enemySituationElement.value = enemySituationContent.substring(17);
      
      // Get the content for the enemy COA field.
      var enemyCOAContent = "";
      enemyCOAIndexEnd = temperatureIndexStart - 1;
      for (var i = enemyCOAIndexStart; i <= enemyCOAIndexEnd; i++) {
        enemyCOAContent = enemyCOAContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var enemyCOAElement = document.getElementById("enemycoa0");
      enemyCOAElement.value = enemyCOAContent.substring(20);

      // Get the content for the Temperature lo/hi field.
      var temperatureContent = "";
      temperatureIndexEnd = windIndexStart - 1;
      for (var i = temperatureIndexStart; i <= temperatureIndexEnd; i++) {
        temperatureContent = temperatureContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var temperatureElement = document.getElementById("templowhigh0");
      temperatureElement.value = temperatureContent.substring(22);

      // Get the content for the wind lo/hi field.
      var windContent = "";
      windIndexEnd = precipitationIndexStart - 1;
      for (var i = windIndexStart; i <= windIndexEnd; i++) {
        windContent = windContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var windElement = document.getElementById("windlowhigh0");
      windElement.value = windContent.substring(15);

      // Get the content for the precipitation lo/hi field.
      var precipitationContent = "";
      precipitationIndexEnd = cloudCoverageIndexStart - 1;
      for (var i = precipitationIndexStart; i <= precipitationIndexEnd; i++) {
        precipitationContent = precipitationContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var precipitationElement = document.getElementById("precipitationlowhigh0");
      precipitationElement.value = precipitationContent.substring(24);

      // Get the content for the cloud coverage field.
      var cloudCoverageContent = "";
      cloudCoverageIndexEnd = sunIndexStart - 1;
      for (var i = cloudCoverageIndexStart; i <= cloudCoverageIndexEnd; i++) {
        cloudCoverageContent = cloudCoverageContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var cloudCoverageElement = document.getElementById("cloudcoverage0");
      cloudCoverageElement.value = cloudCoverageContent.substring(16);

      // Get the content for the Sunrise/sunset field.
      var sunContent = "";
      sunIndexEnd = messageFromOpsIndexStart - 1;
      for (var i = sunIndexStart; i <= sunIndexEnd; i++) {
        sunContent = sunContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var sunElement = document.getElementById("sunrisesunset0");
      sunElement.value = sunContent.substring(16);

      // Get the content for the Message From OPS field.
      var messageFromOpsContent = "";
      messageFromOpsIndexEnd = messageFromSDAIndexStart - 1;
      for (var i = messageFromOpsIndexStart; i <= messageFromOpsIndexEnd; i++) {
        messageFromOpsContent = messageFromOpsContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var messageFromOpsElement = document.getElementById("opsmessage0");
      messageFromOpsElement.value = messageFromOpsContent.substring(18);

      // Get the content for the Message from SDA field.
      var messageFromSDAContent = "";
      messageFromSDAIndexEnd = referencesIndexStart - 1;
      for (var i = messageFromSDAIndexStart; i <= messageFromSDAIndexEnd; i++) {
        messageFromSDAContent = messageFromSDAContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var messageFromSDAElement = document.getElementById("sdamessage0");
      messageFromSDAElement.value = messageFromSDAContent.substring(18);

      // Get the content for the references field.
      var referencesContent = "";
      referencesIndexEnd = newsIndexStart - 1;
      for (var i = referencesIndexStart; i <= referencesIndexEnd; i++) {
        referencesContent = referencesContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var referencesElement = document.getElementById("reference0");
      referencesElement.value = referencesContent.substring(12);
      
      // Get the content for the in other news field.
      var inOtherNewsContent = "";
      newsIndexEnd = arrayWithoutEmptyElements.length - 1;
      for (var i = newsIndexStart; i <= newsIndexEnd; i++) {
        inOtherNewsContent = inOtherNewsContent + arrayWithoutEmptyElements[i] + "\n"; 
      }
      var inOtherNewsElement = document.getElementById("inothernews0");
      inOtherNewsElement.value = inOtherNewsContent.substring(15);



    }, false);
    if (file) {
        reader.readAsText(file);
    }
}

function uploadFromFileO10() {
    fileContentToArrayO10();
}
