const content = [
  {
    id: 1,
    img: "./images/image-tanya.jpg",
    text: ` “ I’ve been interested in coding for a while but never taken the jump,
    until now. I couldn’t recommend this course enough. I’m now in the job
    of my dreams and so excited about the future. ”`,
    name: `Tanya Sinclair`,
    position: `UX Engineer`,
  },
  {
    id: 2,
    img: "./images/image-john.jpg",
    text: ` “ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`,
    name: ` John Tarkpor`,
    position: `Junior Front-end Developer`,
  },
];
const img = document.querySelector(".person-img");
const text = document.getElementById("text");
const name = document.getElementById("name");
const position = document.getElementById("position");

// buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});
function showPerson() {
  let item = content[currentItem];
  img.src = item.img;
  text.textContent = item.text;
  name.textContent = item.name;
  position.textContent = item.position;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > content.length - 1) {
    currentItem = 0;
  }
  const slide =  nextBtn.parentElement.parentElement.parentElement;
  slide.classList.add('slide');
  showPerson();
});
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = content.length - 1;
  }
  showPerson();
});
