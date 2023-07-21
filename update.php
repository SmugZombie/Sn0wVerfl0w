<?php
require('common/common.php');
header('Content-Type: application/javascript');
header('Expires: Sun, 01 Jan 2014 00:00:00 GMT');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0', FALSE);
header('Pragma: no-cache');
$version = $loaderVersion;
?>
/*******************************************************************************************
_________        _______                                   _____ .__   _______            
 /   _____/  ____  \   _  \ __  _  _____  __  ____ _______ _/ ____\|  |  \   _  \ __  _  __ 
 \_____  \  /    \ /  /_\  \\ \/ \/ /\  \/ /_/ __ \\_  __ \\   __\ |  |  /  /_\  \\ \/ \/ / 
 /        \|   |  \\  \_/   \\     /  \   / \  ___/ |  | \/ |  |   |  |__\  \_/   \\     /  
/_______  /|___|  / \_____  / \/\_/    \_/   \___  >|__|    |__|   |____/ \_____  / \/\_/   
        \/      \/        \/                     \/                             \/          
                                                                                            
********************************************************************************************/
// ==UserScript==
// @name        Sn0wverfl0w - Custom SNow Tools
// @namespace   <?php echo $baseUrl; ?>/
// @icon        <?php echo $baseUrl; ?>/assets/images/monkey.png
// @downloadURL <?php echo $baseUrl; ?>/update.php?version=<?php echo $version; ?> 
// @updateURL   <?php echo $baseUrl; ?>/update.php?version=<?php echo $version; ?> 
// @description Adds new tools and features to familiar resources.
// @include     https://*.service-now.com*
// @grant       none
// @version     <?php echo $version; ?> 
// @copyright   2022+, Ron Egli <ron@r-egli.com> {github.com/smugzombie} 
// ==/UserScript==

/*== SCRIPT LOADER ==========================================================*/
// do not edit this section
  (function() {
    'use strict';
    console.log("Sn0wverfl0w is Loading...");
    var snowverflowLoader = document.createElement('script');
    snowverflowLoader.type = 'text/javascript';
    snowverflowLoader.src = '<?php echo $baseUrl; ?>/loader.php?version=<?php echo $version; ?> ';
    document.getElementsByTagName("head")[0].appendChild(snowverflowLoader);
  })();
/*== END SCRIPT LOADER ==========================================================*/