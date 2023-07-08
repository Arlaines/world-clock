function updateTime() {
  let firstCityElement = document.querySelector("#first-city");
  if (firstCityElement) {
    let firstCityDateElement = firstCityElement.querySelector(".date");
    //let firstCityDateElement = document.querySelector("#first-city .date")
    let firstCityTimeElement = firstCityElement.querySelector(".time");
    //Alternative method to display date & time:
    //let firstCityTime = moment().tz("America/Los_Angeles");
    //firstCityDateElement.innerHTML = firstCityTime.format("MMMM Do YYYY");
    //firstCityTimeElement.innerHTML = firstCityTime.format("h:mm:ss [<small>] A [</small>]");

    firstCityDateElement.innerHTML = moment()
      .tz("Asia/Hong_Kong")
      .format("MMMM Do YYYY");
    firstCityTimeElement.innerHTML = moment()
      .tz("Asia/Hong_Kong")
      .format("h:mm:ss [<small>] A [</small>]");
  }
  let secondCityElement = document.querySelector("#second-city");
  if (secondCityElement) {
    let secondCityDateElement = secondCityElement.querySelector(".date");
    //let secondCityDateElement = document.querySelector("#second-city .date")
    let secondCityTimeElement = secondCityElement.querySelector(".time");

    secondCityDateElement.innerHTML = moment()
      .tz("Europe/London")
      .format("MMMM Do YYYY");
    secondCityTimeElement.innerHTML = moment()
      .tz("Europe/London")
      .format("h:mm:ss [<small>] A [</small>]");
  }
  let thirdCityElement = document.querySelector("#third-city");
  if (thirdCityElement) {
    let thirdCityDateElement = thirdCityElement.querySelector(".date");
    //let secondCityDateElement = document.querySelector("#second-city .date")
    let thirdCityTimeElement = thirdCityElement.querySelector(".time");

    thirdCityDateElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("MMMM Do YYYY");
    thirdCityTimeElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("h:mm:ss [<small>] A [</small>]");
  }
  let fourthCityElement = document.querySelector("#fourth-city");
  if (fourthCityElement) {
    let fourthCityDateElement = fourthCityElement.querySelector(".date");
    let fourthCityTimeElement = fourthCityElement.querySelector(".time");

    fourthCityDateElement.innerHTML = moment()
      .tz("America/New_York")
      .format("MMMM Do YYYY");
    fourthCityTimeElement.innerHTML = moment()
      .tz("America/New_York")
      .format("h:mm:ss [<small>] A [</small>]");
  }
}

function updateCity(event) {
  setInterval(function () {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityTime = moment().tz(cityTimeZone);
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>`;
  }, 1000);
}
updateTime();
setInterval(updateTime, 1000);

let dropDownMenuElement = document.querySelector("#city-menu");
dropDownMenuElement.addEventListener("change", updateCity);
