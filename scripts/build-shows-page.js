getRegistration();
function getRegistration() {
  axios
    .get("https://project-1-api.herokuapp.com/register")
    .then((response) => {
      // to get new API key
      // apiKey = response.data

      (apiKey = "81b96784-7a13-457d-9922-b13aa8da1f21"), showdates();
    })
    .catch((error) => console.error(error));
}
function showdates() {
  axios
    .get("https://project-1-api.herokuapp.com/showdates?api_key=" + apiKey)
    .then((response) => {
      shows = response.data;
      renderShows();
    })
    .catch((error) => console.error(error));
}

let headers = [
  {
    Date: "Date",
    Venue: "Venue",
    Location: "Location",
  },
];

function renderShows() {
  const ticketsEl = document.querySelector("#showList");

  for (let i = 0; i < shows.length; i++) {
    ticketsEl.appendChild(displayAllShows(shows[i], headers[0]));
  }
}

function displayAllShows(show, headers) {
  const showsArticle = createElement("article", "tickets__card", null);

  showDateLabel = createElement("p", "tickets__card__subject", headers.Date);

  showVenueLabel = createElement("p", "tickets__card__subject", headers.Venue);

  showVenueValue = createElement(
    "p",
    "tickets__card__subject tickets__card__subject--black",
    show.place
  );

  showLocationLabel = createElement(
    "p",
    "tickets__card__subject",
    headers.Location
  );

  showLocationValue = createElement(
    "p",
    "tickets__card__subject tickets__card__subject--black",
    show.location
  );

  showDateValue = createElement(
    "p",
    "tickets__card__subject tickets__card__subject--black",
    convertTimestampToDate(show.date)
  );

  const showBuyTicket = document.createElement("button");
  showBuyTicket.classList = "tickets__card__button";
  showBuyTicket.innerText = "Buy Ticket";

  showsArticle.append(
    showDateLabel,
    showDateValue,
    showVenueLabel,
    showVenueValue,
    showLocationLabel,
    showLocationValue,
    showBuyTicket
  );

  return showsArticle;
}

function convertTimestampToDate(timeStamp) {
  let date = new Date(timeStamp);
  let dateString = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return dateString;
}

function createElement(element, className, innerText) {
  const showLabel = document.createElement(element);
  showLabel.className = className;
  showLabel.innerText = innerText;
  return showLabel;
}
