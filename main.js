document.addEventListener("DOMContentLoaded", function() {
  setInterval(function() {
    
    // DATES //
    const time = new Date();
    const months = [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık"
      ]

    // ZAMAN KODLARI //
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minute");
    const second = document.getElementById("second");

    hour.innerHTML = `${time.getHours()}:`.padStart(3, "0");
    minute.innerHTML = `${time.getMinutes()}:`.padStart(3, "0");
    second.innerHTML = `${time.getSeconds()}`.padStart(2, "0");

    // TARİH KODLARI //
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");

    day.innerHTML = `${time.getDate()} `;
    month.innerHTML = `${months[time.getMonth()]} `;
    year.innerHTML = `${time.getFullYear()}`;

  }, 1000);
});