function updateTime() {
  let firstCityElement = document.querySelector("#first-city");
  let firstCityDateElement = firstCityElement.querySelector(".date");
  //let firstCityDateElement = document.querySelector("#first-city .date")
  let firstCityTimeElement = firstCityElement.querySelector(".time");
  //Alternative method to display date & time:
  //let firstCityTime = moment().tz("America/Los_Angeles");
  //firstCityDateElement.innerHTML = firstCityTime.format("MMMM Do YYYY");
  //firstCityTimeElement.innerHTML = firstCityTime.format("h:mm:ss [<small>] A [</small>]");

  firstCityDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  firstCityTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>] A [</small>]");

  let secondCityElement = document.querySelector("#second-city");
  let secondCityDateElement = secondCityElement.querySelector(".date");
  //let secondCityDateElement = document.querySelector("#second-city .date")
  let secondCityTimeElement = secondCityElement.querySelector(".time");

  secondCityDateElement.innerHTML = moment()
    .tz("Pacific/Honolulu")
    .format("MMMM Do YYYY");
  secondCityTimeElement.innerHTML = moment()
    .tz("Pacific/Honolulu")
    .format("h:mm:ss [<small>] A [</small>]");
}

updateTime();
setInterval(updateTime, 1000);
