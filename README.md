# check-light-or-dark
Check whether your image and color is light or dark!

<details>
  <summary><b>Color</b></summary><br>
  
  [https://www.npmjs.com/package/@check-light-or-dark/color](https://www.npmjs.com/package/@check-light-or-dark/color)

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

</details>

<details>
  <summary><b>Image</b></summary><br>

  [https://www.npmjs.com/package/@check-light-or-dark/image](https://www.npmjs.com/package/@check-light-or-dark/image)

  ## Installing

  ### npm
  ```
  npm install @check-light-or-dark/image
  ```

  ### yarn
  ```
  yarn add @check-light-or-dark/image
  ```

  ## How to use?

  ### ES6 Modules
  ```javascript
  import lightOrDarkImage from '@check-light-or-dark/image';
  ```

  ### CommonJS
  ```javascript
  const {default: lightOrDarkImage} = require('@check-light-or-dark/image');
  ```

  ### Document
  | paramters 	| description 	| required 	|
  |--------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|----------	|
  | image: string 	| Image src to check whether it is light or dark. 	| O 	|
  | x: number 	| The x coordinate (in pixels) of the upper-left corner to start copy from image. 	| X 	|
  | y: number 	| The y coordinate (in pixels) of the upper-left corner to start copy from image. 	| X 	|
  | width: number 	| The width of the rectangular area(image) you will copy. 	| X 	|
  | height: number 	| The height of the rectangular area(image) you will copy. 	| X 	|

  ## Example
  1. Only Image

  ```JSX
  import React, {useState, useEffect} from 'react';
  import lightOrDarkImage from '@check-light-or-dark/image';
  import styled from 'styled-components';
  import darkCircle from '../../src/assets/icons/dark.png';

  const Div = styled.div`
    padding: 20px;

    img, span {
      vertical-align: middle;
    }

    img {
      width: 300px;
      height: 300px;
      border: 1px solid #202020;
    }

    span {
      font-size: 20px;
      font-weight: bold;
      padding-left: 10px;
    }
  `;

  const TestPage = () => {
    const [result, setResult] = useState(null);

    useEffect(() => {
      lightOrDarkImage({
        image: darkCircle
      }).then(res => {
        setResult(res);
      });
    }, []);

    return (
      <Div>
        <img
          src={darkCircle}
          alt="dark circle img"
        />
        <span>Result: {result}</span>
      </Div>
    );
  };

  export default TestPage;
  ```

  ![Image Example1](https://user-images.githubusercontent.com/23455736/82748841-fc09f400-9ddf-11ea-8f67-0a4630836ed1.png)

  2. With Parameters
  ```JSX
  import React, {useState, useEffect} from 'react';
  import lightOrDarkImage from '@check-light-or-dark/image';
  import styled from 'styled-components';
  import darkCircle from '../../src/assets/icons/dark.png';

  const Div = styled.div`
    padding: 20px;

    img, span {
      vertical-align: middle;
    }

    img {
      width: 300px;
      height: 300px;
      border: 1px solid #202020;
    }

    span {
      font-size: 20px;
      font-weight: bold;
      padding-left: 10px;
    }
  `;

  const TestPage = () => {
    const [result, setResult] = useState(null);

    useEffect(() => {
      lightOrDarkImage({
        image: darkCircle,
        width: 30,
        height: 20,
        x: 5,
        y: 10
      }).then(res => {
        setResult(res);
      });
    }, []);

    return (
      <Div>
        <img
          src={darkCircle}
          alt="dark circle img"
        />
        <span>Result: {result}</span>
      </Div>
    );
  };

  export default TestPage;
  ```

  ![Image Example2](https://user-images.githubusercontent.com/23455736/82748855-12b04b00-9de0-11ea-940c-84c5a9271513.png)

</details>
