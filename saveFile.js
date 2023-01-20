function saveToFile() {

    // Retrieving the values from the report
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;


    var data = [
        from + '\n',
        to + '\n',
    ]

    // What the fuck is this for
    var c = document.createElement("a");
    c.download = "test.txt"

    var t = new Blob([data], {
        type: "text/plain"
        });
        c.href = window.URL.createObjectURL(t);
        c.click();

}