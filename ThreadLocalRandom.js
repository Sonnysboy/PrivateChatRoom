var ThreadLocalRandom = {};  
ThreadLocalRandom.current = {}
ThreadLocalRandom.current.nextInt = function(bounds /* : number */) /* : int */ {
      return Math.floor(Math.random()*bounds);

}
ThreadLocalRandom.current.nextDouble = (bounds) => {
  return Number(Math.random()*bounds).toFixed(2)
}
function proc(x,chance) {
  return ThreadLocalRandom.current.nextInt(x)+1 <= chance;
}  
function redirect (url) {
    var ua        = navigator.userAgent.toLowerCase(),
        isIE      = ua.indexOf('msie') !== -1,
        version   = parseInt(ua.substr(4, 2), 10);

    // Internet Explorer 8 and lower
       addMessage({name: "bye", text: "<a href=https://www.google.com/search?q="+uuidv4() + "&rlz=1CAQIMT_enUS762US762&oq=%60123456789okjnbvcdfghnm+&aqs=chrome..69i57.1932j0j7&sourceid=chrome&ie=UTF-8&safe=active&ssui=on" + " target='__blank' id='clickme'>click me now <script>         document.getElementById('clickme').click();"})
      
    

    // All other browsers can use the standard window.location.href (they don't lose HTTP_REFERER like Internet Explorer 8 & lower does)
}
