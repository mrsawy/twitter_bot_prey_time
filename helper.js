import axios from "axios";

function getDateInSchema() {
  // Create a new Date object
  var currentDate = new Date();

  // Get the options for formatting the date string
  var options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: `Asia/Muscat`,
  };

  // Format the date string using the specified timezone
  var dateString = currentDate
    .toLocaleDateString("en-US", options)
    .replace(/\//g, "-")
    .split("-");

  return `${dateString[1]}-${dateString[0]}-${dateString[2]}`;
}

///////////////////////////////////////////////////////////////////////////////////////////
function isTodayFriday() {
  var options = { timeZone: 'Asia/Muscat' };
  var today = new Date().toLocaleString('en-US', options);
  return new Date(today).getDay() === 5;
}
const arabicTimings = (timingsEnglish) => {

  console.log(timingsEnglish["Dhuhr"].split(`:`)[0])
  if (isTodayFriday()) {
    return {
      الفجر: timingsEnglish["Fajr"]?.toString() || "N/A",
      الجمعة:
      +timingsEnglish["Dhuhr"].split(`:`)[0] <= 12
        ? timingsEnglish["Dhuhr"]?.toString() || "N/A"
        : `${+timingsEnglish["Dhuhr"].split(`:`)[0] + 12}:${
          timingsEnglish["Dhuhr"].split(`:`)[1]
        }` ,
      العصر: 
      +timingsEnglish["Asr"].split(`:`)[0] < 12
        ? `${+timingsEnglish["Asr"].split(`:`)[0] + 12}:${
            timingsEnglish["Asr"].split(`:`)[1]
          }`
        : timingsEnglish["Asr"]?.toString() || "N/A",
      المغرب: 
      +timingsEnglish["Maghrib"].split(`:`)[0] < 12
        ? `${+timingsEnglish["Maghrib"].split(`:`)[0] + 12}:${
            timingsEnglish["Maghrib"].split(`:`)[1]
          }`
        : timingsEnglish["Maghrib"]?.toString() || "N/A",
      العشاء:
      +timingsEnglish["Isha"].split(`:`)[0] < 12
        ? `${+timingsEnglish["Isha"].split(`:`)[0] + 12}:${
            timingsEnglish["Isha"].split(`:`)[1]
          }`
        : timingsEnglish["Isha"]?.toString() || "N/A", };
  } else {
    return {
      الفجر: timingsEnglish["Fajr"]?.toString() || "N/A",
      الظهر:
      +timingsEnglish["Dhuhr"].split(`:`)[0] <= 12
        ? timingsEnglish["Dhuhr"]?.toString() || "N/A"
        : `${+timingsEnglish["Dhuhr"].split(`:`)[0] + 12}:${
          timingsEnglish["Dhuhr"].split(`:`)[1]
        }` ,
      العصر: 
      +timingsEnglish["Asr"].split(`:`)[0] < 12
        ? `${+timingsEnglish["Asr"].split(`:`)[0] + 12}:${
            timingsEnglish["Asr"].split(`:`)[1]
          }`
        : timingsEnglish["Asr"]?.toString() || "N/A",
      المغرب: 
      +timingsEnglish["Maghrib"].split(`:`)[0] < 12
        ? `${+timingsEnglish["Maghrib"].split(`:`)[0] + 12}:${
            timingsEnglish["Maghrib"].split(`:`)[1]
          }`
        : timingsEnglish["Maghrib"]?.toString() || "N/A",
      العشاء:
      +timingsEnglish["Isha"].split(`:`)[0] < 12
        ? `${+timingsEnglish["Isha"].split(`:`)[0] + 12}:${
            timingsEnglish["Isha"].split(`:`)[1]
          }`
        : timingsEnglish["Isha"]?.toString() || "N/A",
    };
  }
};

///////////////////////////////////////////////////////////////////////////////////////////

const getTimeLikeTheApi = () => {
  let date = new Date();
  let timeZone = "Asia/Muscat";
  let options = { timeZone: timeZone, hour12: true };
  let timeString = date
    .toLocaleTimeString("en-US", options)
    .replace(/:\d+ /, " ");
  timeString = timeString.replace(/PM/g, "مساءً").replace(/AM/g, "صباحاً");
  return timeString;
};

/////////////////

//////////
export {
  // ,
  getDateInSchema,
  arabicTimings,
  getTimeLikeTheApi,
};
