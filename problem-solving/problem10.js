function commonChar(...strings) {
  if (strings.length === 0) return '';
  let res = '';
  const str1 = strings[0];
  for (const char of str1) {
    if (char === ' ' || res.includes(char)) {
      continue;
    }
    if (strings.every((str) => str.includes(char))) {
      res += char;
    }
  }
  return res;
}
