
async function list(contents) {
    // { name: "my-package" }

    let vendors
    vendors = contents.vendors

    console.log("Installed Plugins:\n")

    vendors.forEach(vendor => {
        console.log(`       --${vendor.vendor}--        `)

        let plugins
        plugins = vendor.plugins
        plugins.forEach(plugin => {
            console.log(`   - ${plugin} -`)
        });
    });

}

module.exports = list