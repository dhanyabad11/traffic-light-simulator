const signalRed = document.querySelector('.red');
const signalYellow = document.querySelector('.yellow');
const signalGreen = document.querySelector('.green');

const trafficSignals = {
    1: { color: 'red', waitTime: 3000 },
    2: { color: 'yellow', waitTime: 4000 },
    3: { color: 'green', waitTime: 5000 }
};

signalRed.style.backgroundColor = 'red';
let signalNumber = 1;

function runTraffic() {
    setTimeout(() => {
        signalNumber++;
        if (signalNumber > 3) {
            signalNumber = 1;
        }

        if (signalNumber === 1) {
            signalRed.style.backgroundColor = 'red';
            signalYellow.style.backgroundColor = 'black';
            signalGreen.style.backgroundColor = 'black';
        }

        if (signalNumber === 2) {
            signalRed.style.backgroundColor = 'black';
            signalYellow.style.backgroundColor = 'yellow';
            signalGreen.style.backgroundColor = 'black';
        }

        if (signalNumber === 3) {
            signalRed.style.backgroundColor = 'black';
            signalYellow.style.backgroundColor = 'black';
            signalGreen.style.backgroundColor = 'green';
        }

        runTraffic();
    }, trafficSignals[signalNumber].waitTime);
}

runTraffic();
