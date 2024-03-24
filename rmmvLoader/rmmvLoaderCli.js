const path = "./include.json";
const file = Bun.file(path);

const contents = await file.json();
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

file.type; // => "application/json;charset=utf-8";