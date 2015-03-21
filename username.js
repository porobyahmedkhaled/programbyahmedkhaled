var count = 2;
function validate() {
    var un = document.myform.username.value;
    var pw = document.myform.pword.value;
    var valid = true;
    var username = ["1", "ali", "yousif", "thaer", "ahmedhassen", "rekaut", "ahmedmagdy", "ahmedwael"];
    var password = ["1","test1","test2","test3","test4","test5","test6","test7"];
    for (var i=0; i <username.length; i++) {
        if ((un == username[i]) && (pw == password[i])) {
        valid = false;
        break;
        }
    }
    if (valid) {
        alert ("لم يتم التعرف علي المستخدم ؟                                                    سيتم توجيهك الان الي حسابي");
        window.location = "https://www.facebook.com/profile.php?id=100004016916958";
        return true;
    }
    var t = "";
    if (count == 1) {t = " try"}
    if (count >= 1) {
        alert ("تم التعرف علي المستخدم!");
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
