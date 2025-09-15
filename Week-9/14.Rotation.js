function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;
  let rotated = arr.slice(k).concat(arr.slice(0, k));
  return rotated;
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));