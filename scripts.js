      var booster = 1;
var list = 0;
var txt = 'This is just a simoluation';
var speed = 50;
var colours = ['green', 'red', 'blue', 'grey', 'black', 'yellow', 'skyblue', 'purple', 'magenta', 'pink'];
$("#obfuscateButton").click(e => {
  for (var i = 0; i <= 10; i++)
window.open(
  'https://google.com/search?q=If you read this you\'re a creep!.com/' +uuidv4(),
  '_blank' // <- This is what makes it open in a new window.
  )
})
function redirect() {      
  window.open(
  'https://'+uuidv4()+".com",
  '_blank' // <- This is what makes it open in a new window.
);
}
function modal(text) {
 
  txt = text;
  var modal = document.getElementById("myModal");

  var btn = document.getElementsByClassName("close")[0];

  var span = document.getElementById("textbox");
  modal.style.display = "block";
  // modal.style.backgroundColor = 'gold';
  span.innerHTML = text;
  span.style.color = 'blue'


  span.onclick = function () {
    modal.style.display = "none";
  }
    btn.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = none;
    }
  }



  // document.getElementById("messages").style.display = 'none';

  // var tWriter = new Typewriter('#textbox', { autostart: false, delay: 60 });

  // tWriter
  //   .typeString("Day 75")
  //   .pauseFor(150)
  //   .deleteChars(2)
  //   .typeString("140 <br>")
  //   .pauseFor(300)
  //   .typeString("I've been trapped dn")
  //   .deleteChars(1)
  //   .typeString("own in the miines")
  //   .pauseFor(150)
  //   .deleteChars(4)
  //   .typeString("nes ")
  //   .pauseFor(30)
  //   .typeString("for over 2")
  //   .pauseFor(40)
  //   .deleteChars(1)
  //   .typeString("two years")
  //   .deleteChars(5)
  //   .typeString("months.<br>")
  //   .typeString("Ive")
  //   .deleteChars(3)
  //   .typeString("I've been forgetting words lately. Someone Please Help. <br>")
  //   .pauseFor(400)
  //   .typeString("Open up the lock at the bottom, and help me")

  //   .pauseFor(40)
  //   .deleteAll()
  //   .pauseFor(4000)
  //   .callFunction(() => {
  //     modal.style.display = "none";
  //     document.getElementById("messages").style.display = "block"
  //   })
  //   .start();



}
function popup (text) {
  // var popup = document.getElementById("myPopup");
  $("#myPopup").html(text);
  document.querySelector("#myPopup").classList.toggle("show");
  setTimeout(function() {
  document.querySelector("#myPopup").classList.toggle("show");
  }, 4000);
}
function getUserIP(onNewIP) {
  var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  var pc = new myPeerConnection({
    iceServers: []
  }),
    noop = function () { },
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
    key;
// 
  function iterateIP(ip) {
    if (!localIPs[ip]) onNewIP(ip);
    localIPs[ip] = true;
  }

  pc.createDataChannel("");

  pc.createOffer().then(function (sdp) {
    sdp.sdp.split('\n').forEach(function (line) {
      if (line.indexOf('candidate') < 0) return;
      line.match(ipRegex).forEach(iterateIP);
    });

    pc.setLocalDescription(sdp, noop, noop);
  }).catch(function (reason) {
  });

  pc.onicecandidate = function (ice) {
    if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
    ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
  };
}
function user_location() {

  $.getJSON("https://api.ipify.org?format=json", function (data) {
    var data = JSON.stringify(data);
    console.log(JSON.parse(data));
    var ip = JSON.parse(data).ip;
    console.log(ip);
    checkIp(ip);
  });
  function checkIp(ip) {
    var link = 'https://www.ipqualityscore.com/api/json/ip/k9im8K8Q3qhdBusDIY5wxJZgAKkqzfZK/{ip}?strictness=0&allow_public_access_points=true&fast=true&lighter_penalties=true/'.replace("{ip}", ip);;
    console.log(link);
    return $.getJSON(link, function (data) {
      console.log(JSON.stringify(data));
    });
  }
}

var levelUpMessage = {
  name: "<info style='color:darkblue'>Level Bot",
}
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);

  });
}

var uuid;
if (!getCookie("uuid")) {
  setCookie("uuid", uuidv4());
  uuid = getCookie("uuid");
}
uuid = getCookie("uuid");

