const hourElement = document.querySelector("#hour");
const minuteElement = document.querySelector("#minutes");
const secondElement = document.querySelector("#seconds");
const ampmElement = document.querySelector("#ampm");

function updateClock() {
    let hour= new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let ampm = "AM";

    // Day Night Difference
    if(hour > 12) {
        hour = hour - 12;
        ampm = "PM";
    }

    hourElement.textContent = hour;
    minuteElement.textContent = minutes;

}

