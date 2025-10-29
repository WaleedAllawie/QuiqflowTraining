//compose
const compose = (f, g) => (x) => f(g(x));

const getDate = (date) => date.toISOString();
const splitDate = (str) => str.split('T')[0];
const formatDate = (str) => str.replace(/-/g, '/');

const newDate = compose(formatDate, compose(splitDate, getDate));

console.log(newDate(new Date()));

//pipe
const pipe = (f, g) => (x) => g(f(x));

const newDatePipe = pipe(getDate, pipe(splitDate, formatDate));

console.log(newDatePipe(new Date()));
