window.addEventListener("load", function() {
    const copyButton = document.getElementById("copyButton");
    const select = document.getElementById("bluePrintsReporting");
    copyButton.addEventListener("click", popupWindow);
    
    function popupWindow(){
      const selectedOption = select.value;
      let popupText = "";
  
      if (selectedOption === "WHATS") {
        popupText = "Wheels:\nHull:\nArmaments:\nTurret:\nSpecial Recognition features:";
      } else if (selectedOption === "WEFTAS") {
        popupText = "Wings:\nEngines:\nFuselage:\nTail:\nArmament:\nSpecial recognition features:";
      } else if (selectedOption === "MASHS") {
        popupText = "Mast:\nArmament:\nSuperstructure:\nHull:\nSpecial Recognition Features:";
      } else if (selectedOption === "SCRIM") {
        popupText = "Shape:\nColor:\nRegistration:\nIdentifying marks:\nMake/model:";
      } else if (selectedOption === "A-H") {
        popupText = "Age:\nBuild:\nClothing:\nDistingushing Marks:\nElevation:\nFace:\nGait:\nHair:";
      }
  
      const popup = window.open("", "", "width=400,height=200");
      window.moveTo(1000,500);
      popup.document.write("<pre>" + popupText + "</pre>");
    }
  });
  