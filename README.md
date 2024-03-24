# rmmvLoader  
A custom plugin loader for rpg maker MV.  
  
# Why?  
The way RMMV handles plugins is pretty primitive. You just dump all of the javascript files into the same folder without any structure.  
Want to only look at yanfly or SRD Plugins? Well, too bad, better start searching!  
This gets annoying pretty quickly, especially if your project uses a lot of plugins.  
  
# What does it do right now?  
Not much to be honest, this is still *very* early in development.  
Right now, it just lets you seperate your plugins by author instead of having to put them all into the same folder.  
So, instead of js/plugins/YEP_AutoSwitches.js its now rmmvLoader/vendors/yanfly/AutoSwitches/AutoSwitches.js.  
Currently, you still have to setup all of the plugins you use by hand-editing the include.json file,  
soon enough that will be automated though.   
Another caveat is that right now you cant modify plugin parameters, but  
that will also change soon (hopefully).  
If you still want to use this as-is, I'd recommend putting all plugins that have plugins parameters into the standard plugins folder.    
You can use rmmvLoader and the regular rmmv plugin loader at the same time, they both just load plugins by adding them as script tags.  
  
# TODO:  
- [ ] Automatically generate include.json  
- [ ] Add Support for changing Plugin parameters  
- [ ] Show Plugin Version in overview  
- [ ] Uninstalling Plugins based on name/vendor via the cli  
- [ ] Support for installing plugins from the internet using the cli  
- [ ] Show installed plugins and plugin parameters in the rmmv editor  

# How to install
Drag the contents of the github repo into your rmmv project and enable the mvLoader plugin.  
To use the cli app, install [bun](https://bun.sh/) and run the command 'bun rmmvLoaderCli.js' while in the same directory as the file.  
