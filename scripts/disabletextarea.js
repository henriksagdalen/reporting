function enableTextBox() {
  var textBoxID = "photoattatchment0";
  if (document.getElementById("_checkbox").checked == true){
      document.getElementById(textBoxID).disabled = false;
  }
  else
  {
      document.getElementById(textBoxID).disabled = true;
      textBoxID="";
    }
}
