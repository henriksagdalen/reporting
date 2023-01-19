function saveToFile() {
    var data = document.getElementById("facts").value;
    var c = document.createElement("a");
    c.download = "test.txt"

    var t = new Blob([data], {
        type: "text/plain"
        });
        c.href = window.URL.createObjectURL(t);
        c.click();

}