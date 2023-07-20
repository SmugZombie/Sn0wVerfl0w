window.showSnowTools = parseInt(localStorage.getItem("showSnowTools"));
window.customFavicon = parseInt(localStorage.getItem("customFavicon"));
window.customFaviconSrc = localStorage.getItem("customFaviconSrc");
window.showSnowSettings = false;
//localStorage.setItem("showSnowTools", window.showSnowTools);

function toggleSnowTools(){
    if(!window.showSnowTools){
        localStorage.setItem("showSnowTools", 1); window.showSnowTools = true;
        document.querySelectorAll('#snow_toolbox').forEach(function(el) {el.style.display = 'block';});
        document.querySelectorAll('#snow_toolbox_toggler').forEach(function(el) {el.style.display = 'none';});
    }else{
        localStorage.setItem("showSnowTools", 0); window.showSnowTools = false;
        document.querySelectorAll('#snow_toolbox').forEach(function(el) {el.style.display = 'none';});
        document.querySelectorAll('#snow_toolbox_toggler').forEach(function(el) {el.style.display = 'block';});
    }
}

function toggleSettings(){
    if(window.showSnowSettings){
        window.showSnowSettings = false;
        document.getElementById("snow_settings").style.display = "none";
    }else{
        window.showSnowSettings = true;
        document.getElementById("snow_settings").style.display = "block";
    }
}

function toggleCustomFavicon(){
    if(parseInt(localStorage.getItem("customFavicon"))){
        localStorage.setItem("customFavicon", 0);
        document.getElementById("customFaviconStatus").innerText = 0;
    }else{
        localStorage.setItem("customFavicon", 1);
        document.getElementById("customFaviconStatus").innerText = 1;
    }
}

var myToolboxDiv = document.createElement("div");
myToolboxDiv.id = 'snow_toolbox';
myToolboxDiv.style.position = "absolute";
myToolboxDiv.style.right = "20px";
myToolboxDiv.style.top = "98px";
myToolboxDiv.style.zIndex = "100";
//myToolboxDiv.style.width = "500px";
myToolboxDiv.style.backgroundColor = "#181826";
myToolboxDiv.style.color = "white";
myToolboxDiv.style.padding = "4px";
myToolboxDiv.style.display = "none";
myToolboxDiv.innerHTML = "<span class='snow_tools'></span><span class='snow_tools' id='snow_toolbox_body'></span> <span style='float: right; padding-left: 10px;'><button id='snow_tools_settings'>⚙️</button><button id='snow_tools_toggler'>👀</button></span>";

var myToolboxTogglerDiv = document.createElement("div");
myToolboxTogglerDiv.id = 'snow_toolbox_toggler';
myToolboxTogglerDiv.style.position = "absolute";
myToolboxTogglerDiv.style.right = "20px";
myToolboxTogglerDiv.style.top = "98px";
myToolboxTogglerDiv.style.zIndex = "100";
myToolboxTogglerDiv.style.backgroundColor = "#181826";
myToolboxTogglerDiv.style.color = "white";
myToolboxTogglerDiv.style.padding = "4px";
myToolboxTogglerDiv.style.display = "none";
//myToolboxTogglerDiv.style.width = "30px";
myToolboxTogglerDiv.innerHTML = "<button id='snow_tools_toggler2'>👀</button>";

var myToolboxSettingsDiv = document.createElement("div");
myToolboxSettingsDiv.id = 'snow_settings';
myToolboxSettingsDiv.style.position = "absolute";
myToolboxSettingsDiv.style.right = "20px";
myToolboxSettingsDiv.style.bottom = "1px";
myToolboxSettingsDiv.style.zIndex = "100";
myToolboxSettingsDiv.style.backgroundColor = "#181826";
myToolboxSettingsDiv.style.color = "white";
myToolboxSettingsDiv.style.padding = "4px";
myToolboxSettingsDiv.style.display = "none";
myToolboxSettingsDiv.style.width = "500px";
myToolboxSettingsDiv.style.minHeight = "150px";
myToolboxSettingsDiv.innerHTML = "<button style='float: right;' id='snow_tools_settings2'>🗙</button><center><strong>Sn0wVerfl0w Custom Settings</strong></center><hr><span style='font-weight: bolder'>Customization: </span>\
<table>\
<thead><tr><th></th><th></th><th></th></tr></thead><tbody> \
<tr><td>Custom Favicon</td><td id='customFaviconStatus'>" + window.customFavicon + "</td><td><button id='customFaviconEnabler'>⚙️</button></td></tr>\
<tr><td>Custom Favicon Src</td><td><input id='customFaviconSource' style='width: 300px;' value='"+window.customFaviconSrc+"'/></td><td><button id='customFaviconSave'>💾</button></td></tr>\
</tbody></table><div style='position: fixed; bottom: 0px; text-align: center; width: 500px;'><strong>Sn0wverFl0w</strong> - " + window.sn0verfl0w_version + " - Made with 💙 <a target='_blank' href='https://github.com/smugzombie'>Ron Egli</a> - <a target='_blank' href='" + window.sn0verfl0w_baseURL + "/changelog.txt'>Changelog</a></div>";


// Appends to the html body
document.body.appendChild(myToolboxDiv);
document.body.appendChild(myToolboxTogglerDiv);
document.body.appendChild(myToolboxSettingsDiv);

if(window.showSnowTools){
    document.querySelectorAll('#snow_toolbox').forEach(function(el) {el.style.display = 'block';});
    document.querySelectorAll('#snow_toolbox_toggler').forEach(function(el) {el.style.display = 'none';});
}else{
    document.querySelectorAll('#snow_toolbox').forEach(function(el) {el.style.display = 'none';});
    document.querySelectorAll('#snow_toolbox_toggler').forEach(function(el) {el.style.display = 'block';});
}

document.getElementById("snow_tools_toggler").addEventListener("click", function() {
    toggleSnowTools();
});
document.getElementById("snow_tools_toggler2").addEventListener("click", function() {
    toggleSnowTools();
});
document.getElementById("snow_tools_settings").addEventListener("click", function() {
    toggleSettings();
});
document.getElementById("snow_tools_settings2").addEventListener("click", function() {
    toggleSettings();
});
document.getElementById("customFaviconEnabler").addEventListener("click", function() {
    toggleCustomFavicon();
});
document.getElementById("customFaviconSave").addEventListener("click", function() {
    localStorage.setItem("customFaviconSrc", document.getElementById("customFaviconSource").value );
});