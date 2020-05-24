# @check-light-or-dark/color

## Installing

### npm
```
npm install @check-light-or-dark/color
```

### yarn
```
yarn add @check-light-or-dark/color
```

## How to use?

### ES6 Modules
```javascript
import lightOrDarkColor from '@check-light-or-dark/color';

lightOrDarkColor('#fff'); // light
```

### CommonJS
```javascript
const {default: lightOrDarkColor} = require('@check-light-or-dark/color');

lightOrDarkColor('rgb(0, 0, 0)'); // dark
```

### Document
| paramters 	| description 	| required 	|
|--------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|----------	|
| color: string 	| Color to check whether it is light or dark. (Hex, Rgb, Rgba) 	| O 	|

## Example
```JSX
import React from 'react';
import lightOrDarkColor from '@check-light-or-dark/color';
import styled from 'styled-components';

const Li = styled.li<{color: string; isLight: boolean;}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: ${({color}) => color};

  span {
    color: ${({isLight}) => isLight
      ? 'black'
      : 'white'
    };
    font-weight: bold;
  }
`;

const COLORS = [
  '#062d88',
  'rgb(20, 20, 20)',
  '#b2e814',
  '#47dd7b',
  'rgb(128,0,0)',
  'rgba(255, 101, 80, 0.4)'
];

const TestPage = () => {
  return (
    <ul>
      {COLORS.map(color => (
        <Li
          key={color}
          color={color}
          isLight={lightOrDarkColor(color) === 'light'}
        >
          <span>TEXT</span>
        </Li>
      ))}
    </ul>
  );
};

export default TestPage;
```

![Color Example](https://user-images.githubusercontent.com/23455736/82748821-d7ae1780-9ddf-11ea-910e-01bcb9600cf9.png)
