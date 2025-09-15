function countFrequency(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
  }
  return freq;
}
console.log(countFrequency([1, 2, 2, 3]));