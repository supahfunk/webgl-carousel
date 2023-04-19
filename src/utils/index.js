/*------------------------------
Lerp
------------------------------*/
export const lerp = (v0, v1, t) => v0 * (1 - t) + v1 * t

/*--------------------
Get Piramidal Index
--------------------*/
// Returns an array of decreasing index values in a pyramid shape, starting from the specified index with the highest value. These indices are often used to create overlapping effects among elements.
export const getPiramidalIndex = (array, index) =>
  array.map((_, i) =>
    index === i ? array.length : array.length - Math.abs(index - i)
  )
