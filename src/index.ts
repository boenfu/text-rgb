/**
 * Create rgb tuple from a string of text
 * @param text
 * @returns rgb [number, number, number]
 */
export function rgb(text: string): [number, number, number] {
  return split(text).map(channelCodeAt) as [number, number, number]
}

/**
 * Create rgb string from a string of text
 * @param text
 * @returns rgb string
 */
export function rgbString(text: string): string {
  return `rgb(${rgb(text)})`
}

/**
 * Create rgba string from a string of text
 * @param text
 * @returns rgba string
 */
export function rgbaString(text: string, alpha = 1): string {
  return `rgba(${rgb(text)},${alpha})`
}

/**
 * @alias `rgb`
 */
export const textToRGB = rgb
/**
 * @alias `rgbString`
 */
export const textToRGBString = rgbString
/**
 * @alias `rgbaString`
 */
export const textToRGBAString = rgbaString

export default rgb

function split(text: string): [string, string, string] {
  const size = text.length
  const p1 = Math.round(size / 3)
  const p2 = Math.round(size / 3 * 2)
  return [text.slice(0, p1), text.slice(p1, p2), text.slice(p2)]
}

function channelCodeAt(text: string): number {
  return Array.from(text).reduce((c, i) => c + (i.charCodeAt(0) || 0), 0) % 256
}
