const panels = document.querySelectorAll('.panel');

function toggleOpen(){
  console.log("hello")
  this.classList.toggle('open')
  //toggle - if visible is set remove it, otherwise add it
};

function toggleActive(e){
  console.log(e.propertyName);
  //tell us what kind of transition
  //font size come from open class we added
  if(e.propertyName.includes('flex')){
   this.classList.toggle('open-active')
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
