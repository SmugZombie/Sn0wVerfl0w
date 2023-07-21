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
const baseURL = '<?php echo $baseUrl; ?>/';
window.customFavicon = parseInt(localStorage.getItem("customFavicon")) || 0;
window.sn0verfl0w_version = "<?php echo $backendVersion; ?>";
window.sn0verfl0w_baseURL = baseURL;

let currentPage = window.location.href;
let no_cache = "<?php echo $no_cache; ?>";

let includeURLs = {
	AccountList: 'customer_account_list.do',
	CustomerView: 'sys_id'
}

if(window==top){ // Only operate in top most iframe
	// If the feature is enabled, Customize the Favicon
	if(window.customFavicon){
		includeJS('js/favicon.js?' + no_cache);
	}

	// Regardless of the page, load the toolbox
	includeJS('js/toolbox.js?' + no_cache);

	// Add the sys_id specific code
	if(currentPage.indexOf(includeURLs.AccountList) !== -1 || currentPage.indexOf(includeURLs.CustomerView) !== -1){
		includeJS('js/accounts.js?' + no_cache);
	}
}


	



