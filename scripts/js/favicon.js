window.customFaviconSrc = localStorage.getItem("customFaviconSrc") || "https://www.google.com/s2/favicons?sz=64&domain=breachradar.com";

const customFaviconUrl = window.customFaviconSrc;
const head = document.querySelector('head');
const link = document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = customFaviconUrl;
// Remove the existing favicon (if any)
const existingFavicons = document.querySelectorAll('link[rel="shortcut icon"]');
existingFavicons.forEach((favicon) => {
    favicon.remove();
});
head.appendChild(link);