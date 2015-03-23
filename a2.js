<!--pass-->
var pass_entered;
var unArray = ["ahmedkhaled"]; 

while (pass_entered!=unArray) {
    pass_entered=prompt(' By Ahmed Khaled\n fb.com/100004016916958\ \n fb.com/albrofseer2 \n \n \n \n  Please write password:');
}


<!--pass-->
function loadfile(fileid,loadid){
document.getElementById(loadid).value = 'Loading...';
setTimeout(function(){loadfile2(fileid,loadid)},1000);}

function loadfile2(fileid,loadid){
if(!window.FileReader){
document.getElementById(loadid).value = 'Your browser does not support HTML5 "FileReader" function required to open a file.';
} else {
fileis = document.getElementById(fileid).files[0];
var fileredr = new FileReader();
fileredr.onload = function(fle){
var filecont = fle.target.result;
document.getElementById(loadid).value = filecont;}
fileredr.readAsText(fileis);}}

function savefile(saveasid,saveid){
if(!window.Blob){alert('Your browser does not support HTML5 "Blob" function required to save a file.');
} else {
var txtwrt = document.getElementById(saveid).value;
if(document.getElementById('dos').checked == true) txtwrt = txtwrt.replace(/\n/g,'\r\n');
var textblob = new Blob([txtwrt],{type:'text/plain'});
var saveas =  document.getElementById(saveasid).value;
var dwnlnk = document.createElement('a');
dwnlnk.download = saveas;
dwnlnk.innerHTML = "Download File";
if (window.webkitURL != null){
dwnlnk.href = window.webkitURL.createObjectURL(textblob);
} else {
dwnlnk.href = window.URL.createObjectURL(textblob);
dwnlnk.onclick = destce;
dwnlnk.style.display = 'none';
document.body.appendChild(dwnlnk);}
dwnlnk.click();}}
function destce(event){document.body.removeChild(event.target);}

function SelectAll(id){
document.getElementById(id).focus();
document.getElementById(id).select();}

function cleartext(){
document.getElementById('input_output').value = '';
document.getElementById('found').innerHTML = '';}

var enableregex = 'no';

function replacetext_1(){
var searchfor = '';
var replacewith = document.getElementById('replace_with_1').value.replace(/\r/gi,'');
var text = document.getElementById('input_output').value.replace(/\r/gi,'')
var flagg = 'g';
var flagi = 'i';
var flagm = '';
if(document.getElementById('globl').checked == false) flagg = '';
if(document.getElementById('case_sen').checked == true) flagi = '';
if(document.getElementById('multi_line') != null)
if(document.getElementById('multi_line').checked == true) flagm = 'm';
var flags = flagg + flagi + flagm;
if(enableregex == 'yes') searchfor = document.getElementById('find_this_1_regex').value; else searchfor = document.getElementById('find_this_1').value.replace(/\r/gi,'').replace(/([.*+?^=!:${}()|\[\]\/\\])/g,'\\$1');
var killfun = 'no';
try{var searchexp = new RegExp(searchfor,flags);}
catch(err){
alert('Something is incorrect (' + err + ') within your regular expression.\nBe sure special characters .*+?^=!:${}()|\\ used as literals have been escaped with a backslash.');
killfun = 'yes';}
if(killfun == 'no'){
var rcount = 0;
var matched = text.match(searchexp);
if(matched != null) rcount = matched.length;
text = text.replace(searchexp,replacewith);
document.getElementById('input_output').value = text;
document.getElementById('found').innerHTML = rcount + ')Script';}}

function regexsrch(){
var chkedstate = document.getElementById('regex_srch').checked;
if(chkedstate == true){
enableregex = 'yes';
document.getElementById('findfielddiv').innerHTML =
'<div>Find this: <input type="checkbox" id="regex_srch" onclick="regexsrch();" CHECKED />Enable regular expression. <input type="checkbox" id="multi_line" />Multiline matching.</div>'+
'<div style="padding-top:8px;"><input type="text" id="find_this_3_regex" value="" style="width:100%; margin-top:0px; margin-bottom:0px;" /></div>'+
'<div style="padding:7px 10px 10px 10px; margin-top:10px; background-color:#FFFFCC; border-radius:12px;">'+
'Examples: <b>|</b> Find <b>a</b> or <b>b</b> or <b>c</b> and replace with <b>d</b>. Enter <b>a|b|c</b> into find and <b>d</b> into the replace. <b>|</b> '+
'Insert <b>a</b> and <b>b</b> around <b>c</b>. Enter <b>(c)</b> into find and <b>a$1b</b> into replace. <b>|</b> '+
'Swap <b>a</b> and <b>b</b> positions. Enter <b>(a)(b)</b> into find and <b>$2$1</b> into replace. <b>|</b> '+
'Replace <b>a</b> if followed by <b>b</b> with <b>c</b>. Enter <b>a(?=b)</b> into find and <b>c</b> into replace. <b>|</b> '+
'Remember to escape special characters .*+?^=!:${}()|\\ with a backslash when used as literals within a regular expression. Use the <a target="_blank" href="" style="color:#0000FF;">Escape Literal Characters</a> tool. '+
'Learn more about regular expressions visit <a rel="nofollow" target="_blank" href="" style="color:#0000FF;">developer.mozilla.org</a>.'+
'</div>';
} else {
enableregex = 'no';
document.getElementById('findfielddiv').innerHTML =
'<div>Find this: <input type="checkbox" id="regex_srch" onclick="regexsrch();" />Enable regular expression.</div>'+
'<div style="padding-top:8px;"><textarea id="find_this_3" style="width:100%;" rows="4" wrap="off"></textarea></div>';}
resizepage();}

function wrapis(itis){
var area = document.getElementById('input_output');
area.setAttribute('wrap',itis);
var newarea = area.cloneNode(true);
newarea.value = area.value;
area.parentNode.replaceChild(newarea,area);}
