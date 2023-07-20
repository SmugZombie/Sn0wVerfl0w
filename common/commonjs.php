/* COMMON FUNCTIONS */

// appends .js files to the head of the document
function includeJS(source){
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = baseURL + 'scripts/' + source;
  document.getElementsByTagName('head')[0].appendChild(script);
}

function includeExternalJS(source){
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = source;
  document.getElementsByTagName('head')[0].appendChild(script);
}

// appends .css files to the head of the document
function includeCSS(source){
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = baseURL + 'styles/' + source;
  document.getElementsByTagName('head')[0].appendChild(link);
}

function includeExternalCSS(source){
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = source;
  document.getElementsByTagName('head')[0].appendChild(link);
}

 function zeroPad(aNumber) {
     return ("0"+aNumber).slice(-2);
 }

 function humanTime(timeStamp) {
    var M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var D = new Date(timeStamp); // 23 Aug 2016 16:45:59 <-- Desired format.
    return D.getDate() + " " + M[D.getMonth()] + " " + D.getFullYear() + " " + D.getHours() + ":" + zeroPad(d.getMinutes()) + ":" + zeroPad(D.getSeconds());
 }

 function epochToTimestamp(epoch){
 	return (new Date(epoch).getUTCFullYear()) + "-" + zeroPad((new Date(epoch).getUTCMonth())) + "-" + zeroPad((new Date(epoch).getUTCDay())) + " " + zeroPad((new Date(epoch).getUTCHours())) + ":" + zeroPad((new Date(epoch).getUTCMinutes())) + ":" + zeroPad((new Date(epoch).getUTCSeconds()))
}

function log(msg, color) {
    color = color || "black";
    bgc = "White";
    switch (color) {
        case "success":  color = "Green";      bgc1 = "LimeGreen";       break;
        case "info":     color = "DodgerBlue"; bgc1 = "Turquoise";       break;
        case "error":    color = "Red";        bgc1 = "Black";           break;
        case "start":    color = "OliveDrab";  bgc1 = "PaleGreen";       break;
        case "warning":  color = "Tomato";     bgc1 = "Black";           break;
        case "end":      color = "Orchid";     bgc1 = "MediumVioletRed"; break;
        default: color = color;
    }

    if (typeof msg == "object") {
        console.log(msg);
    } else if (typeof color == "object") {
        console.log("%c" + msg, "color: PowderBlue;font-weight:bold; background-color: RoyalBlue;");
        console.log(color);
    } else {
        console.log("%c" + msg, "color:" + color + ";font-weight:bold; background-color: " + bgc + ";");
    }
}

var show = (elem) => {
    elem.style.display = 'block';
};
var hide = (elem) => {
    elem.style.display = 'none';
};

if (!window.jQuery) {  
    // jQuery is not loaded  
    //includeExternalJS('https://code.jquery.com/jquery-3.6.0.min.js');
}

/* THIS IS NEEDED AT THE BOTTOM OF THIS FILE */
