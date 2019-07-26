// Print "Hello World"
// Every second
// And stop after 5 times
// After 5 times. Print "Done" and let Node exit.

let counter = 1

const func = () => {
	if (counter >= 5) {
		console.log('Done');
		clearInterval(timerId);
	}
	
	console.log('Hello World' + counter);
	counter++;
};

const timerId = setInterval(func, 1000);
