import './style/style.scss';
import './style/flipclock.css';

$('document').ready(() => {
    let timer = $('.timer').FlipClock({
        autoStart: true,
        callbacks: {
            onStop() {
                alert('Время вышло');
            }
        }
    });

    timer.setTime(10000);
    timer.setCountdown(true);
})
