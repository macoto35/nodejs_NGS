// const theOneFunc = () => {};
// setTimeout(theOneFunc, 4 * 1000);
// Hello after 4 seconds
// Hello after 8 seconds
// You can define only ONE function
const func = (arg) => console.log('Hello after ' + arg + ' seconds!');

for (var i = 1; i <= 2; i++)
	setTimeout(func, 4 * 1000 * i, 4*i);