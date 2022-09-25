#!/usr/bin/env node

// import dependencies
// import minimist from "minimist";
// import moment from "moment-timezone";
// import fetch from "node-fetch";
//
// const args = minimist(process.argv.slice(2));
//
// const helpText = 
// `Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE
// -h            Show this help message and exit.
// -n, -s        Latitude: N positive; S negative.
// -e, -w        Longitude: E positive; W negative.
// -z            Time zone: uses tz.guess() from moment-timezone by default.
// -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.
// -j            Echo pretty JSON from open-meteo API and exit.`;
//
// // if there is -h, show help text and exit
// if (args.h) {
//     console.log(helpText);
//         process.exit(0);
//         }
//
//         // set timezone to what was given, or guess from system
//         const timezone = args.t ? args.t: moment.tz.guess();
//
//         // set longitude and latitude
//         const latitude =  args.n || args.s * -1;
//         const longtitude = args.n || args.s * -1;
//
//         const url = 'https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=precipitation_hours&current_weather=true&timezone=${timezone}';
//
//         // make a request and await data
//         const response = await fetch(url);
//         const data = await response.json();
//
//         // if there is -j, show json and exit
//         if (args.j) {
//             console.log(data);
//                 process.exit(0);
//                 }
//
//                 // set up logic for days, if there is no days arg, set days as 1/tomorrow
//                 const days = 1
//
//                 if (args.d != null) {
//                     days = args.d
//                     }
//
//                     var DAY; 
//
//                     if (days == 0) {
//                         DAY = "today"
//                           } else if (days > 1) {
//                               DAY = "in " + days + " days"
//                                 } else {
//                                     DAY = "tomorrow"
//                                       }
//
//                                       // calculate precipitation per day
//                                       const precipitation = data.daily.precipitation_hours[days];
//                                         
//                                         // log the final message onto the console
//                                         if (precipitation > "0") {
//                                             console.log("You might need your galoshes ${DAY}.")
//                                             } else {
//                                                 console.log("You will not need your galoshes ${DAY}.")
//                                                 }
