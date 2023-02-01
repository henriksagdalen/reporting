// Declaring a variable to be used as a counter inside the addJournalNumber-function.
var journalNumberCounter = 1;

// Declaring the function for adding a new journal number to a report.
function addJournalNumber() {
if(document.getElementById("journalnumber").value.length!=0){
    // Declaring the container. This element will display all new journal number entries, and place them above the plus/minus buttons.
    var container = document.getElementById('addHere');

    // Creating a new field to display the journal number for the observation. 
    var journalNumberStart = document.getElementById("journalnumber").value;
    var journalNumberNext = document.createElement('input');
    journalNumberNext.type = 'number';
    journalNumberNext.id = 'journalnumber';
    journalNumberNext.value = parseInt(journalNumberStart) + journalNumberCounter;
    container.appendChild(journalNumberNext);
    container.appendChild(document.createElement('br'));

    // Create a new field for the DTG of the observation
    var DTGForNewObservation = document.createElement("input");
    DTGForNewObservation.type = "text";
    DTGForNewObservation.placeholder = 'DTG for new observation'
    DTGForNewObservation.id = 'dtg' + journalNumberCounter;
    container.appendChild(DTGForNewObservation);
    container.appendChild(document.createElement('br'));

    // Creating a new input field for the "Facts" section.
    var facts = document.createElement("textarea");
    facts.id = 'facts' + journalNumberCounter;
    facts.type = 'text';
    facts.placeholder = 'Facts';
    container.appendChild(facts);
    container.appendChild(document.createElement('br'));

    // Creating a new input field for the "Comment" section.
    var comment = document.createElement("textarea");
    comment.type = 'text';
    comment.placeholder = 'Comment';
    comment.id = 'comment' + journalNumberCounter;
    container.appendChild(comment);
    container.appendChild(document.createElement('br'));

    // Creating a new input field for the assessment section.
    var assessment = document.createElement("textarea");
    assessment.type = 'text';
    assessment.placeholder = 'Assessment';
    assessment.id = 'assessment' + journalNumberCounter;
    container.appendChild(assessment);
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));

    // Increment the journal number counter.
    return journalNumberCounter = journalNumberCounter + 1;
}
}

// Declaring the function for removing journal numbers. This one is ugly as fuck. Needs revisioning. 
function removeJournalNumber() {

    for (let i = 0; i < 11; i++) {
        var topop = document.getElementById('addHere').lastChild;
        document.getElementById('addHere').removeChild(topop)
    }

    return journalNumberCounter = journalNumberCounter - 1;
}