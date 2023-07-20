log("Accounts JS Loaded", "info");
window.showSysId = false;
window.tableContents = "";
window.customerTableFound = false;
window.customerAccountFound = false;
'use strict';

setTimeout(function(){
    checkForTable();
    checkForAccounts();
}, 1500);

function checkForTable(){
    //console.log("Checking for customers table")
    if(!window==top){ return; }
    try{
        if(frames[0].document.getElementById("customer_account_table")){
            //console.log("Found Customers Table");
            //processTable();
            if(!window.customerTableFound){
                addToggleSysIdButton()
                //processTable()
            }
            window.customerTableFound = true;
        }else{
            window.customerTableFound = false;
            removeToggleSysIdButton()
            setTimeout(function(){
                checkForTable()
            }, 1000);
        }
    }catch(e){
        //log(e, "danger")
    }
}

function checkForAccounts(){
    //if(!window==top){ return; }
    try{
        if(frames[0].document.title.split(" | ")[1] == "Account"){
            //console.log("Accounts Found")
            if(!window.customerAccountFound){
                addCustomerSysId()
            }
            window.customerAccountFound = true;
        }else{
            removeCustomerSysId()
            window.customerAccountFound = false;
            setTimeout(function(){
                checkForAccounts()
            }, 1000);
        }
    }catch(e){
        //log(e, "danger")
    }
    //frames[0].document.title.split(" | ")[1]
}

setInterval(function(){
    checkForTable();
    checkForAccounts();
}, 1000);

function removeToggleSysIdButton(){
    document.getElementById("sysIdTogglerDiv").remove();
}

function removeCustomerSysId(){
    document.getElementById("sysIdBlock").remove();
}

function addCustomerSysId(){
    var myDiv = document.createElement("span");
    myDiv.id = 'sysIdBlock';
    let sys_id = frames[0].document.getElementById("sys_uniqueValue").value;
    myDiv.innerHTML = "Sys Id: <input onclick='this.setSelectionRange(0, this.value.length)' style='text-align: center; width: 250px;' readonly value='" + sys_id + "'/> <span onclick=\"navigator.clipboard.writeText('"+sys_id+"')\" style=\"cursor: pointer\">📋</span>";
    document.getElementById("snow_toolbox_body").append(myDiv)
}

function addToggleSysIdButton(){
    var myDiv = document.createElement("span");
        myDiv.id = 'sysIdTogglerDiv';
        myDiv.innerHTML = "<button id='sysidtoggler'>Toggle Sys Id View</button>";
        document.getElementById("snow_toolbox_body").append(myDiv)
        document.getElementById("sysidtoggler").addEventListener("click", function() {
            toggleSysIdButton();
        });
}

function toggleSysIdButton(){
    if(window.showSysId){
        window.showSysId = false;
        restoreTable()
    }else{
        window.showSysId = true;
        processTable()
    }
}

function restoreTable(){
    frames[0].document.getElementById("customer_account_table").innerHTML = window.tableContents;
    window.tableContents = "";
}

function processTable(){
    window.tableContents = frames[0].document.getElementById("customer_account_table").innerHTML;
    let table = frames[0].document.getElementById("customer_account_table").children[2].children;
    let count = table.length;

    // Add new header value
    let myth = document.createElement("th");
    myth.innerHTML = "Sys Id";
    myth.classList = ["text-align-left","list_header_cell","list_hdr"];
    frames[0].document.getElementById("customer_account_table").children[1].children[0].append(myth);

    for(let i = 0; i < count; i ++){
        let row_id = table[i].id;
        console.log(row_id);
        let sys_id = row_id.split("row_customer_account_")[1];
        let mytd = document.createElement("td");
        mytd.innerHTML = sys_id + " <span onclick=\"navigator.clipboard.writeText('"+sys_id+"')\" style=\"cursor: pointer\">📋</span>";
        frames[0].document.getElementById(row_id).append(mytd);
    }
}
