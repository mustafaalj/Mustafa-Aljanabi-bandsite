getRegistration();

function getRegistration() {
  axios
    .get("https://project-1-api.herokuapp.com/register")
    .then((response) => {
      // to get new API key
      // apiKey = response.data

      (apiKey = "81b96784-7a13-457d-9922-b13aa8da1f21"),
        (commentWApi =
          "https://project-1-api.herokuapp.com/comments?api_key=" + apiKey),
        getComments();
    })
    .catch((error) => console.error(error));
}

function getComments() {
  axios
    .get(commentWApi)
    .then((response) => {
      wall = response.data;
      renderWall();
    })
    .catch((error) => console.error(error));
}

function postComments(postName, postComment) {
  const data = {
    name: postName,
    comment: postComment,
  };

  const headers = {
    "Content-Type": "application/json",
  };

  axios
    .post(commentWApi, data, { headers: headers })
    .then((response) => {
      console.log("data is posted");
    })
    .catch((error) => {
      console.log(error);
    });
}

// 2. create funciton that will render posting to the html
async function renderWall() {
  const myWallCommentEL = document.querySelector("#wall__comment");
  myWallCommentEL.innerHTML = "";

  wall.sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });

  for (let i = 0; i < wall.length; i++) {
    myWallCommentEL.appendChild(wallCard(wall[i]));

    // 3. create function that will create elements based on posting in array
  }
  function wallCard(post) {
    const nameCommentBox = createElement("div", "nameCommentBox", null);

    const nameDateBox = createElement("div", "nameDatetBox", null);

    const cardEl = createElement("article", "post", null);

    const nameEl = createElement("span", "post__name", post.name);

    const dateEl = createElement("span", "post__date", getDate(post.timestamp));

    const commentEl = createElement("span", "post__comment", post.comment);

    const imgEl = createElement("img", "post__img", null);

    nameDateBox.append(nameEl, dateEl);
    nameCommentBox.append(nameDateBox, commentEl);
    cardEl.append(imgEl, nameCommentBox);

    return cardEl;
  }
}

const formEl = document.querySelector("#wallForm");
function formSubmit(e) {
  e.preventDefault();

  const wallData = {
    name: e.target.fullName.value,
    comment: e.target.comments.value,
    img: e.target.img.value,
    timestamp: new Date().getTime(),
  };

  wall.unshift(wallData);
  renderWall();
  postComments(wallData.name, wallData.comment);
  formEl.reset();
}
// 5. attach event listener to the form
formEl.addEventListener("submit", formSubmit);

function getDate(timeStamp) {
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
