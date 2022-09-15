// module.exports.getDate = getDate; //to export locally made modules

// function getDate() {
//   let today = new Date();

//   let options = {
//     weekday: "long",  //can be declared like this
//     day: "numeric",
//     month: "long",
//   };

//   let day = today.toLocaleString("en-US", options);
//   return day;
// }

module.exports.getDate = function () {
  //can also ignore "module" to export  ex:- exports.getDate = function()
  let today = new Date();

  let options = {
    weekday: "long", //also be declared like this
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleString("en-US", options);
  return day;
};

module.exports.getDay = getDay; //for exporting individual local module
function getDay() {
  let today = new Date();

  let options = {
    weekday: "long",
  };

  let day = today.toLocaleString("en-US", options);
  return day;
}
