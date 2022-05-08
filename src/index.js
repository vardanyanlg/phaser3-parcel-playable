import {Scale, Game, Canvas} from 'phaser';
import PreloaderScene from './js/PreloaderScene.js';
import MainScene from './js/MainScene.js';

const gameConfig = {
  type: Phaser.AUTO,
  width: 960,
  height: 540,
  backgroundColor: "#111",
  scale: {
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH
  },
  scene: null
};

const game = new Game(gameConfig);

game.scene.add("Preload", PreloaderScene);
game.scene.add("Main", MainScene);

game.scene.start("Preload");
