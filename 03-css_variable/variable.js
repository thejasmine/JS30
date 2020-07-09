const inputs = document.querySelectorAll('.controls input')
// console.log(inputs)
// #return a node list, it is not an array

function handleUpdate() {
  console.log(this.value);
  const suffix = this.dataset.sizing || '';
  console.log(suffix);
  // contain data attr from that element
  console.log(this.name);
  // we have set property name for input attr

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
