#Front-end boilerplate

##Contents:
  1. [Explanation](#explanation)
    - [Main command](#main-command)
    - [Default configuration](#default-configuration)
    - [Main tools](#main-tools)
    - [Gulp tasks](#gulp-tasks)
  2. [File tree](#file-tree)
  3. [Useful resources](#useful-resources)
  4. [TODO](#todo)

  

##Explanation:
This is a project boilerplate, with a bunch of tools and configuration to speedup development.

It comes with **bower**, **npm**, **gulp**, **AngularJS**, **jQuery**, **Node.js** and **Sass(scss)**.

##Main command:
```bash
$ rm -rf .git && npm init && bower init && git init && npm install && bower install
#It will remove .git folder, run npm and bower init, install it's dependencies, then will initialize new git repository.
```

###Default configuration:
**ITCSS** as scss architeture.
**Node.js** as static-server.
**MongoDB** as database.

###Main tools:
- **gulpfile.js** - set of various tasks.
- **server.js** - static server.
- **app.js** - main module from angularJS.

##Gulp tasks:
- **default** - Lint js files on root-folder.
- **todo** - Get all todo comments on js files and save it on markdown folder.
- **clean** - Clean unused folders.
- **install** - Install npm and bower compnents.
- **build** - Prepare system for deploy.
- **node:server** - Run node server.
- **mongod:server** - Run mongod server.
- **start:servers** - Start both servers.
- **lint:all** - Lint all assets file.
- **build:all** - Run main assets tasks.
- **watch:all** - Watch assets modifications.
- **watch:multi** - Watch assets modifications with multi process.
- **js** - Run main javascripts tasks.
- **watch:js** - Watch javascripts modifications.
- **lint:js** - Lint javascripts files.
- **concat:js** - Concat javascripts files.
- **concat:normal:js** - Concat javascripts files into non-minified file.
- **concat:min:js** - Concat javascripts files into minified file.
- **css** - Run main css tasks.
- **watch:css** - Watch css modifications.
- **lint:css** - Lint css files.
- **beautify:css** - Beautify custom css file.
- **minify:css** - Minify custom css file.
- **scss** - Run main scss tasks.
- **watch:scss** - Watch scss modifications.
- **lint:scss** - Lint scss files.
- **compile:scss** - Compile scss files.
- **compile:custom:scss** - Compile custom scss file.
- **img** - Run main img tasks.
- **watch:img** - Watch img modifications.
- **minify:img** - Minify img assets.

##File tree:
```bash
frontend-boilerplate/
|__README.md
|__.bowerrc
|__.gitignore
|__bower.json
|__gulpfile.js
|__package.json
|__server.js
|__app/
|____app.js
|____config/
|____controllers/
|____directives/
|____filters/
|____interceptors/
|____services/
|____value/
|__assets/
|____css/
|____img/
|____js/
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

##Useful resources:
Some tools to speed up project workflow

- **[Yeoman](https://github.com/yeoman/yo)**
  - [Generator AngularJS](https://github.com/yeoman/generator-angular)
  - [Generator jQuery](https://github.com/yeoman/generator-jquery)
  - [Generator Node.js](https://github.com/yeoman/generator-node)
  - [Generator Mocha](https://github.com/yeoman/generator-mocha)
- **[MEAN.js](https://github.com/meanjs/mean)**
  - [Generator MEAN](https://github.com/meanjs/generator-meanjs)

##TODO:

- Resolve RequireJS and AngularJS modules error
- Add Express and MEAN Stack
- Add mocha as test runner

by *João Marcus de Lemos Fernandes*
