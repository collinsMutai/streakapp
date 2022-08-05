const addBtn = document.getElementById("addBtn");
// const closeBtn = document.getElementById("closeBtn") as HTMLParagraphElement;
const watch = document.getElementById("watch");
const form = document.getElementById("form");
const divOne = document.getElementById("divOne");
const cards = document.getElementById("cards");
const streaksH2 = document.getElementById("streaksH2");
const popup = document.getElementById("popup");
const modal = document.getElementById("modal");
const card = document.getElementById("card");
// const deleteBtn = document.getElementById("deleteBtn") as HTMLParagraphElement;
// const cardId = document.getElementById('cardId') as HTMLDivElement;
class Toggler {
    constructor() {
        this.streaks = [];
        this.displayStreak();
    }
    newStreak(streak) {
        if (streak) {
            streaksH2.textContent = "New Activities";
        }
        // console.log(streak);
        this.streaks.push(streak);
        this.displayStreak();
    }
    getId(id) {
        return this.streaks.find((element, index) => index === id);
    }
    displayStreak() {
        const cardsHtml = this.streaks
            .map((streak, index) => {
            let cardHtml = `
      <div id="cardId"  class="card">
      <p>${streak.image}</p>
      <p>${streak.date}</p>
      <p>${streak.name}</p>
        
    </div>`;
            // deleteBtn.addEventListener("click", () => {
            //   handleDeleted(index);
            // });
            cards.addEventListener("click", () => {
                this.modalTask(index);
            });
            // closeBtn.addEventListener("click", () => {
            //   modal.style.display = "none";
            // });
            return cardHtml;
        })
            .join("");
        cards.innerHTML = cardsHtml;
    }
    display() {
        let value = true;
        let watchHtml1 = ` <img src="./images/watch.png" alt="" />`;
        let watchHtml2 = `<h1>Welcome to My Streak Counter</h1>`;
        let watchHtml = `<ion-icon class="listOutline" name="list-outline"></ion-icon>
<p>Add A Todo Here</p>`;
        let formHtml = `<h2>Please Add A task</h2>
<form action="">
    <label for="tname">Task Name</label>
    <input type="text" id="name" name="tname">
    <label for="image">Image</label>
    <input type="text" id="image" name="image">
    <label for="tname">Start Date</label>
    <input type="date" id="date" name="date">
    <button id="submit" type="submit">Add Task</button>
</form>`;
        let closeIcon = ` <ion-icon name="close-circle-outline"></ion-icon>`;
        let addIcon = ` <ion-icon name="add-circle-outline"></ion-icon>`;
        addFunc();
        addBtn.addEventListener("click", (e) => {
            e.preventDefault();
            value = !value;
            addFunc();
        });
        function addFunc() {
            if (!value) {
                watch.innerHTML = watchHtml;
                form.innerHTML = formHtml;
                addBtn.innerHTML = closeIcon;
                const submit = document.getElementById("submit");
                submit.addEventListener("click", (e) => {
                    e.preventDefault();
                    const name = document.getElementById("name");
                    const image = document.getElementById("image");
                    const date = document.getElementById("date");
                    let streak = {
                        name: name.value,
                        image: image.value,
                        date: date.value,
                    };
                    name.value = "";
                    image.value = "";
                    date.value = "";
                    addStreak(streak);
                });
            }
            else {
                watch.innerHTML = watchHtml1;
                form.innerHTML = watchHtml2;
                addBtn.innerHTML = addIcon;
            }
        }
    }
    modalTask(i) {
        const taskk = this.streaks[i];
        const section = document.createElement("div");
        card.innerHTML = "";
        const imagestreak = document.createElement("p");
        const namestreak = document.createElement("p");
        const datestreak = document.createElement("p");
        const closeBtn = document.createElement("button");
        closeBtn.className = "redBtn";
        closeBtn.id = "closeBtn";
        closeBtn.textContent = "close";
        const deleteBtn = document.createElement("button");
        const divButton = document.createElement("div");
        divButton.className = "buttons";
        deleteBtn.className = "greyBtn";
        deleteBtn.id = "deleteBtn";
        deleteBtn.textContent = "delete";
        imagestreak.innerHTML = taskk.image;
        namestreak.textContent = taskk.name;
        datestreak.textContent = taskk.date;
        divButton.append(closeBtn, deleteBtn);
        section.appendChild(imagestreak);
        section.appendChild(namestreak);
        section.appendChild(datestreak);
        section.appendChild(divButton);
        // section.appendChild(deleteBtn)
        card.append(section);
        modal.style.display = "block";
        console.log(section);
        closeBtn.addEventListener("click", () => {
            handlePopUp();
        });
        deleteBtn.addEventListener("click", () => {
            handleDeleted(i);
            modal.style.display = "none";
        });
    }
}
class CalculateTime extends Toggler {
    // public startDate:string;
    constructor() {
        super();
        // this.startDate = start
    }
}
class ModalDeleteClose extends Toggler {
    constructor() {
        super();
    }
    deletedStreak(id) {
        const item = this.getId(id);
        this.streaks.splice(id, 1);
        console.log("delete", id);
        this.displayStreak();
        this.display();
    }
}
const handleModal = new ModalDeleteClose();
const toggle = new Toggler();
toggle.display();
function addStreak(streak) {
    toggle.newStreak(streak);
}
function handleDeleted(taskkIndex) {
    handleModal.deletedStreak(taskkIndex);
}
function handlePopUp() {
    modal.style.display = "none";
}
export {};
