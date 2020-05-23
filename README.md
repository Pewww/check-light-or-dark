# is-light-or-dark
Check whether your image is light or dark!

## Installing
---
### npm
```
npm install is-light-or-dark
```

### yarn
```
yarn add is-light-or-dark
```

## How to use?
---
### ES6 Modules
```javascript
import isLightOrDark from 'is-light-or-dark';
```

### CommonJS
```javascript
const {default: isLightOrDark} = require('is-light-or-dark');
```

### Document
| paramters 	| description 	| required 	|
|--------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|----------	|
| image: string 	| Image src to check whether it is light or dark. 	| O 	|
| color: string 	| Color to check whether it is light or dark. (Hex, Rgb, Rgba) 	| X 	|
| x: number 	| The x coordinate (in pixels) of the upper-left corner to start copy from image. 	| X 	|
| y: number 	| The y coordinate (in pixels) of the upper-left corner to start copy from image. 	| X 	|
| width: number 	| The width of the rectangular area(image) you will copy. 	| X 	|
| height: number 	| The height of the rectangular area(image) you will copy. 	| X 	|

## Example
---
### 1. Color
ddd

### 2. Image
ddd