
function notifyMe() {
  let hidden, visibilityChange; 
  if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
    hidden = "hidden";
    visibilityChange = "visibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
  } 
  
  const user = localStorage.getItem('user-name');
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  else if (Notification.permission === "granted" && user!==null) {
    if(document[hidden]){
      const notification = new Notification("New message in Chat-up");
    setTimeout(function(){
      notification.close()
    }, 7000)
    }
    
  }

  else if (Notification.permission !== 'denied'&& user!==null) {
    Notification.requestPermission(function (permission) {
      if (permission === "granted"&& document[hidden]) {
        var notification = new Notification("Hi there!, you have a new message");
      }
    });
  }
}
export default notifyMe;
