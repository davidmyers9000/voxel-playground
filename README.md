voxel-playground
================

[Source](http://voxeljs.com/#how)

## Step 1 - Install Node.js
**What is node, and why use it?**
		Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

\- [Node.js homepage](http://nodejs.org/)

I am using [boxen](http://boxen.github.com) and luckily the boxen I am using [our-boxen](https://github.com/boxen/our-boxen) comes with Node.js installed already. You can also grab a copy of node from the [node.js homepage](http://nodejs.org/).

## Step 2 - Bootstrap the project

```
cd ~/src
git clone git@github.com:davidmyers9000/voxel-playground.git voxel-playground
```

Now you can tell node to install your dependencies:

```
npm install
```

Then to build your game you use [browserify](http://browserify.org/):
```
npm install browserify -g
browserify mygame.js -o builtgame.js
```

### Step 2.1 - Extra Step Required for Boxen Users

If you are having problems using browserify than you might have to add `./node_modules/bin` to the [path](http://linuxg.net/how-to-set-a-new-path-in-bash-ksh-and-zsh/) and use the `rehash` command to update the zsh PATH.

To do this run
```
export PATH=$PATH:./node_modules/bin
rehash
```
Check that your `$PATH` variable has been updated with 
```
echo $PATH
```
## Step 3

Now you create an index.html file in your project folder, and you should be playable in your browser if you open the index.html file.

```
<!doctype html>
<html>
  <body>
    <script src="builtgame.js"></script>
  </body>
</html>
```


`node_modules/voxel-hello-world` in your project directory is the basic voxel.js npm package. `package.json` controls your packages. Here you can install modules from the [voxel.js module page](http://voxeljs.com/#modules).

```
{
  "name": "mygamename",
  "version": "0.0.1",
  "dependencies": {
    "voxel-hello-world": "0.6.0"
  }
} 
```