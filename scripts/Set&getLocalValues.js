// Save values to local storage
window.saveToLocal = function() {
    localStorage.setItem("from", document.getElementById("from").value);
    localStorage.setItem("to", document.getElementById("to").value);
    localStorage.setItem("ownposition", document.getElementById("ownposition").value);
};

// Get values from local storage on page load
window.onload = function() {
    if(localStorage.getItem("from")) {
        document.getElementById("from").value = localStorage.getItem("from");
    }
    if(localStorage.getItem("to")) {
        document.getElementById("to").value = localStorage.getItem("to");
    }
    if(localStorage.getItem("ownposition")) {
        document.getElementById("ownposition").value = localStorage.getItem("ownposition");
    }
};


document.getElementById("india02form").onsubmit = function() {
    saveToLocal();
};

