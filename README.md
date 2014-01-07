voxel-playground
================

#### [Play here](http://davidmyers9000.github.io/voxel-playground/)

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

Then to build your game you use beefy:
```
npm start
```