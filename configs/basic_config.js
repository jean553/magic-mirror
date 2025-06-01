/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
  address: "localhost", // Address to listen on, can be:
              // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
              // - another specific IPv4/6 to listen on a specific interface
              // - "0.0.0.0", "::" to listen on any interface
              // Default, when address config is left out or empty, is "localhost"
  port: 8080,
  basePath: "/",  // The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
          // you must set the sub path here. basePath must end with a /
  ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],  // Set [] to allow all IP addresses
                              // or add a specific IPv4 of 192.168.1.5 :
                              // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                              // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                              // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  useHttps: false,    // Support HTTPS or not, default "false" will use HTTP
  httpsPrivateKey: "",  // HTTPS private key path, only require when useHttps is true
  httpsCertificate: "", // HTTPS Certificate path, only require when useHttps is true

  language: "en",
  locale: "en-US",
  logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
  timeFormat: 24,
  units: "metric",
  // serverOnly:  true/false/"local" ,
  // local for armv6l processors, default
  //   starts serveronly and then starts chrome browser
  // false, default for all NON-armv6l devices
  // true, force serveronly mode, because you want to.. no UI on this device

  modules: [
    {
      module: 'MMM-ModuleScheduler'
    },
    {
    	module: 'MMM-Carousel',
    asses: 'scheduler',
    	position: 'bottom_bar',
    	config: {
    module_schedule: {from: '0 7 * * *', to: '0 20 * * *' },
    		transitionInterval: 45000,
    		showPageIndicators: false,
    		showPageControls: false,
    		ignoreModules: [],
    		mode: 'slides',
    		slides: {
    			main: ['alert', 'updatenotification', 'clock', 'calendar', 'compliments', 'MMM-EmbedYoutube', 'MMM-Breathwork', 'weather', 'MMM-BNPBalance', 'newsfeed'] 
    			//,"Slide 2": ["MMM-Plane-Tickets"]
    		}
    	}
    },
    //{
    //  module: "MMM-Snow",
    //  position: "fullscreen_above",
    //  config: {
    //    flakeCount: 100,
    //    theme: "water"
    //  }
    //},
    {
      module: "alert",
    },
    {
      module: "updatenotification",
      classes: 'scheduler',
      position: "top_bar",
      config: {
        module_schedule: {from: '0 0 * * *', to: '50 22 * * *' },
      }
    },
    {
      module: "clock",
      classes: 'scheduler',
      position: "top_left",
      config: {
        module_schedule: {from: '0 0 * * *', to: '50 22 * * *' },
      }
    },
    {
      module: "calendar",
      classes: 'scheduler',
      header: "France Holidays",
      position: "top_left",
      config: {
        module_schedule: {from: '0 0 * * *', to: '50 22 * * *' },
        maximumEntries: 4,
        calendars: [
          {
            symbol: "calendar-check",
            url: "webcal://www.calendarlabs.com/ical-calendar/ics/45/France_Holidays.ics"
          }
        ]
      }
    },
    {
      module: "calendar",
      classes: 'scheduler',
      header: "US & International days",
      position: "top_left",
      config: {
        module_schedule: {from: '0 0 * * *', to: '50 22 * * *' },
  maximumEntries: 2,
        calendars: [
          {
            symbol: "calendar-check",
            url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
          }
        ]
      }
    },
    {
      module: "MMM-AlarmClock",
      classes: 'scheduler',
      position: "top_left",
      config: {
        module_schedule: {from: '0 0 * * *', to: '50 22 * * *' },
        alarms: [
          {
            time: "8:10",
            days: [1, 2, 3, 4, 5],
            title: "Good morning Jean !",
            message: "Time to wake up :)"
          }
        ]
      }
    },

    {
      module: 'MMM-CountDown',
      classes: 'scheduler',
      position: "top_left",
      config: {
        module_schedule: {from: '0 0 * * *', to: '50 22 * * *' },
      	position: "top_left",
        event: "Next wonderful event in...",
        date: "2023-08-15 10:00:00",
        showHours: false,
        showMinutes: false,
        showSeconds: false,
        daysLabel: " days",
        customInterval: 100000,
      }
    },

    // center: compliments OR youtube video
    {
      module: "compliments",
      position: "lower_third",
      classes: 'scheduler',
      config: {
        // DISPLAY BETWEEN 08:00 and 20:00 EVERY DAYS
        module_schedule: {from: '0 2 * * *', to: '0 21 * * *' },
        morningStartTime: 3,
        morningEndTime: 10,
        afternoonStartTime: 10,
        afternoonEndTime: 18,
        compliments: {
          anytime: [
            "Trust your crazy ideas !",
            "Hi there sexy !",
            "Life is short, live it up !",
            "Enjoy little things !",
          ],
          morning: [
            "Looking good today !",
            "Time to get some coffee !",
            "Enjoy your day !",
            "How was your spleep ?"
          ],
          "....-01-01": [
            "Happy new year !"
          ]
        }
      }
    },

    // videos modules, one per day

    {
      module: "MMM-EmbedYoutube",
      classes: 'scheduler',
      position: "bottom_bar",
      config: {
        module_schedule: {from: '0 21 * * *', to: '50 22 * * *' },
        video_id: "0xVrbTzKdxU", // cosmic relaxation
        loop: true,
        autoplay: true,
        width: 1100,
        height: 600
      }
    },

    // {
    // 	module: "MMM-Breathwork",
    // asses: 'scheduler',
    // 	position: "middle_center",
    // 	config: {
    // 		module_schedule: {from: '50 22 * * *', to: '0 23 * * *' },
    // 	}
    // },

    // end center section

    {
      module: "weather",
      classes: 'scheduler',
      position: "top_right",
      config: {
        module_schedule: {from: '0 0 * * *', to: '50 22 * * *' },
        weatherProvider: "openweathermap",
        type: "current",
        location: "Paris",
        locationID: "2988507", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
        apiKey: ""
      }
    },
    {
      module: "weather",
      classes: 'scheduler',
      position: "top_right",
      header: "Weather Forecast",
      config: {
        module_schedule: {from: '0 0 * * *', to: '50 22 * * *' },
        weatherProvider: "openweathermap",
        type: "forecast",
        location: "Paris",
        locationID: "2988507", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
        apiKey: ""
      }
    },
    {
      module: 'MMM-BNPBalance',
      classes: 'scheduler',
      position: 'top_right',
      header: 'BNP Account Balance', 
      config: {
        module_schedule: {from: '0 0 * * *', to: '50 22 * * *' },
      }
    },
    //{
    //  module: "MMM-Paris-RATP-PG",
    //  classes: 'scheduler',
    //  position: "top_right",
    //  header: "Metro Tolbiac - Olympiades",
    //  config: {
    //    module_schedule: {from: '0 0 * * *', to: '50 22 * * *' },
    //    debug: false,
    //    lines: [
    //      {
    //        type: 'metros',
    //        line: '7',
    //        stations: 'tolbiac',
    //        destination: 'R',
    //        label: '7',
    //        firstCellColor: '#6eca97'
    //      },
    //      {
    //        type: 'metros',
    //        line: '7',
    //        stations: 'tolbiac',
    //        destination: 'A',
    //        label: '7',
    //        firstCellColor: '#6eca97'
    //      },
    //      {
    //        type: 'metros',
    //        line: '14',
    //        stations: 'olympiades',
    //        destination: 'R',
    //        label: '14',
    //        firstCellColor: '#730093'
    //      },
    //      {
    //        type: 'metros',
    //        line: '14',
    //        stations: 'olympiades',
    //        destination: 'A',
    //        label: '14',
    //        firstCellColor: '#730093'
    //      }
    //    ]
    //  }
    //},
    {
      module: "newsfeed",
      classes: 'scheduler',
      position: "bottom_bar",
      config: {
        module_schedule: {from: '0 0 * * *', to: '50 22 * * *' },
        feeds: [
          {
            title: "HackerNews",
            url: "https://news.ycombinator.com/rss"
		  },
        ],
        showSourceTitle: true,
        showPublishDate: true,
        broadcastNewsFeeds: true,
        broadcastNewsUpdates: true
      }
    },
    {
      module: 'MMM-Plane-Tickets',
      classes: 'scheduler',
      position: 'fullscreen_above',
      config: {
        module_schedule: {from: '0 0 * * *', to: '50 22 * * *' },
      }
    },
  ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
