const accordions = document.querySelectorAll(".accordian");
console.log(accordions);
accordions.forEach((currVal) => {
  const icon = currVal.querySelector(".icon");
  console.log(icon);
  const answer = currVal.querySelector(".answer");
  console.log(answer);
  currVal.addEventListener("click", () => {
    answer.classList.toggle("active");
    icon.classList.toggle("ri-subtract-line");
  });
});
