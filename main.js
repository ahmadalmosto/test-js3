
import { houseIdList } from "./data.js";

const random_item = (item) => {
  return item[Math.floor(Math.random() * item.length)];
};

const loadHousesNamesAndCurrentLord = (id) => {
  fetch(`https://anapioficeandfire.com/api/houses/${id}`)
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      response.json().then(function (data) {
        if (data.currentLord) {
          fetch(`${data.currentLord}`)
            .then((resp) => resp.json())
            .then((res) => {

              const div = document.createElement("div");

              div.classList.add("got-house");

              const h1 = document.createElement("h1");
              h1.classList.add("got-house__title");
              const nameOfHouse = document.createTextNode(data.name);
              h1.appendChild(nameOfHouse);

              div.appendChild(h1);

              const span = document.createElement("span");
              span.classList.add("got-house__current-lord");
              span.setAttribute("id", `${id}`);
              const lordName = document.createTextNode(res.name);
              span.appendChild(lordName);

              div.appendChild(span);

              const element = document.getElementById("got-house-list");
              element.appendChild(div);
            });
        } else {
          const div = document.createElement("div");
          div.classList.add("got-house");
          
          const h1 = document.createElement("h1");
          h1.classList.add("got-house__title");
          const nameOfHouse = document.createTextNode(data.name);
          h1.appendChild(nameOfHouse);
          div.appendChild(h1);
          
          const span = document.createElement("span");
          span.classList.add("got-house__current-lord");
          span.setAttribute("id", `${id}`);
          const lordName = document.createTextNode("none");
          
          span.appendChild(lordName);
          
          div.appendChild(span);
          const element = document.getElementById("got-house-list");
          element.appendChild(div);
        }

      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
};

const changeLord = (id) => {
  fetch(`https://anapioficeandfire.com/api/houses/${id}`)
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      response.json().then(function (data) {
        const randomSworn = random_item(data.swornMembers);

        fetch(`${randomSworn}`)
          .then((resp) => resp.json())
          .then((res) => {
            const randomSwornName = res.name;
            document.getElementById(`${id}`).innerText = randomSwornName;
          });

      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
};

houseIdList.forEach((id) => {
    loadHousesNamesAndCurrentLord(id);
});

///https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
function filterInt(value) {
  if (/^[-+]?(\d+|Infinity)$/.test(value)) {
    return Number(value);
  } else {
    return NaN;
  }
}

document
  .getElementById("kill-random-lord-button")
  .addEventListener("click", function () {
    const randomHouse = random_item(houseIdList);
    changeLord(randomHouse);
  });
