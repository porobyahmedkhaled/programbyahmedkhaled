function LogIn(){
loggedin=false;
username="";
password="";
username=prompt("User name:                                      اسم المستخدم","");
username=username.toLowerCase();
password=prompt("Password:                                      كلمة السر","");
password=password.toLowerCase();
if (username=="ali" && password=="tst") { 
loggedin=true;
}
if (username=="yousif" && password=="tst") {
loggedin=true;
}
if (username=="thaer" && password=="tst") {
loggedin=true;
}
if (username=="michael" && password=="tst") { 
loggedin=true;
}
if (username=="ahmedhassen" && password=="tst") {
loggedin=true;
}
if (username=="rekaut" && password=="tst") {
loggedin=true;
}
if (username=="ahmedmagdy" && password=="tst") {
loggedin=true;
}
if (username=="ahmedwael" && password=="tst") {
loggedin=true;
}
if (loggedin==false) {
alert("لم يتم التعرف علي اسم المستخدم سيتم تحويلة الان الي حسابي");
window.location="home-page.html";
}
}
