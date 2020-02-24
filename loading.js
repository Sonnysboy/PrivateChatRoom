// i is p, s is a, o is c, g is k, r is e, a is r.


var i = 0;
var loaded = false;

var now = Date.now();

function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    async function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        elem.innerHTML = 'Please Wait... Synchronizing messages';
        loaded = true;
          messageList[0].scrollTop = messageList[0].scrollHeight;
        var time = Date.now()-now;
        popup("Newest Change: /roll! roll a random number between 1 and 100 Loaded in " + time + "ms");
    document.getElementById("loader").setAttribute  ("hidden", true);
        document.getElementById("wrapper").removeAttribute("hidden");

      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }

}

move();
