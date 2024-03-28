#! /usr/bin/env bun
const { program } = require('commander')
const list = require('./commands/list.js')

const path = "./include.json";
const file = Bun.file(path);
const contents = await file.json();

program
    .command('list')
    .description('List all plugins')
    .action(function() {
        list(contents)
    });

program.parse()