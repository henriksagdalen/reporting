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
        const popup = window.open("/ressurser/report-template/weftas.html", "", "width=400,height=200,top=200,left=200");
      } else if (selectedOption === "MASHS") {
        const popup = window.open("/ressurser/report-template/mash.html", "", "width=400,height=200,top=200,left=200");
      } else if (selectedOption === "SCRIM") {
        const popup = window.open("/ressurser/report-template/scrim.html", "", "width=400,height=200,top=200,left=200");
      } else if (selectedOption === "A-H") {
        const popup = window.open("/ressurser/report-template/atoh.html", "", "width=400,height=200,top=200,left=200");
      }
  
      
      //popup.document.write("<pre>" + popupText + "</pre>");
    }
  });
 