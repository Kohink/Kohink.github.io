document.addEventListener('DOMContentLoaded', function () {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('mins');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const currentTime = new Date();
        const currentYear = currentTime.getFullYear();
        let birthday = new Date(`${currentYear}-06-22`); // Replace MM-DD with the month and day of the birthday

        if (currentTime > birthday) {
            birthday.setFullYear(currentYear + 1);
        }

        const totalSeconds = (birthday - currentTime) / 1000;

        if (totalSeconds <= 0) {
            document.body.style.backgroundImage = "url('/assets/images/flower.gif')"; 
            setTimeout(() => {
                document.body.style.backgroundImage = "url('/assets/images/char.gif')"; 
                birthday.setFullYear(currentYear + 1);
                updateCountdown();
            }, 24 * 60 * 60 * 1000);
        } else {
            const days = Math.floor(totalSeconds / 3600 / 24);
            const hours = Math.floor(totalSeconds / 3600) % 24;
            const mins = Math.floor(totalSeconds / 60) % 60;
            const seconds = Math.floor(totalSeconds) % 60;

            daysEl.innerHTML = days;
            hoursEl.innerHTML = hours;
            minsEl.innerHTML = mins;
            secondsEl.innerHTML = seconds;
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});