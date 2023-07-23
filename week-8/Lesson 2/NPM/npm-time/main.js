import moment from "moment";
import { request } from "urllib";

let timeNow = new Date();
console.log(timeNow);

let formattedTimeNow = moment().format("MMMM Do, YYYY");
console.log(formattedTimeNow);

request("http://data.nba.net/10s/prod/v1/2016/players.json").then((result) =>
  console.log(result.data.toString())
);
