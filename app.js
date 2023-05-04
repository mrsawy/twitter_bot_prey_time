import dotenv from "dotenv";
dotenv.config();
import {
  getDateInSchema,
  arabicTimings,
  getTimeLikeTheApi,
  oneOfTheMainFive,
} from "./helper.js";
import schedule from "node-schedule";

import axios from "axios";

import { tweet } from "./twitterConfig.js";

const schedulePreyTime = async () => {
  console.log(`main function schedulePreyTime works`);

  var current_date = getDateInSchema();
  var prayerTimesObjectRespone = await axios.get(
    `https://api.aladhan.com/v1/timingsByCity/${current_date}?city=muscat&country=oman&method=1`
  );
  var prayerTimes = prayerTimesObjectRespone.data.data.timings;

  var arabicTimingsPrey = arabicTimings(prayerTimes);
  for (const prey in arabicTimingsPrey) {
    const hour = arabicTimingsPrey[prey].split(`:`)[0];
    const minute = arabicTimingsPrey[prey].split(`:`)[1];
    schedule.scheduleJob(
      {
        hour,
        minute,
        tz: `Asia/Muscat`,
      },
      async () => {
        //////////////////////
        console.log(`  ------------------time to prey----------`);
        //////////////////////
        const dateLikeApi = getTimeLikeTheApi();

        if (oneOfTheMainFive(prey)) {
          tweet(`حان الآن موعد أذان ${prey} ${dateLikeApi} صباحا حسب التوقيت المحلي لمحافظة مسقط وضواحيها، وعلى القاطنين خارج المحافظة مراعاة فارق التوقيت.

            #عمان #مسقط

            #أوقات_الصلاة`);
        }
        console.log(`prey time `);
        /////////////////////
      }
    );
  }

  setTimeout(schedulePreyTime, 24 * 60 * 60 * 1000);
};

schedulePreyTime();
