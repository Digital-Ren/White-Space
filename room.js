// CLOCK

function updateClock() {

    const now = new Date();

    const time = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Riyadh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });


    document.getElementById("clock").textContent = time;

}



function updateCalendar() {

    const now = new Date();


    const date = now.toLocaleDateString("en-US", {
        timeZone: "Asia/Riyadh",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });


    document.getElementById("calendar").textContent = date;

}



updateClock();
updateCalendar();


setInterval(updateClock, 1000);





// COUNTDOWN SYSTEM


let countdowns =
JSON.parse(localStorage.getItem("countdowns")) || [];



function saveCountdowns() {

    localStorage.setItem(
        "countdowns",
        JSON.stringify(countdowns)
    );

}





function displayCountdowns() {


    const container =
    document.getElementById("countdowns");


    container.innerHTML = "";



    countdowns.forEach((item, index) => {


        const target =
        new Date(item.date);



        const now =
        new Date();



        const difference =
        target - now;



        let result;



        if (difference > 0) {


            const days =
            Math.floor(
                difference / (1000 * 60 * 60 * 24)
            );


            const hours =
            Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            );


            const minutes =
            Math.floor(
                (difference / (1000 * 60)) % 60
            );


            const seconds =
            Math.floor(
                (difference / 1000) % 60
            );


            result =
            `${item.name}: ${days}d ${hours}h ${minutes}m ${seconds}s`;


        } else {


            result =
            `${item.name}: Finished`;


        }




        const element =
        document.createElement("p");


        element.textContent = result;


        container.appendChild(element);



    });


}



document
.getElementById("addCountdown")
.addEventListener("click", () => {



    const name =
    prompt("Countdown name:");



    if (!name) return;



    const date =
    prompt(
        "Enter date and time:\nExample: 2027-01-01 00:00"
    );



    if (!date) return;



    countdowns.push({

        name: name,

        date: date

    });



    saveCountdowns();

    displayCountdowns();



});



displayCountdowns();


setInterval(displayCountdowns, 1000);







// NOTES SYSTEM


const notes =
document.getElementById("notes");



notes.value =
localStorage.getItem("notes") || "";



notes.addEventListener("input", () => {


    localStorage.setItem(
        "notes",
        notes.value
    );


});