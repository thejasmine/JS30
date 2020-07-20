const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

//store the last select into a variable
let lastChecked;


function handleCheck(e){
  //check if you have shift key down
  //check that they are checking it
  console.log(e);
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead to do what we do
    //loop over every checkbox
    //1. find the first one is checked
    //2. and checked the following
    //3. and then find the last one checked and end the loop;
    checkboxes.forEach(checkbox=> {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
        console.log('starting to check and in between');
      }

      if(inBetween) {
        checkbox.checked = true;
      }
    });

  };
  lastChecked = this;
};

checkboxes.forEach(checkbox=>checkbox.addEventListener('click', handleCheck));
