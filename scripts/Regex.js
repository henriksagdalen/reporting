function DTGRegex(){
    let value = document.querySelector("dtgfrom").value;
    const regExPattern = /\d{6}[Z]{1}/;
    let result = text.match(regExPattern);
    
}

function inputValidation(){
    var dtgfrom = document.querySelector("dtgfrom").value;
    var dtgto = document.querySelector('dtgto').value;
    
    var classificationSelect = document.querySelector(".classification select");
    var classification = classificationSelect.options[classificationSelect.selectedIndex].value;

    // Get the static values from the input fields in the report.
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var writerOperator = document.getElementById("writeroperator").value;
    var ownPosition = document.getElementById("ownposition").value;
    var bluf = document.getElementById("bluf").value;
    var patternOfLife = document.getElementById("patternoflife").value;
    var overallComment = document.getElementById("overallcomment").value;
    var overallAssessment = document.getElementById("overallassessment").value;
    
    if( dtgfrom = null){
        alert("DTG From må fylles ut!")
        return false;
    }

    if(dtgto = null){
        alert("DTG To må fylles ut!")
        return false;
    }
    
    if (classification = null){
        alert("Sett klassifisering")
        return false;
    }

    if(from = null) {
        alert("Hvem rapporten sendes fra må fylles ut!")
        return false;
    }

    if(to = null){
        alert("Hvem rapport sendes til må fylles ut!")
        return false;
    }

    if(writerOperator = null){
        alert("Hvem som har skrevet rapporten må fylles ut!")
        return false;
    }

    if(ownPosition = null){
        alert("Egen posisjon må fylles ut!")
        return false;
    }

    if(bluf = null){
        alert("Bluf må fylles ut!")
        return false;
    }

    if(patternOfLife = null){
        alert("Pattern of Life må fylles ut!")
        return false;
    }

    if(overallComment = null){
        alert("Overall comment må fylles ut!")
        return false;
    }

    if(overallAssessment = null){
        alert("Overall assessment må fylles ut!")
        return false;
    }
}