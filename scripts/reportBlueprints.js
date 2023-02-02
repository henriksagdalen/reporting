window.addEventListener("load", function() {
    const copyButton = document.getElementById("copyButton");
    const select = document.getElementById("bluePrintsReporting");
    copyButton.addEventListener("click", popupWindow);
    
    function popupWindow(){
      const selectedOption = select.value;
      let popup;
  
      if (selectedOption === "WHATS") {
        const popup = window.open("/ressurser/report-templates/whats.html", "", "width=400,height=200,top=200,left=200,location=yes");
      } else if (selectedOption === "WEFTAS") {
        const popup = window.open("/rapporter/I-01.html", "", "width=400,height=200,top=200,left=200");
      } else if (selectedOption === "MASHS") {
        popupText = "Mast:\nArmament:\nSuperstructure:\nHull:\nSpecial Recognition Features:";
      } else if (selectedOption === "SCRIM") {
        popupText = "Shape:\nColor:\nRegistration:\nIdentifying marks:\nMake/model:";
      } else if (selectedOption === "A-H") {
        const popup = window.open("/ressurser/report-templates/atoh.html", "", "width=400,height=200,top=200,left=200");
      }
  
      
      //popup.document.write("<pre>" + popupText + "</pre>");
    }
  });
 