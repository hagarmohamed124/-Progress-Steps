const shapes = document.querySelectorAll(".shape"),
  Bar = document.querySelectorAll(".bar"),
  buttons = document.querySelectorAll("button");

let currentStep = 1;

const updateSteps = (e) => {
  currentStep = e.target.id === "Next" ? ++currentStep : --currentStep;
  shapes.forEach((shape, index) => {
    shape.classList[`${index < currentStep ? "add" : "remove"}`]("on");
  });


  Bar.style.width = `${((currentStep - 1) / (shapes.length -1 )) * 100}%`;
  
  if(currentStep === shapes.length){
    buttons[1].disabled = true;
  } 
  else if(currentStep === 1){
    buttons[0].disabled = true;
  }
  else{
    buttons.forEach((button) => (button.disabled = false));
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", updateSteps);
});

