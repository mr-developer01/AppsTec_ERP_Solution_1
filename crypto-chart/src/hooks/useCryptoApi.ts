import { useEffect, useState } from "react";

export const useCryptoApi = () => {
  const [crypto, setCrypto] = useState([]);
  const [currency, setCurrency] = useState([]);
  useEffect(() => {
    async function crypto() {
      const abc = await fetch(
        new Request("https://api.livecoinwatch.com/coins/list"),
        {
          method: "POST",
          headers: new Headers({
            "content-type": "application/json",
            "x-api-key": "8e00ca10-8ab5-457f-9139-e5f40b0e1028",
          }),
          body: JSON.stringify({
            currency: "USD",
            sort: "rank",
            order: "ascending",
            offset: 0,
            limit: 10,
            meta: false,
          }),
        }
      );
      const result = await abc.json();
      setCrypto(result);
    }

    async function currencyVal() {
      const abc = await fetch(
        new Request("https://api.livecoinwatch.com/coins/single/history"),
        {
          method: "POST",
          headers: new Headers({
            "content-type": "application/json",
            "x-api-key": "8e00ca10-8ab5-457f-9139-e5f40b0e1028",
          }),
          body: JSON.stringify({
            currency: "USD",
            code: "BTC",
            start: 1741171951001,
            end: 1741258351001,
          }),
        }
      );
      const result = await abc.json();
      let convertedTimeData = result.history;
      function convertDateToDayNumber(timestamp) {
        const date = new Date(timestamp);
        const options = {
          timeZone: "Asia/Kolkata",
          day: "numeric" // Only show the day in numeric form
        };
        return Number(new Intl.DateTimeFormat('en-IN', options).format(date)); // Return as a number
      }
      
      // Loop through the array and replace the 'date' field with the day only
      convertedTimeData.forEach(item => {
        item.date = convertDateToDayNumber(item.date);
      });

      // Output the updated array
      console.log(convertedTimeData);
      setCurrency(convertedTimeData);
    }
    crypto();
    currencyVal();
  }, []);

  return { crypto, currency };
};
