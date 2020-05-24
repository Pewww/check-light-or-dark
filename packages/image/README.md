# @check-light-or-dark/image

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
