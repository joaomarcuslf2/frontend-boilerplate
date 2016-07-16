var exec = require('child_process').exec;

exec('rm -rf .git');
exec('npm init');
exec('bower init');
exec('git init');
exec('npm install');
exec('bower install');
exec('rm setup.js');