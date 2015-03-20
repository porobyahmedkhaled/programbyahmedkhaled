var firstload = 'yes';
var windo = '<a target="_self" class="nav" onMouseover="this.className=\'navhover\'" onMouseout="this.className=\'nav\'" href="';
var windochk = '';

function windotargt(){
if(document.getElementById('newwin').checked == true){
windo = '<a target="_blank" class="nav" onMouseover="this.className=\'navhover\'" onMouseout="this.className=\'nav\'" href="';
windochk = 'CHECKED';
} else {
windo = '<a target="_self" class="nav" onMouseover="this.className=\'navhover\'" onMouseout="this.className=\'nav\'" href="';
windochk = '';}}

function loadmenu(menuf){
var tlespn = '"><span style="padding-left:10px;">';
var endspn = '</span></a>';
if(firstload == 'no'){
if(menuf == 'open'){
document.getElementById('menu').style.zIndex = '2';
document.getElementById('menu').style.width = '300px';
document.getElementById('menu').style.height = '100%';
document.getElementById('menu').innerHTML =
'<div style="padding:10px 0px 0px 10px;"><input type="button" style="margin-top:0px;" value="Close Tool Index" onClick="loadmenu(\'close\');" /></div>'+
'<div style="padding:3px 0px 0px 10px;"><input type="checkbox" id="newwin" onClick="windotargt(); setTimeout(\'loadmenu(&#092;&#039;open&#092;&#039;)\',100);" ' + windochk + ' /> Open tools in new window.</div>'+
windo + '/' + tlespn + 'Homepage | Descriptive Index' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Basic Text Tools:</div>'+
windo + 'Add-Prefix-Suffix-to-Text.html' + tlespn + 'Add Prefix/Suffix into Line' + endspn +
windo + 'Add-Remove-Line-Breaks.html' + tlespn + 'Add/Remove Line Breaks' + endspn +
windo + 'Count-Text.html' + tlespn + 'Count Characters, Words...Lines' + endspn +
windo + 'Delimited-Column-Extractor.html' + tlespn + 'Delimited Column Extractor' + endspn +
windo + 'Find-and-Replace-Text.html' + tlespn + 'Find and Replace Text' + endspn +
windo + 'Letter-Case-Converter.html' + tlespn + 'Letter Case Converter' + endspn +
windo + 'Merge-Text-Line-by-Line.html' + tlespn + 'Merge Text (Line by Line)' + endspn +
windo + 'Remove-Duplicate-Lines.html' + tlespn + 'Remove Duplicate Lines' + endspn +
windo + 'Remove-Empty-Lines.html' + tlespn + 'Remove Empty Lines' + endspn +
windo + 'Remove-Extra-Spaces.html' + tlespn + 'Remove Extra Spaces' + endspn +
windo + 'Remove-Letter-Accents.html' + tlespn + 'Remove Letter Accents' + endspn +
windo + 'Remove-Lines-Containing.html' + tlespn + 'Remove Lines Containing...' + endspn +
windo + 'Sort-Text-Lines.html' + tlespn + 'Sort Text Lines' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Format Tools:</div>'+
windo + 'ASCII-to-Unicode-Converter.html' + tlespn + 'ASCII to Unicode Converter' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Obfuscation Tools:</div>'+
windo + 'Binary-Code-Translator.html' + tlespn + 'Binary Code Translator' + endspn +
windo + 'Disemvowel-Tool.html' + tlespn + 'Disemvowel Tool' + endspn +
windo + 'Encryption-Generator.html' + tlespn + 'Encryption Generator' + endspn +
windo + 'Reverse-Text-Generator.html' + tlespn + 'Reverse Text Generator' + endspn +
windo + 'ROT13-Caesar-Cipher.html' + tlespn + 'ROT13 Caesar Cipher' + endspn +
windo + 'Word-Scrambler.html' + tlespn + 'Word Scrambler/Descrambler' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Randomization Tools:</div>'+
windo + 'Random-Line-Picker.html' + tlespn + 'Random Line Picker' + endspn +
windo + 'Random-Number-Generator.html' + tlespn + 'Random Number Generator' + endspn +
windo + 'Random-String-Generator.html' + tlespn + 'Random String Generator' + endspn +
windo + 'String-Randomizer.html' + tlespn + 'String Randomizer' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Combination / Permutation:</div>'+
windo + 'Combination-Generator.html' + tlespn + 'Combination Generator' + endspn +
windo + 'Line-Combination-Generator.html' + tlespn + 'Line Combination Generator' + endspn +
windo + 'Permutation-Generator.html' + tlespn + 'Permutation Generator' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Numeration Tools:</div>'+
windo + 'Generate-List-of-Numbers.html' + tlespn + 'Generate List of Numbers' + endspn +
windo + 'Number-Each-Line.html' + tlespn + 'Number Each Line' + endspn +
windo + 'Online-Tally-Counter.html' + tlespn + 'Online Tally Counter' + endspn +
'<div style="padding:7px 0px 7px 10px;"><input type="button" style="margin-top:0px;" value="Close Tool Index" onClick="loadmenu(\'close\');" /></div>';
resizepage();
} else {
document.getElementById('menu').style.zIndex = '-1';
document.getElementById('menu').style.width = '0px';
document.getElementById('menu').style.height = '0%';
document.getElementById('menu').innerHTML = '';}}
if(firstload == 'yes'){
firstload = 'no';
resizepage();}}

window.onresize = resizepage;

function resizepage(){
var client_width = document.body.parentNode.clientWidth;
var client_height = document.body.parentNode.clientHeight;
if(client_width <= 300){
document.getElementById('tool').style.width = '300px';
} else {
document.getElementById('tool').style.width = '100%';}
document.getElementById('menu').style.height = client_height + 'px';
document.getElementById('tool').style.height = client_height + 'px';
if(autohgt == 'yes'){
var topdivhgt = document.getElementById('topdiv').offsetHeight;
var btmdivhgt = document.getElementById('btmdiv').offsetHeight;
var middivhgt = ((client_height - 20) - topdivhgt) - btmdivhgt;
if(middivhgt > 120) document.getElementById('middiv').style.height = middivhgt + 'px';
else document.getElementById('middiv').style.height = '120px';}
if(typeof specialonsizefunction == 'function') specialonsizefunction();}

function privacy_policy(){
var text =
'~ TextMechanic.com Privacy Policy ~\n\n'+
'Log Files: The TextMechanic.com webserver records log files as required by United States law. The information inside the log files includes: ip address, date/time stamp, referring page and user agent.\n\n'+
'Cookies: TextMechanic.com and it\'s partners use cookies to store information about visitors preferences, record user-specific information on which pages the user access or visit, customize Web page content based on visitors browser type or other information that the visitor sends via their browser.\n\n'+
'Tools: All tool are built-with and functions-in Client Side JavaScripting, so only your computer will see or process your data input/output. Input/processing/output data is never transmitted over the internet and always resides within your computer. However, cloud operating systems could transmit your data into the cloud\'s system for processing but this has nothing to do with the TextMechanic.com webserver.\n\n'+
'Sensitive Data Disclaimer: Don\'t trust any website with sensitive data, not even TextMechanic.com. Keep your sensitive data secure by keeping it to yourself.';
alert(text);}
