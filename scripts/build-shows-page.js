let shows = [
  {
    Date: "Mon Sept 06 2021",
    Venue: "Ronald Lane",
    Location: "San Francisco,CA",
  },
  {
    Date: "Tue Sept 21 2021",
    Venue: "Pier East",
    Location: "San Francisco,CA",
  },
  {
    Date: "Fri Oct 15 2021",
    Venue: "View Lounge",
    Location: "San Francisco,CA",
  },
  {
    Date: "Sat Nov 06 2021",
    Venue: "Hyatt Agency",
    Location: "San Francisco,CA",
  },
  {
    Date: "Fri Nov 26 2021",
    Venue: "Moscow Center",
    Location: "San Francisco,CA",
  },
  {
    Date: "Wed Dec 15 2021",
    Venue: "Press Club",
    Location: "San Francisco,CA",
  },
];

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
  const showsArticle = document.createElement("article");
  showsArticle.className = "tickets__card";

  const showDateLabel = document.createElement("p");
  showDateLabel.className = "tickets__card__subject";
  showDateLabel.innerText = headers.Date;

  const showDateValue = document.createElement("p");
  showDateValue.className =
    "tickets__card__subject tickets__card__subject--black";
  showDateValue.innerText = show.Date;

  const showVenueLabel = document.createElement("p");
  showVenueLabel.className = "tickets__card__subject";
  showVenueLabel.innerText = headers.Venue;

  const showVenueValue = document.createElement("p");
  showVenueValue.className =
    "tickets__card__subject tickets__card__subject--black";
  showVenueValue.innerText = show.Venue;

  const showLocationLabel = document.createElement("p");
  showLocationLabel.className = "tickets__card__subject";
  showLocationLabel.innerText = headers.Location;

  const showLocationValue = document.createElement("p");
  showLocationValue.className =
    "tickets__card__subject tickets__card__subject--black";
  showLocationValue.innerText = show.Location;

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

renderShows();
