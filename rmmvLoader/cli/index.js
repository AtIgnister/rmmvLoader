#! /usr/bin/env bun
const { program } = require('commander')
const list = require('./commands/list.js')
const add = require('./commands/add.js')

const path = "./include.json";
const file = Bun.file(path);
const contents = await file.json();

program.command('list')
    .description('List all plugins')
    .action(function() {
        list(contents)
    });

program.command('add')
    .description('adds a plugin')
    .argument("<Name>", "Name of the plugin")
    .action(function(name) {
        add(contents, name)
    });

program.parse()