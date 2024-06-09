process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinners = ['|', '/', '-', '\\', '-|', '/', '-', '\\'];


spinners.forEach((state, index) => {
setTimeout(() => process.stdout.write(`\r${state} `), index * 200 + 100);
})

setTimeout(() => console.log(''), spinners.length * 200 + 100);
