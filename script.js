const numberCounter = document.querySelector(".number-counter");
const saveText = document.querySelector(".save-text");

let count = 0;

function increment()  {

  count = count + 1;
  // or we can use the short form to define the count using += (count += 1)
  numberCounter.textContent = count;

};

function save() {

  let countStr = count + " - ";
    saveText.textContent += countStr;
      numberCounter.textContent = 0;
        count = 0;

};






