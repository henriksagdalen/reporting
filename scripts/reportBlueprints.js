window.addEventListener("load", function() {
    const copyButton = document.getElementById("copyButton");
    const select = document.getElementById("bluePrintsReporting");
    copyButton.addEventListener("click", popupWindow);
    
    function popupWindow(){
      const selectedOption = select.value;
      let popup;
  
      if (selectedOption === "WHATS") {
        const popup = window.open("/ressurser/report-templates/whats.html", "", "width=400,height=300,top=500,left=900");
      } else if (selectedOption === "WEFTAS") {
        const popup = window.open("/ressurser/report-templates/weftas.html", "", "width=400,height=300,top=500,left=900");
      } else if (selectedOption === "MASHS") {
        const popup = window.open("/ressurser/report-templates/mash.html", "", "width=400,height=300,top=500,left=900");
      } else if (selectedOption === "SCRIM") {
        const popup = window.open("/ressurser/report-templates/scrim.html", "", "width=400,height=300,top=500,left=900");
      } else if (selectedOption === "A-H") {
        const popup = window.open("/ressurser/report-templates/atoh.html", "", "width=400,height=300,top=500,left=900");
      }
  
      
      //popup.document.write("<pre>" + popupText + "</pre>");
    }
  });
 