import { StreakItem } from "./interfaces/taskInterface";
const addBtn = document.getElementById("addBtn") as HTMLParagraphElement;
const closeBtn = document.getElementById("closeBtn") as HTMLParagraphElement;
const watch = document.getElementById("watch") as HTMLDivElement;
const form = document.getElementById("form") as HTMLDivElement;
const divOne = document.getElementById("divOne") as HTMLDivElement;
const cards = document.getElementById("cards") as HTMLDivElement;
const streaksH2 = document.getElementById("streaksH2") as HTMLHeadingElement;
const popup = document.getElementById("popup") as HTMLDivElement;
const modal = document.getElementById("modal") as HTMLDivElement;
const streakcard = document.querySelector(".streakcard") as HTMLDivElement;
const divtwo = document.querySelector(".divTwo") as HTMLDivElement;
const submitButton = document.querySelector(
  ".submitButton"
) as HTMLButtonElement;
const nameInput = document.querySelector(".name") as HTMLInputElement;
const imageInput = document.querySelector(".image") as HTMLInputElement;
const dateInput = document.querySelector(".date") as HTMLInputElement;
const h2 = document.querySelector("h2") as HTMLHeadingElement;
interface Streak {
  name: string;
  image: string;
  date: string;
}
modal.style.display = "none";
class Streaks {
  private myStreak: Streak[] = [];
  constructor() {}

  createStreak(all: Streak) {
    this.myStreak.push(all);
    this.displayStreak();
  }
  displayStreak() {
    streakcard.innerHTML = "";
    this.myStreak.map((item, index) => {
      const mainDiv = document.createElement("div");
      const p = document.createElement("p");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");

      p.innerHTML = item.name;
      p1.innerHTML = item.image;
      p2.innerHTML = item.date;

      mainDiv.appendChild(p);
      mainDiv.appendChild(p1);
      mainDiv.appendChild(p2);

      console.log(item.name);

      streakcard.append(mainDiv);
      streakcard.style.display = "flex";
      streakcard.style.gap = "15px";
      mainDiv.className = "card";

      mainDiv.addEventListener("click", () => {
        modal.style.display = "block";
        this.displayOne(index);
      });
    });
  }
  displayOne(index: number) {
    modal.innerHTML=""
    let onestreak = this.myStreak[index];
    const Div = document.createElement("div");
    const p = document.createElement("p");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const btn2 = document.createElement("button");
    btn2.textContent = "close";
    const btn1 = document.createElement("button");
    btn1.textContent = "delete";

    p.innerHTML = onestreak.name;
    p1.innerHTML = onestreak.image;
    p2.innerHTML = onestreak.date;

    Div.appendChild(p);
    Div.appendChild(p1);
    Div.appendChild(p2);
    Div.appendChild(btn2);
    Div.appendChild(btn1);
    console.log(onestreak.name);

    modal.append(Div);
    streakcard.style.display = "flex";
    streakcard.style.gap = "15px";
    Div.className = "card";
    btn2.addEventListener("click", () => {
      modal.style.display = "none";
    });
    btn1.addEventListener("click", () => {
      handledelete(index);
      modal.style.display = "none";
    });
  }
  deleteStreak(id: number) {
    this.myStreak.splice(id, 1);
    this.displayStreak();
  }
}

class TimeDifference {
  static start() {
    // timedifference.start
  }
}
// instances
const streaksinstance = new Streaks();
// add event listener
divtwo.style.display = "none";
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  divtwo.style.display = "block";
  divOne.style.display = "none";
  divtwo.style.display = "flex";
});
closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  divtwo.style.display = "none";
  divOne.style.display = "block";
  divOne.style.display = "flex";
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    nameInput.value === "" ||
    imageInput.value === "" ||
    dateInput.value === ""
  ) {
    nameInput.style.border = "1px solid red";
    imageInput.style.border = "1px solid red";
    dateInput.style.border = "1px solid red";
    h2.textContent = "Please Add A task";
    h2.style.color = "red";
  } else {
    const name = nameInput.value;
    const image = imageInput.value;
    const date = dateInput.value;
    nameInput.value = "";
    imageInput.value = "";
    dateInput.value = "";
    streaksinstance.createStreak({ name, image, date });
    nameInput.style.border = "1px solid black";
    imageInput.style.border = "red 1px black";
    dateInput.style.border = "1px solid black";
    h2.textContent = "Task added";
    h2.style.color = "green";
  }
});

const handledelete = (index: number) => {
  streaksinstance.deleteStreak(index);
};
