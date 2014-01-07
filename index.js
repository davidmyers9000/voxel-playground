var createGame = require("voxel-engine");

var game = createGame({
	texturePath: './textures/',
});
var container = document.body;
game.appendTo(container);

var createPlayer = require("voxel-player")(game);

var dude = createPlayer('./textures/shama.png');
dude.possess();
dude.yaw.position.set(0, 20, 0);