const path = "./include.json";

async function add(contents, name) {
    // { name: "my-package" }
    name = name.split("/")

    let vendors
    vendors = contents.vendors
    vendors = addVendor(vendors, name)

    contents = {
        "vendors": vendors
    }

    await Bun.write(path, JSON.stringify(contents));
}

function addVendor(vendors, name) {
    let i = 0
    vendors.forEach(vendor => {
        if (vendor.vendor === name[0]) {
           vendor.plugins.push(name[1])
           return vendors
        }
    });

    vendors.push(
        {
            vendor: name[0],
            plugins: [name[1]]
        }
    )

    return vendors

}

module.exports = add