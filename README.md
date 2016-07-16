#Front-end setup

##Explanation:
This is a custom setup, with a bunch of tools and configuration to speedup development.

It comes with **bower**, **npm**, **gulp**, **AngularJS**, **jQuery**, **RequireJS** and **Sass(scss)**.

###Default configuration:
**ITCSS** as scss architeture.
**Node.js** as static-server.
**MongoDB** as database.

###Main tools:
**setup.js** - prepare workspace to a new project.
**gulpfile.js** - set of various tasks.
**server.js** - static server.
**app.js** - main module from angularJS.
**main.js** - file used by requireJS.

##Main command:
```bash
$ node setup.js
```

It will remove .git folder, run npm and bower init, install it's dependencies, then will initialize new git repository.

##Gulp tasks:
**default** - Lint js files on root-folder.
**todo** - Get all todo comments on js files and save it on markdown folder.
**clean** - Clean unused folders.
**install** - Install npm and bower compnents.
**build** - Prepare system for deploy.
**node:server** - Run node server.
**mongod:server** - Run mongod server.
**start:servers** - Start both servers.
**lint:all** - Lint all assets file.
**build:all** - Run main assets tasks.
**watch:all** - Watch assets modifications.
**watch:multi** - Watch assets modifications with multi process.
**js** - Run main javascripts tasks.
**watch:js** - Watch javascripts modifications.
**lint:js** - Lint javascripts files.
**concat:js** - Concat javascripts files.
**concat:normal:js** - Concat javascripts files into non-minified file.
**concat:min:js** - Concat javascripts files into minified file.
**css** - Run main css tasks.
**watch:css** - Watch css modifications.
**lint:css** - Lint css files.
**beautify:css** - Beautify custom css file.
**minify:css** - Minify custom css file.
**scss** - Run main scss tasks.
**watch:scss** - Watch scss modifications.
**lint:scss** - Lint scss files.
**compile:scss** - Compile scss files.
**compile:custom:scss** - Compile custom scss file.
**img** - Run main img tasks.
**watch:img** - Watch img modifications.
**minify:img** - Minify img assets.


##File tree:
```bash
frontend-setup/
|__README.md
|__.bowerrc
|__.gitignore
|__app.js
|__bower.json
|__gulpfile.js
|__main.js
|__package.json
|__server.js
|__setup.js
|__assets/
|____css/
|____img/
|____js/
|______config/
|______controllers/
|______directives/
|______filters/
|______interceptors/
|______services/
|______value/
|____md/
|____scss/
|______style.scss
|______components/
|________components.scss
|______elements/
|________elements.scss
|______generic/
|________generic.scss
|______objects/
|________objects.scss
|______settings/
|________settings.scss
|______tools/
|________tools.scss
|______trumps/
|________trumps.scss
|____views/
|__lib/
```

by *João Marcus de Lemos Fernandes*