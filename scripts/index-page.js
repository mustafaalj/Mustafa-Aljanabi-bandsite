// 1. create appoints array

let wall = [
  {
    name: "Connor Walton",
    date: "02/12/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    img: "../assets/images/Mohan-muruge.jpg",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    img: "../assets/images/Mohan-muruge.jpg",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2021",
    comment:
      "can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
    img: "../assets/images/Mohan-muruge.jpg",
  },
];
// 2. create function that will create elements based on posting in array
function wallCard(post) {
  const nameCommentBox = document.createElement("div");
  nameCommentBox.className = "nameCommentBox";

  const nameDateBox = document.createElement("div");
  nameDateBox.className = "nameDatetBox";

  const cardEl = document.createElement("article");
  cardEl.className = "post";

  const nameEl = document.createElement("span");
  nameEl.className = "post__name";
  nameEl.innerText = post.name;

  const dateEl = document.createElement("span");
  dateEl.className = "post__date";
  dateEl.innerText = post.date;

  const commentEl = document.createElement("span");
  commentEl.className = "post__comment";
  commentEl.innerText = post.comment;

  const imgEl = document.createElement("img");
  imgEl.className = "post__img";
  imgEl.src = post.img;

  nameDateBox.append(nameEl, dateEl);
  nameCommentBox.append(nameDateBox, commentEl);
  cardEl.append(imgEl, nameCommentBox);

  return cardEl;
}
// 3. create funciton that will render posting to the html
function renderWall() {
  const myWallCommentEL = document.querySelector("#wall__comment");
  myWallCommentEL.innerHTML = "";

  for (let i = 0; i < wall.length; i++) {
    myWallCommentEL.appendChild(wallCard(wall[i]));
  }
}
//4. create form submit
const formEl = document.querySelector("#wallForm");
function formSubmit(e) {
  e.preventDefault();

  const wallData = {
    name: e.target.fullName.value,
    comment: e.target.comments.value,
    img: e.target.img.value,
  };
  formEl.reset();
  wall.push(wallData);
  renderWall();
}
// 5. attach event listener to the form
formEl.addEventListener("submit", formSubmit);

renderWall();
