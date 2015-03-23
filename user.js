var count = 2;
function validate() {
var un = document.myform.username.value;
var pw = document.myform.pword.value;
var valid = true;

var unArray = ["yousif", "ali", "thaer", "michael", "ahmedwael", "ahmedmagdy", "abdo", "ahmedkhaled1", "ahmedkhaled2", "ahmedkhaled3", "ahmedkhaled4", "ahmedkhaled5"];
var pwArray = ["123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123"];
for (var i=0; i <unArray.length; i++) {
if ((un == unArray[i]) && (pw == pwArray[i])) {
valid = false;
break;
}
}

if (valid) {
alert ("Invalid username and/or password.  You have ");
window.location = "https://www.facebook.com/profile.php?id=100004016916958";
return true;
}

var t = " tries";
if (count == 1) {t = " try"}

if (count >= 1) {
alert ("Login was successful");
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
return false;
}

}
