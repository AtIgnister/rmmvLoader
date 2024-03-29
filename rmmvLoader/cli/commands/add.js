const path = "./include.json";

async function add(contents, name) {
    // { name: "my-package" }

    let vendors
    vendors = contents.vendors

    vendors[0].plugins.push(name)

    contents = {
        "vendors": vendors
    }

    await Bun.write(path, JSON.stringify(contents));
}

module.exports = add