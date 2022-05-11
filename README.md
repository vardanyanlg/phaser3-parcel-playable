# Playable Ads in one file
## Phaser 3 + Parcel 2 with auto base64 image decode
> A Phaser 3 project template for JavaScript (ES6 support via Babel) and Parcel 2.5 that includes local server with  hot-reloading for development and production builds in one file with images on base64.

## Features
- The project is assembled into one file and is ready for any ad networks.
- Final build with minification and code optimization
- Images will automatically be base64 encoded and embedded in the project
- Automatic image compression is available with a quality setting from 0 to 100.
- Modern code with inheritance classes, arrow functions, as well as asynchronous code, and all this will work even in older browsers thanks to the built-in BabelJS

## Requirements
[Node.js](https://nodejs.org/) (with npm) and I recommend installing and using [Yarn 3](https://yarnpkg.com/).

## Getting Started
You need to either download this project or clone it:
```bash
git clone https://github.com/vardanyanlg/phaser3-parcel-playable.git
```
Make sure you are in the project, if not then go there:
```bash
cd phaser3-parcel-playable
```
Now you need to install all the necessary dependencies for the project to work:
```bash
`yarn install` or `npm install`
```

Everything is ready to start the project.
For local testing use (localhost:8000 will open auto in browser)
```bash
`yarn watch` or `npm run watch`
```

To build the final file use
```bash
`yarn build` or `npm run build`
```
The finished `index.html` file is waiting for you in the `dist` folder

## Assets Loading
Resource loading is declared in `js/PreloaderScene.js`

### Load Audio
Use the `this.addAudio("custom_name",dataURI)` function to load sounds. You need to put the data URI encoded in advance by yourself.

### Load Image
Use `this.addTexture("custom_name", filenameCustom)` function to load images and also import the file in your directory beforehand
`import filenameCustom from 'data-url:../img/filename.png'`