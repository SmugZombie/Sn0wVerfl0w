<?php
require('common/common.php');
header('Content-Type: application/javascript');
header('Expires: Sun, 01 Jan 2014 00:00:00 GMT');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0', FALSE);
header('Pragma: no-cache');

$no_cache = "no_cache=".uniqid(); // Using to prevent caching of important JS files
$debug = 1; if($debug == 1){echo "console.log('SNOVERFLOW: [Debug] - Enabled'); \n";}
$referrer = $_SERVER['HTTP_REFERER'];

require('./common/commonjs.php');
?>
log("SNOVERFLOW LOADED", "info");
log(window.location.href, "info");
const baseURL = '//snow.overflow.wtf/';
window.customFavicon = parseInt(localStorage.getItem("customFavicon")) || 0;
window.sn0verfl0w_version = "<?php echo $backendVersion; ?>";
window.sn0verfl0w_baseURL = baseURL;


let includeURLs = new Array();
let currentPage = window.location.href;
let no_cache = "<?php echo $no_cache; ?>";

includeURLs = {
		AccountList: 'customer_account_list.do',
		CustomerView: 'sys_id'
}

if(window.customFavicon){
	includeJS('js/favicon.js?' + no_cache);
}

if(window==top){
	includeJS('js/toolbox.js?' + no_cache);
}

if(currentPage.indexOf(includeURLs.AccountList) !== -1 || currentPage.indexOf(includeURLs.CustomerView) !== -1){
  includeJS('js/accounts.js?' + no_cache);
}

