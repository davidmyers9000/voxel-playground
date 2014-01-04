voxel-playground
================

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

Once node.js is installed, you can install the basic voxel.js npm package in your project directory, and then install a basic texture pack. Make a file called package.json in your project directory and give it these contents:

```
{
  "name": "mygamename",
  "version": "0.0.1",
  "dependencies": {
    "voxel-hello-world": "0.6.0"
  }
} 
```

Now you can tell node to install your dependencies:

```
npm install
```

Next, create mygame.js and put the following code in it:

{% highlight javascript %}
var createGame = require('voxel-hello-world');
var game = createGame();
{% endhighlight %}

Then to build your game you use [browserify](http://browserify.org/):
```
npm install browserify -g
browserify mygame.js -o builtgame.js
```

### Step 2.1 - Extra Step Required for Boxen Users

If you are using any custom shells like `zsh` than you might have to add `./node_modules/bin` to the [path](http://linuxg.net/how-to-set-a-new-path-in-bash-ksh-and-zsh/) and use the `rehash` command to update the zsh PATH.

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