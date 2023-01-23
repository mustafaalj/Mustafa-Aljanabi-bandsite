// async function createRegisteration(){
//     fetch("https://project-1-api.herokuapp.com/register")
//   .then((response) =>   response.json())
//   .then((data) => (
//       // Get a new api key every time
//       //apiKey = data.api_key,
//       apiKey = "81b96784-7a13-457d-9922-b13aa8da1f21",
//       commentWApi ="https://project-1-api.herokuapp.com/comments?api_key=" + apiKey,
//       dateWApi ="https://project-1-api.herokuapp.com/showdates?api_key=" + apiKey,

//       getComments(),
//       getDate()

  
//   ))
//   .catch((error) => console.error(error));
//   }


  

// ///////////////////////////
// async function getComments(){
//   fetch(commentWApi)
//   .then((response) => response.json())
//   .then((data) => {
//     wall = data;
//     renderWall();
//   })
//   .catch((error) => console.error(error));
// }

// async function getDate(){
//   fetch(dateWApi)
//   .then((response) => response.json())
//   .then((data) => console.log("date at ", data))

//   // function convertTimestampToDate(timeStamp){
// //   let date = new Date(timestamp);
// //   let dateString = date.toLocaleDateString("en-GB", { day: '2-digit', month: '2-digit', year: 'numeric' });
// //   console.log(dateString + "dataString hererrrr");
// // }
//   .catch((error) => console.error(error));
// }