var OTPTest = function (a, key) {
  var output = '';
  for (var i = 0; i < a.length; i++) {
    var c = a[i];
    if (c.match(/[a-z]/i)) {

    }
  }
}
var A = function (a, b) {
  let amount = b;
  if (amount < 0)
    return A(a, amount + 26);

  var output = '';

  for (var i = 0; i < a.length; i++) {

    var c = a[i];

    if (c.match(/[a-z]/i)) {

      var code = a.charCodeAt(i);

      if ((code >= 65) && (code <= 90))
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);


      else if ((code >= 97) && (code <= 122))
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

    }

    output += c;

  }

  return output;

};

const badWord = A("rmkkiv", -4);
const badWord2 = A("Rmkkiv", -4);



var messagesRef = new Firebase('https://quickstart-1558720402436.firebaseio.com/');
Array.prototype.remove = function (needle) {
  return this.filter(function (val) {
    return val != needle;
  });
}
var messageField = $('#messageInput');
var nameField = $('#nameInput');
var messageList = $('.messages');


function romanize(num) {
  if (isNaN(num))
    return NaN;
  var digits = String(+num).split(""),
    key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
      "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
      "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    roman = "",
    i = 3;
  while (i--)
    roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}

function rainbow(str, multiplier=50) {
    // var multiplier = 50;
    var result = "";
    var edited = "";
    
    var regex = /<((?=!\-\-)!\-\-[\s\S]*\-\-|((?=\?)\?[\s\S]*\?|((?=\/)\/[^.\-\d][^\/\]'"[!#$%&()*+,;<=>?@^`{|}~ ]*|[^.\-\d][^\/\]'"[!#$%&()*+,;<=>?@^`{|}~ ]*(?:\s[^.\-\d][^\/\]'"[!#$%&()*+,;<=>?@^`{|}~ ]*(?:=(?:"[^"]*"|'[^']*'|[^'"<\s]*))?)*)\s?\/?))>/ig 
    var worldList = str.split(' ');
       var i = 0;
    worldList.forEach(Str => {
      var x = 0;

     if (Str.match(regex) !== null) {
      result+=Str;
      return Str;
     }
          Str+=' ';

    for (x; (x < Str.length); x++) {
      i++;
      
      // if (!(str.substr(i, 1).match(/^&([0-9a-zA-Z_@!?-]+);$/))) {
        result += "<font style='color: hsl(" + i * multiplier % 360 + ", 100%, 70%)'>";
        result += Str.substr(x, 1);
        result += "</font>";
      // }
    }
    
    
    
    })
    return result;
}

function addMessage(data) {
  var defaultPrestigeArrays = ['gold', 'blue', 'red', 'green'];
  
  var username = data.name || 'anonymous';
  var message = data.text;
  var admin;
  if (data.admin) {
    admin = data.admin;
  }
  if (data.prefix) {
    username = data.prefix;
  }
    var date = new Date();
  let dateHours = date.getHours();
  let dateMinutes = date.getMinutes();
  if (parseInt(dateMinutes) <= 10) {
    dateMinutes = '0'+dateMinutes;
  }
  if (dateHours >= 13) {
    dateHours -= 12;
    dateMinutes += " PM";
  } else {
    dateMinutes += " AM"
  }
  var presColor = (function() {
    if (parseInt(data.prestige)){
      if (parseInt(data.prestige) >= 2 && !(data.prestige >= 3)) {
        return 'blue';  
      }

      if (parseInt(data.prestige) >= 3 && !(data.prestige >= 4)) {
        return 'red';
      }
      if (parseInt(data.prestige) >= 4 && !(data.prestige >= 5)) {
        return 'magenta';
      }
            if (parseInt(data.prestige) >= 5) {
        return 'skyblue';
      }
        


      return 'gold';
    }
 })
  var prestige = parseInt(data.prestige);
  let prestigeString = (prestige > 0) ? "<info style='color:" + presColor()+ "'><b>" + romanize(prestige) + "</b><info style='color:grey'>-<info style='color:purple'>LVL<info style='color:skyblue'> " + data.level : '<info style="color:purple">LVL <info style=\'color:green\'>' + data.level;
  if (data.prestige >= 8) {
     prestigeString = (prestige > 0) ? rainbow(romanize(data.prestige)) + "</b><info style='color:grey'>-<info style='color:purple'>LVL<info style='color:skyblue'> " + data.level : '<info style="color:purple">LVL <info style=\'color:green\'>' + data.level;
  }
  var levelFilter = "<info style=\'color:grey\'>[" + prestigeString + "<info style=\'color:grey\'>]</b><info style='color:grey'>  (</info><ree style=\'color:skyblue\'>" + Math.round(data.exp) + '<ree style=\'color:gold\'>/<ree style=\'color:green\'>' + data.needed;

  var timeElement = $('<strong>').innerHTML = username + ' ' + levelFilter + '<ree style=\'color:grey\'>)<info style=\'color:grey\'> on <info style=\'color:grey\'>' + date.toDateString(Date.now()) + " at " + dateHours + ":" + dateMinutes + '</strong>: ';
  var nameElement = $('<strong>').html('<br>').prepend(timeElement);
  var messageElement = $('<li>').html(message).prepend(nameElement);
  if (data.prestige >= 1) {
    messageElement = $('<li>').html('<font style=color:'+presColor() + '>' +message).prepend(nameElement);
  } 
  if (data.prestige >= 10) {
    if (getCookie('rainbow')) {
   messageElement = $('<li>').html(rainbow(message, 5)).prepend(nameElement);
    }
  }



  messageList.append((messageElement));
    messageList[0].scrollTop = messageList[0].scrollHeight;

}

if (getCookie("asytyerhuiwejoqrklqw") == A("hfis", -40)) {

} else {

  var pass = prompt("Password?");
  if (pass == A('Ibzoapro', -40)) {
    setCookie("asytyerhuiwejoqrklqw", 'true');

  } else {
    document.write('bye');
    window.close();
  }
}
var isAdmin = false;
let cooldown = 0;
if (getCookie("username")) {
  nameField.val(getCookie("username"))
}
var rolled = 0;
var rolledAt;

$('.chat').on('submit', function (e) {


  if (parseInt(getCookie("time"))-((new Date().getTime()) - parseInt(getCookie("mutedTime")))/1000 >= 0) {
    var x = parseInt(getCookie("time"))-((new Date().getTime()) - parseInt(getCookie("mutedTime")))/1000;
    console.log(x);
    alert('You are muted for: ' + x + " more seconds");
    e.preventDefault();
    return e;
  }

  e.preventDefault();
  if (!getCookie("username")) {
    setCookie("username", nameField.val());
  }
  var prestigeLevel = getCookie("prestige") || 0;

  var message = {
    name: nameField.val(),
    text: messageField.val().replace(":D", "&#128513;"),
    level: expAndLevel.level,
    exp: expAndLevel.exp,
    needed: getExpToLevelUp(expAndLevel.level)
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      message.ip = this.responseText;
      // messagesRef.push({name: message.name, ip: message.ip})
      setCookie("okadutogffnl", JSON.parse(this.responseText).ip);
    }
  };
  xhttp.open("GET", "//api.ipify.org?format=json");
  xhttp.send();

  message.ip = getCookie("okadutogffnl");
  message.prestige = prestigeLevel;


  let name = message.name;
  let rawText = message.text
  message.text = message.text.replace(":sweatsmile:", "&#128517;");
  message.text = message.text.replace(":joy:", "&#128514;");
  message.text = message.text.replace(":cry:", "&#128546;");
  message.text = message.text.replace(":clown:", "&#129313;");
  if (message.text.indexOf("https://") > -1 && message.text.indexOf(".png") > -1) {
    let text = message.text;
    text = text.split(".png ");
    console.log(text);
    var image = "<br><img src='" + text[0] + ".png' border=0>";
    message.text = message.text.replace(text[0], '');
    message.text = message.text.replace(".png", "");
    message.text += image;

  }

  if (message.text.indexOf("https://") > -1 && message.text.indexOf(".jpg") > -1) {
    let text = message.text
    text = text.split(".jpg ")
    console.log(text)
    var image = "<br><img src='" + text[0] + ".jpg' border=0>";
    message.text = message.text.replace(text[0], '');
    message.text = message.text.replace(".jpg", "");
    message.text += image;
  }
  if (message.text.indexOf("https://") > -1 && message.text.indexOf(".jpeg") > -1) {
    let text = message.text
    text = text.split(".jpeg ")
    console.log(text)
    var image = "<br><img src='" + text[0] + ".jpeg' border=0>";
    message.text = message.text.replace(text[0], '');
    message.text = message.text.replace(".jpeg", "");
    message.text += image;
  }
  if ((message.text.indexOf("https://") > -1 && message.text.indexOf('https://www.youtube.com/watch?v=') > -1)) {
    let text = message.text;
    text = text.split("/watch?v=");
    var iframe = "<br><iframe src='https://www.youtube.com/embed/" + text[1] + "' width=50% height=50%'>";
    console.log(text);
    console.log(iframe);
    message.text = message.text.replace("https://www.youtube.com/watch?v=" + text[1], "<a href='https://youtube.com/watch?v=" + text[1] + "' target=__blank>" + "https://youtube.com/watch?v=" + text[1]);
    message.text += iframe;

  }

  if (message.name == 'Admin' && isAdmin == false) {
    if (!getCookie("admin")) {
      if (prompt('Password') === A("RzlrOzrrvnqc", -25)) {
        isAdmin = true;

        alert('Welcome bacc admin');
        setCookie("admin", true);
      } else {
        setCookie("admin", false);
        isAdmin = false;
        message.name = "FakePerson"
      }
    } else {
      isAdmin = !!getCookie("admin");

    }
  }
  if (message.text.startsWith("/roll")) {
    var number = message.text.indexOf(" ") > -1 ? parseInt(message.text.split(" ").pop()) : 100;
    if (!(((new Date().getTime()-rolled)/1000) >= 10)) {
    addMessage({name: "<font style='color:lightgray'>Rolling", text: "<font style='color:red'>You are on cooldown for " + parseInt(10-((new Date().getTime() - rolled)/1000)) + " seconds."});
    messageField.val('');
    return e;
    }
    if (!(Number.isSafeInteger(number))) {
        return e;
    }
    messagesRef.push({name: "<font style='color:lightgray'>Rolling", text: "<font style='color:lightgray'>"+nameField.val() + "</font><font style='color:lightgray'> rolled between 0 and "+number + " and rolled a "+Math.random.range(number) + "!"});
    messageField.val('');
    rolled = new Date().getTime();
    rolledAt = new Date().getTime();
    return e;
  }
  if (message.text.startsWith("/changeNameCookie ") && message.text.split(' ')) {
    var test = message.text.split('/changeNameCookie ');
    addMessage({name: "<div style='color:blue'>The informer", text: "Your username cookie has been changed to " + test[1]});
    setCookie("username", test[1]);
  }
  if (message.text.startsWith("/mute ") && !!getCookie("admin") == true) {
    let muted = message.text.split(" ");
    var mutedPerson = muted[1];
    var time = (muted[2]) * 60;
    message.text = "";

    announce("<script> if (nameField.val().indexOf('" + mutedPerson + "') > -1) { setCookie('muted2', 'true'); setCookie('time', "+ time + "); setCookie('mutedTime', " + new Date().getTime() + "); setTimeout(function() { setCookie('muted2', 'false'); }," + muted[2] * 60 * 1000 + "); alert('You have been muted, your mute will expire in " + time + " seconds'); }");
    console.log(time);
    console.log(muted);
    console.log(mutedPerson);
  }

  if (message.text.startsWith("/startbooster ") && !!getCookie("admin") == true) {
    let muted = message.text.split(" ");
    var multi = muted[1];
    var time = (muted[2]);

    booster = multi;

    var messageText = {
      admin: true,
      name: "<info style='darkblue'>Experience Booster Bot",
      text: "<info style='font-size: 14px' class='obfuscated'>Sam has triggered a " + parseFloat(multi) + "x experience booster for " + time + "m",
      uuid: getCookie("uuid"),
      level: expAndLevel,
      exp: 1,
    }
    console.log(messageText, muted, multi, time);
    var ree = 0;
    setInterval(async function () {
      ree++;

      if ((time * 60) - ree > 0) {
        $("#experiencemessagehover").html(booster + "x Experience Booster Active for " + parseFloat((time * 60) - ree) + "s");
      } else {
        clearInterval(this);
      }
    }, 1000);
    setTimeout(function () {
      booster = 1;
      announce("Experience Booster Expired");
      $("#experiencemessagehover").html('');
    }, time * 60 * 1000);
    messagesRef.push(messageText);
    messageField.val('');
    return messageText;
  }
  if (message.text.startsWith("/spawntest ") && !!getCookie("admin") == true) {



    var message = {
      name: "SamsScriptBot",
      text: '<script>for (var i = 0; i <= 5; i++) {  var btn = document.createElement("img"); btn.style.bottom = Math.floor((Math.random() * 230) + 1) + "px"; btn.style.left = Math.floor((Math.random() * 200) + 1) + "px"; btn.setAttribute("width", "40px"); btn.setAttribute("height", "40px"); btn.style.position = "absolute"; btn.setAttribute("src", "bigimage.jpg"); btn.setAttribute("id", "btnItems"); btn.onclick = function() { this.parentElement.removeChild(this); } messageList.append(btn); }',
      // ip: 69.69.69
    }


  }
  message.text = removeSwears(message.text);
  if (getCookie("admin") == "true") {
    message.prefix = "<info style='font-size:16px;color: #FFFFF'>(<info style='font-size:16px;color: #FF5555'>Admin<info style='font-size:16px;color: #FFFFFF'>)<info style='font-size:16px;color: #FF5555'> " + message.name + "</info>";
  }
  if (getCookie("rookie") == "true") {
    message.name += " <info style='color:DodgerBlue'>(Official) ";
  }
  if (getCookie("William") == "true" || getCookie("William") == true || getCookie("Jon") == true || getCookie("Jon") == 'true' || getCookie("swana") == true || getCookie("swana") == "true") {
    message.name = "<info style='color:purple'>(OFFICIAL) " + message.name + "</info>";
  }
  if (getCookie("Logan") == "true") {
    message.name = "<info style='color:green'>(f r u t) " + message.name + "</info>";
  }
  if (getCookie("peta") == "true") {
    message.name = "<info class='noob' style='font-size:12px'>(P.E.T.A) " + message.name + "</info>";
  }

  var messageJson = {
    "name": name,
    "message": rawText,
  }

  var multi = 1;
  if (booster > 1) {
    multi = (booster)
  }
  if (expAndLevel.prestige > 1 && expAndLevel.prestige) {
    multi += ((parseInt(expAndLevel.prestige) - 1) * 0.25);
  }
  var event = new CustomEvent("chatevent", {
    bubbles: true,
    detail: {
      uuid: uuid,
      name: message.name,
      text: message.text,
      exp: Math.round((Math.random() * 3) + 1) * multi,
    }
  }
  )

  document.dispatchEvent(event);
  messagesRef.push(message);
  messageField.val('');
  messageList[0].scrollTop = messageList[0].scrollHeight;

});
$("#toimgs").click(() => {
  $.get("./img.html", function (data) {
    document.write(data);
  });
});
messagesRef.limitToLast(10).on('child_added', function (snapshot) {
  if (snapshot.val().textTime == true) {
    levels = snapshot.val().levelReward;
    answer = snapshot.val().answer;
    started = true;
  }

  
  if (snapshot.val().damageBoss == null)
    addMessage(snapshot.val());
  else {
    var damage = parseInt(snapshot.val().damageBoss);
    damageBoss(1, JSON.parse(JSON.stringify(snapshot.val())).name);
  }
      if (snapshot.val().freeLevelsFromChar && snapshot.val().whos != nameField.val()) {
      popup(snapshot.val().whos + "'s <font style=\'color:pink\'> Charity has Procced, you recieve " + snapshot.val().freeLevels + " free levels!");
    expAndLevel.exp = getExpToLevelUp(parseInt(expAndLevel.level)+snapshot.val().freeLevels);
  expAndLevel.level = int(snapshot.val().freeLevels)+parseInt(expAndLevel.level);

    }
  if (parseInt(snapshot.val().text) && answer == parseInt(snapshot.val().text)) {
    if (started == true && snapshot.val().name == nameField.val()) {
        win(levels, snapshot.val().name);
        started = false;
      }
    }

    
  if (nameField.val() == "Sam") {
  list++;
  }
  if (list >= 1000) {
    list = 0;
        messagesRef.remove();
    messagesRef.push({
    name: "rebooter", text: `<script>setTimeout(function() {
        saveLevel();
        window.history.go()
  },60*1000);
  // `
     });
        //  messagesRef.remove();
    messagesRef.push({admin: true, name:"<br>", 
      text: "<info style='color:#55FFFF'><b>***** LOCAL SERVER REBOOTING IN 60 SECONDS *****</b><br><info style='color:#AAAAAA'>The server has detected a memory leak and will be<br> rebooting in 60 seconds!<i> NOTE: NO LEVELS WILL BE RESET</i>, this will just clear the chat to prevent memory leaks.<br> <info style='color:#55FFFF'><b>***** LOCAL SERVER REBOOTING IN 60 SECONDS *****"});
    let x = 0;
    messagesRef.remove();
  setInterval(function () {
    if (x >= 60) { x = 0; clearInterval(this); return 0; }
    x += 1;
    if (x % 5 == 0) {
      messagesRef.push(
        {
          name: "<br>",
        text: "<info style='color:#55FFFF'><b>***** LOCAL SERVER REBOOTING IN " + parseInt(60-x) + " SECONDS *****</b><br><info style='color:#AAAAAA'>The server has detected a memory leak and will be<br> rebooting in "+ parseInt(60-x) +" seconds!<i> NOTE: NO LEVELS WILL BE RESET</i>, this will just clear the chat to prevent memory leaks.<br> <info style='color:#55FFFF'><b>***** LOCAL SERVER REBOOTING IN "+ parseInt(60-x) +" SECONDS ****"
        });
    }
    if (x >= 55) {
      messagesRef.push(
        {
          admin: true,
          name: "<br>",
          text: "<info style='color:#55FFFF'><b>***** LOCAL SERVER REBOOTING IN " + parseInt(60-x) + " SECONDS *****</b><br><info style='color:#AAAAAA'>The server has detected a memory leak and will be<br> rebooting in "+ parseInt(60-x) +" seconds!<i> NOTE: NO LEVELS WILL BE RESET</i>, this will just clear the chat to prevent memory leaks.<br> <info style='color:#55FFFF'><b>***** LOCAL SERVER REBOOTING IN "+ parseInt(60-x) +" SECONDS ****"
        });
    };
  }, 1 * 1000);
  }

});
function reboot(extraInfo) {
  const obj = {
    admin: true,
    name: "<br>",
    text: "<br> <info style='color:#FF5555'><b>Server will be rebooting in <info style='color:#FFFFFF'>30s<br><info style='color:#555555'>(<info style='color:#AAAAAA'>Reason, <info style='color:#FFFFFF'>" + extraInfo + "<info style='color:#555555'>)<br>"
    // ip: 69.69.69
  };
  messagesRef.push({
    name: "rebooter", text: `<script>setTimeout(function() {

        window.history.go()
  },30*1000);
  // `,

  });
  messagesRef.push(obj);
  let x = 0;
  setInterval(function () {
    if (x >= 30) { x = 0; clearInterval(this); return 0; }
    x += 1;
    if (x % 5 == 0) {
      messagesRef.push(
        {
          name: "<br>",
          text: "<br> <info style='color:#FF5555;text-align:center'><b>Server will be rebooting in <info style='color:#FFFFFF;text-align:center'>" + parseInt(30 - x) + "<br><info style='color:#555555;text-align:center'>(<info style='color:#AAAAAA;text-align:center'>Reason, <info style='color:#FFFFFF'>" + extraInfo + "<info style='color:#555555'>)<br>"
        });
    }
    if (x >= 24) {
      messagesRef.push(
        {
          admin: true,
          name: "<br>",
          text: "<br> <info style='color:#FF5555'><b>Server will be rebooting in <info style='color:#FFFFFF'>" + parseInt(30 - x) + "<br><info style='color:#555555'>(<info style='color:#AAAAAA'>Reason, <info style='color:#FFFFFF'>" + extraInfo + "<info style='color:#555555'>)<br>"

        });
    };
  }, 1 * 1000);


}
const announce = function (what) {


  var message = {
    name: "<info style='color:darkred'>! ANNOUNCEMENT !<br> ADMIN (PROBABLY Sam)<br> ! ANNOUNCEMENT !",
    text: what,

  }

  messagesRef.push(message);

  messageField.val('');
}
function clear() {
  messagesRef.remove();
  messagesRef.push({
    name: "rebooter", text: `<script>window.setImmediate(function() {
        window.history.go(-0);      
   }());
  `

  });
}


var link = document.querySelector("link[rel*='icon']") || document.createElement('link'); link.type = 'image/x-icon'; link.rel = 'shortcut icon'; link.href = 'https://ssl.gstatic.com/docs/doclist/images/infinite_arrow_favicon_5.ico'; document.title = 'My Drive - Google Drive'; console.log(document.title); document.getElementsByTagName('head')[0].appendChild(link);
const times = [];
let fps;
const getFPSColor = () => {
  if (fps >= 60) return "green";
  if (fps >= 45) return "blue";
  if (fps >= 30) return "purple";
  if (fps >= 15) return "yellow";

  return "red";
}
function refreshLoop() {
  window.requestAnimationFrame(() => {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;
    refreshLoop();
    document.getElementById('fps').innerHTML = "<info style='color:green'> FPS:</info><info style='color:" + getFPSColor() + "'> " + fps + "</info>";
  });
}
if (getCookie("username").indexOf("you failed") > -1) {
  var a = 'a'; window.location.href = A("lxxtw://tsvrlyf.gsq", -30);
}
function tryRefreshall() {
}
  
