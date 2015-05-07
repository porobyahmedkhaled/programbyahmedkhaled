function LogIn(){
loggedin=false;
username="";
password="";
username=prompt("Ahmed Khaled only one\nfb.com/100004016916958\nfb.com/albrofseer2\n\nUsername:               :اسم المستخدم","");
username=username.toLowerCase();
password=prompt("Ahmed Khaled only one\nfb.com/100004016916958\nfb.com/albrofseer2\n\nPassword:               :كلمة السر","");
password=password.toLowerCase();
<!--اعضاء جدد--!>
if (username=="ahmedkhaled" && password=="1") {
loggedin=true;
alert("Welcome: Ahmed khaled");
}
if (username=="ahmedkhaled" && password=="2") {
loggedin=true;
alert("Welcome: Ahmed khaled");
}
if (username=="ahmedkhaled" && password=="3") {
loggedin=true;
alert("Welcome: Ahmed khaled");
}
if (username=="ahmedkhaled" && password=="4") {
loggedin=true;
alert("Welcome: Ahmed khaled");
}
if (username=="ahmedkhaled" && password=="5") {
loggedin=true;
alert("Welcome: Ahmed khaled");
}
if (loggedin==false) {
alert("هناك خطأ في اسم المستخدم او كلمة السر,؟\nسيتم توجيهك الان الي حسابي!");
window.location = "https://www.facebook.com/profile.php?id=100004016916958";
self.return();
}
}
