#! /usr/bin/env bun
const { program } = require('commander')

const path = "./include.json";
const file = Bun.file(path);
const contents = await file.json();

program
    .command('list')
    .description('List all plugins')
    .action(list)

async function list() {
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
}

program.parse()