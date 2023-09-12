# Utils

![npm (scoped)](https://img.shields.io/npm/v/@boruei.chen/utils)
[![Release](https://github.com/boruei-chen/utils/actions/workflows/release.yml/badge.svg)](https://github.com/boruei-chen/utils/actions/workflows/release.yml)
[![Coverage Status](https://coveralls.io/repos/github/boruei-chen/utils/badge.svg?branch=main)](https://coveralls.io/github/boruei-chen/utils?branch=main)
![npm](https://img.shields.io/npm/dm/@boruei.chen/utils)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/boruei-chen/utils)
![GitHub](https://img.shields.io/github/license/boruei-chen/utils?color=important)

Utility functions.

## Installation
Utils is available as an [npm package](https://www.npmjs.com/package/@boruei.chen/utils).

**npm**
```bash
npm install @boruei.chen/utils
```

**yarn**
```bash
yarn add @boruei.chen/utils
```

## Usage
- [replaceNullWithEmptyStringDeep](#replacenullwithemptystringdeep)
- [replaceEmptyStringWithNullDeep](#replaceemptystringwithnulldeep)
- [getObjectKeyByValue](#getobjectkeybyvalue)
- [getEnAlphabetList](#getenalphabetlist)
- [convertToROCDate](#converttorocdate)
- [convertToADDate](#converttoaddate)

### replaceNullWithEmptyStringDeep
```typescript
import { replaceNullWithEmptyStringDeep } from '@boruei.chen/utils';

const mockData = {
  keyA: null,
  keyB: [
    {
      keyB1: null,
      keyB2: null,
      keyB3: null
    },
    {
      keyB1: null,
      keyB2: null,
      keyB3: null
    },
    {
      keyB1: null,
      keyB2: null,
      keyB3: null
    }
  ],
  keyC: null
};
replaceNullWithEmptyStringDeep(mockData);
// Result:
// {
//   keyA: '',
//   keyB: [
//     {
//       keyB1: '',
//       keyB2: '',
//       keyB3: ''
//     },
//     {
//       keyB1: '',
//       keyB2: '',
//       keyB3: ''
//     },
//     {
//       keyB1: '',
//       keyB2: '',
//       keyB3: ''
//     }
//   ],
//   keyC: ''
// }
```

### replaceEmptyStringWithNullDeep
```typescript
import { replaceEmptyStringWithNullDeep } from '@boruei.chen/utils';

const mockData = {
  keyA: '',
  keyB: [
    {
      keyB1: '',
      keyB2: '',
      keyB3: ''
    },
    {
      keyB1: '',
      keyB2: '',
      keyB3: ''
    },
    {
      keyB1: '',
      keyB2: '',
      keyB3: ''
    }
  ],
  keyC: ''
};
replaceEmptyStringWithNullDeep(mockData);
// Result:
// {
//   keyA: null,
//   keyB: [
//     {
//       keyB1: null,
//       keyB2: null,
//       keyB3: null
//     },
//     {
//       keyB1: null,
//       keyB2: null,
//       keyB3: null
//     },
//     {
//       keyB1: null,
//       keyB2: null,
//       keyB3: null
//     }
//   ],
//   keyC: null
// }
```

### getObjectKeyByValue
```typescript
import { getObjectKeyByValue } from '@boruei.chen/utils';

const mockObject = {
  keyA: 'a',
  keyB: 'b',
  keyC: 'c'
};
const mockValue = 'b';
getObjectKeyByValue(mockObject, mockValue);
// Result:
// keyB
```

### getEnAlphabetList
```typescript
import { getEnAlphabetList } from '@boruei.chen/utils';

getEnAlphabetList();
// Result:
// ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
```

### convertToROCDate
```typescript
import { convertToROCDate } from '@boruei.chen/utils';

const mockDate = '2023/05/22';
convertToROCDate(mockDate);
// Result:
// '112/05/22'
```

### convertToADDate
```typescript
import { convertToADDate } from '@boruei.chen/utils';

const mockDate = '112/05/22';
convertToADDate(mockDate);
// Result:
// '2023/05/22'
```

## Technologies
[![My Skills](https://skillicons.dev/icons?i=typescript)](https://skillicons.dev)

## License
This project is licensed under the terms of the [MIT license](/LICENSE).
