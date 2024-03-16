import { expect, it } from 'vitest'

import rgbDefault, { rgb, rgbString, rgbaString, textToRGB, textToRGBAString, textToRGBString } from '../src'

it('export', () => {
  expect(typeof rgb).toBe('function')
  expect(rgbDefault).toBe(rgb)
  expect(textToRGB).toBe(rgb)

  expect(typeof rgbString).toBe('function')
  expect(textToRGBString).toBe(rgbString)

  expect(typeof rgbaString).toBe('function')
  expect(textToRGBAString).toBe(rgbaString)
})

it('text-rgb', () => {
  expect(rgb('text-rgb')).toEqual([81, 161, 59])
  expect(rgbString('text-rgb')).toEqual(`rgb(81,161,59)`)
  expect(rgbaString('text-rgb')).toEqual(`rgba(81,161,59,1)`)
})

it('hello world', () => {
  expect(rgb('Hello World')).toEqual([133, 230, 177])
  expect(rgb('你好世界')).toEqual([96, 147, 76])
  expect(rgb('हैलो वर्ल्ड')).toEqual([254, 133, 237])
  expect(rgb('Hola Mundo')).toEqual([35, 67, 65])
  expect(rgb('Bonjour le monde')).toEqual([248, 248, 19])
  expect(rgb('مرحبا بالعالم')).toEqual([203, 218, 233])
  expect(rgb('ওহে বিশ্ব')).toEqual([19, 139, 47])
  expect(rgb('Привет, мир')).toEqual([201, 163, 212])
  expect(rgb('Olá Mundo')).toEqual([156, 226, 65])
  expect(rgb('Halo Dunia')).toEqual([21, 72, 56])
  expect(rgb('ہیلو دنیا')).toEqual([209, 151, 57])
  expect(rgb('Hallo Welt')).toEqual([21, 82, 69])
  expect(rgb('こんにちは世界')).toEqual([230, 59, 98])
  expect(rgb('안녕 세계')).toEqual([157, 32, 252])
  expect(rgb('Saluton mondo')).toEqual([149, 222, 176])
})

it('boundary value', () => {
  expect(rgb('')).toEqual([0, 0, 0])
  expect(rgb('1')).toEqual([0, 49, 0])
  expect(rgb('可以')).toEqual([239, 0, 229])
})

it('unique', () => {
  expect(rgb('text-rgb')).toEqual(rgb('text-rgb'))
})
