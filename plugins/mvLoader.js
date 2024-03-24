//=============================================================================
// mvLoader.js
//=============================================================================
/*:
* @target MV
* @plugindesc v0.0.1 A Custom Pluginloader for RPG Maker MV
* @author AtIgnister
* @help mvLoader.js
*
* @command runMe
* @desc this is the command you can call in the Plugin Manager
*
*
*/

loadVendors()

function loadVendors() {
    vendors = loadDataFile("include.json");
    vendors = vendors.vendors;

    
    vendors.forEach(vendor => {
        plugins = vendor.plugins
        plugins.forEach(plugin => {
            loadPlugin(vendor.vendor, plugin)
        });
    });
}

function loadPlugin(vendor, pname) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `rmmvLoader/vendors/${vendor}/${pname}/${pname}.js`;
    script.async = false;
    document.body.appendChild(script);   
}


function loadDataFile(name) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", `./rmmvLoader/${name}`, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}
