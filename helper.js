function getDateInSchema() {
    // Create a new Date object
    var currentDate = new Date();
  
    // Get the day, month, and year from the current date
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Note: January is month 0
    var year = currentDate.getFullYear();
  
    // Pad the day and month with leading zeros if necessary
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
  
    // Create the date string in dd-mm-yyyy format
    var dateString = day + "-" + month + "-" + year;
    return dateString;
  }
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  function formatTime(time) {
    const [hours, minutes] = time.split(":");
    return new Date().setHours(hours, minutes, 0);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  
  const arabicTimings = (timingsEnglish) => {
    return {
      الفجر: timingsEnglish["Fajr"]?.toString() || "N/A",
      الضحى: timingsEnglish["Sunrise"]?.toString() || "N/A",
      الظهر: timingsEnglish["Dhuhr"]?.toString() || "N/A",
      العصر: timingsEnglish["Asr"]?.toString() || "N/A",
      الغروب: timingsEnglish["Sunset"]?.toString() || "N/A",
      المغرب: timingsEnglish["Maghrib"]?.toString() || "N/A",
      العشاء: timingsEnglish["Isha"]?.toString() || "N/A",
      الامساك: timingsEnglish["Imsak"]?.toString() || "N/A",
      "منتصف الليل": timingsEnglish["Midnight"]?.toString() || "N/A",
      "الثلث الأول من الليل": timingsEnglish["Firstthird"]?.toString() || "N/A",
      "الثلث الأخير من الليل": timingsEnglish["Lastthird"]?.toString() || "N/A",
    };
  };
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  
  const getTimeLikeTheApi = () => {
    let date = new Date();
    let timeZone = "Asia/Muscat"; 
    let options = { timeZone: timeZone };
    return date.toLocaleTimeString("en-US", options).replace(/:\d+ /, " ");
  };
  
  const oneOfTheMainFive = (prey) => {
    if (
      prey == `الضحى` ||
      prey == `الغروب` ||
      prey == `الامساك` ||
      prey == `منتصف الليل` ||
      prey == `الثلث الأول من الليل` ||
      prey == `الثلث الأخير من الليل`
    ) {
      return false;
    } else {
      return true;
    }
  };
  
  export {
    formatTime,
    getDateInSchema,
    arabicTimings,
    getTimeLikeTheApi,
    oneOfTheMainFive,
  };
  