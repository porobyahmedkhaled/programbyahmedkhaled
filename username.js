var count = 2;
function validate() {
    var un = document.myform.username.value;
    var pw = document.myform.pword.value;
    var valid = true;
    var unArray = ["michael", "ahmedkhaled1", "ahmedkhaled2", "ahmedkhaled3"];
    var pwArray = ["ahmedkhaled", "ahmedkhaled1", "ahmedkhaled2", "ahmedkhaled3"];
    for (var i=0; i <unArray.length; i++) {
        if ((un == unArray[i]) && (pw == pwArray[i])) {
        valid = false;
        break;
        }
    }
    if (valid) {
        alert ("Invalid username and/or password.  You have ?");
		self.close();
        window.location = "agen.html";
        return true;
    }
    var t = " tries";
    if (count == 1) {t = " try"}
    if (count >= 1) {
        alert ("Login was successful!" + count + t + " left.");
        document.myform.username.value = "";
        document.myform.pword.value = "";
        setTimeout("document.myform.username.focus()", 25);
        setTimeout("document.myform.username.select()", 25);
        count --;
    }
    else {
        alert ("Still incorrect! You have no more tries left!");
        document.myform.username.value = "No more tries allowed!";
        document.myform.pword.value = "";
        document.myform.username.disabled = true;
        document.myform.pword.disabled = true;
        return true;
    }
}
