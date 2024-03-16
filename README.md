# text-rgb
Create rgb tuple from a string of text
## Install
```shell
npm install @beonfu/text-rgb
```

## Usage

```javascript
import { rgb, rgbString, rgbaString } from '@beonfu/text-rgb'

rgb('Hello World') // [133, 230, 177]

rgbString('Hello World') // "rgb(133,230,177)"

rgbaString('Hello World', 1) // "rgba(133,230,177,1)"
```

The principle is to divide the text into three parts, and then take the remainder of 256 after accumulating the sum of charCode
So there is no randomness

```javascript
rgb('Hello World') === rgb('Hello World') // true
```

## Hello World RGB
In addition to the functions of the function itself, I also want to share some interesting content

<table>
  <tbody>
    <tr>
      <td align="center">
          <div
           style="width:48px;height:48px;background: rgb(133, 230, 177)"
          >
          </div>
          <strong>Hello World</strong>
      </td>
      <td align="center">
          <div
           style="width:48px;height:48px;background: rgb(96, 147, 76)"
          >
          </div>
          <strong>你好世界</strong>
      </td>
      <td align="center">
          <div
           style="width:48px;height:48px;background: rgb(254, 133, 237)"
          >
          </div>
          <strong>हैलो वर्ल्ड</strong>
      </td>
      <td align="center">
          <div
           style="width:48px;height:48px;background: rgb(35, 67, 65)"
          >
          </div>
          <strong>Hola Mundo</strong>
      </td>
    </tr>
    <tr>
      <td align="center">
          <div
           style="width:48px;height:48px;background: rgb(248, 248, 19)"
          >
          </div>
          <strong>Bonjour le monde</strong>
      </td>
      <td align="center">
          <div
           style="width:48px;height:48px;background: rgb(203, 218, 233)"
          >
          </div>
          <strong>مرحبا بالعالم</strong>
      </td>
      <td align="center">
          <div
           style="width:48px;height:48px;background: rgb(19, 139, 47)"
          >
          </div>
          <strong>ওহে বিশ্ব</strong>
      </td>
      <td align="center">
          <div
           style="width:48px;height:48px;background: rgb(201, 163, 212)"
          >
          </div>
          <strong>Привет, мир</strong>
      </td>
    </tr>
    <tr>
      <td align="center">
          <div
           style="width:48px;height:48px;background: rgb(156, 226, 65)"
          >
          </div>
          <strong>Olá Mundo</strong>
      </td>
      <td align="center">
          <div
           style="width:48px;height:48px;background: rgb(21, 72, 56)"
          >
          </div>
          <strong>Halo Dunia</strong>
      </td>
      <td align="center">
          <div
           style="width:48px;height:48px;background: rgb(209, 151, 57)"
          >
          </div>
          <strong>ہیلو دنیا</strong>
      </td>
      <td align="center">
          <div
           style="width:48px;height:48px;background: rgb(21, 82, 69)"
          >
          </div>
          <strong>Hallo Welt</strong>
      </td>
    </tr>
    <tr>
      <td align="center">
          <div
           style="width:48px;height:48px;background: rgb(230, 59, 98)"
          >
          </div>
          <strong>こんにちは世界</strong>
      </td>
      <td align="center">
          <div
           style="width:48px;height:48px;background: rgb(157, 32, 252)"
          >
          </div>
          <strong>안녕 세계</strong>
      </td>
       <td align="center">
          <div
           style="width:48px;height:48px;background: rgb(172, 133, 143)"
          >
          </div>
          <strong>สวัสดีชาวโลก</strong>
      </td>
       <td align="center">
          <div
           style="width:48px;height:48px;background: rgb(149, 222, 176)"
          >
          </div>
          <strong>Saluton mondo</strong>
      </td>
    </tr>
  </tbody>
</table>

## PackageName
Why use `@boenfu/text-rgb` instead of `text-rgb` ?
> npm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/text-rgb - Package name too similar to existing package [textrgb](https://www.npmjs.com/package/textrgb); try renaming your package to '@boenfu/text-rgb' and publishing with 'npm publish --access=public' instead

## License
MIT
