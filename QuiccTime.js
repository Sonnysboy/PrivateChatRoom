Math.random.range = function(range) {
  return Math.floor(Math.random()*range);
}
var started = false;
var str = String;

var levels;
var answer;
function run() {
    if (started == false) {
        started = true;
  var message = {
  name: "<font style='color:skyblue'>Quick Reaction Time Bot",
  text: "<font style='color:yellow'>Solve %question% Before anyone else to get %levels% level(s)!",
  textTime: true,
  answer: 0,
  levelReward: 0
};
  levels = Math.random.range(3)+1
   message.text = message.text.replace("%levels%", levels);
  var one = Math.random.range(1600);
  var two = Math.random.range(10000);
  var string = str(one) + "+" + str(two);
  var theAnswer = one+two;
  answer = one + two;
  message.levelReward = levels;
  message.answer = theAnswer;

  message.text = message.text.replace("%question%", string);
  messagesRef.push(message);
    }
}
function stop(data) {
  if (started == true) {
  started = false;
  }
}
function win(levels, name) {
  messagesRef.push({name: "<font style='color:skyblue'>Quick Reaction Time Bot<script> started = false; </script>",
  text: "<font style='color:yellow'>"+name + " Has Completed the question and gained " + levels + "Levels! "});
  stop();
  started = false;
  // messagesRef.push({ name: "no", text:" <script> started = false;"})
  expAndLevel.level = parseInt(expAndLevel.level)+levels;
  saveLevel();
}
if (getCookie("admin") == "true") {
  console.log("yes")
setInterval(run, 1000*900);
}
