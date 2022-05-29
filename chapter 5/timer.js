const timeout = setTimeout(() => {
    console.log("1초 후에 실행 됩니다.");
}, 1000);

const interval = setInterval(() => {
    console.log("1초 마다 실행 됩니다.");
}, 1000);

const immdeiate = setImmediate(() => {
    console.log("setImmediate() ~");
});

console.log("setImmediate보다 먼저 실행됩니다.");

setTimeout(() => {
    clearInterval(interval);
}, 3000);
