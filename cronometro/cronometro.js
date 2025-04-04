// Relógio
function atualizarRelogio() {
    const clock = document.getElementById("clock");
    const agora = new Date();
    clock.textContent = agora.toLocaleTimeString();
}

setInterval(atualizarRelogio, 1000);

// Cronômetro
let cronometroTempo = 0;
let cronometroInterval;
let cronometroRodando = false;

const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");
const timeDisplay = document.getElementById("timeDisplay");

startStopButton.addEventListener("click", () => {
    if (cronometroRodando) {
        clearInterval(cronometroInterval);
        startStopButton.textContent = "Iniciar";
    } else {
        cronometroInterval = setInterval(() => {
            cronometroTempo++;
            const minutos = Math.floor(cronometroTempo / 60);
            const segundos = cronometroTempo % 60;
            timeDisplay.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        }, 1000);
        startStopButton.textContent = "Pausar";
    }
    cronometroRodando = !cronometroRodando;
    resetButton.disabled = false;
});

resetButton.addEventListener("click", () => {
    clearInterval(cronometroInterval);
    cronometroTempo = 0;
    timeDisplay.textContent = "00:00";
    startStopButton.textContent = "Iniciar";
    cronometroRodando = false;
    resetButton.disabled = true;
});

// Temporizador
let temporizadorTempo;
let temporizadorInterval;

const startTimerButton = document.getElementById("startTimer");
const inputTempo = document.getElementById("inputTempo");
const timerDisplay = document.getElementById("timerDisplay");
const alarm = document.getElementById("alarm");

startTimerButton.addEventListener("click", () => {
    temporizadorTempo = parseInt(inputTempo.value);
    if (isNaN(temporizadorTempo) || temporizadorTempo <= 0) {
        alert("Por favor, insira um valor válido de tempo em segundos.");
        return;
    }

    timerDisplay.textContent = formatarTempo(temporizadorTempo);
    temporizadorInterval = setInterval(() => {
        temporizadorTempo--;
        timerDisplay.textContent = formatarTempo(temporizadorTempo);

        if (temporizadorTempo <= 0) {
            clearInterval(temporizadorInterval);
            alarm.play(); // Toca o alarme
        }
    }, 1000);
});

function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
}