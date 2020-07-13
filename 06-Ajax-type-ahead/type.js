const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));
  //spread the array when using push function


function findMatches(wordToMatch, cities){
  return cities.filter(place=>{
    //here we can check if the word user input is match with array
    const regex = new RegExp(wordToMatch,'gi'); //g -> global i->case insensitive
    return place.city.match(regex) || place.state.match(regex);
  })
};

function numberWithCommas(x){
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

function displayMatches(){
  const matchArray = findMatches(this.value,cities); //this.value is the input you got from user
  const html = matchArray.map(place=>{
    //replace the city name value with the new format first
    const regex = new RegExp(this.value,'gi');
    const cityName = place.city.replace(regex,`<span class="h1">${this.value}</span>`);
    const stateName = place.state.replace(regex,`<span class="h1">${this.value}</span>` )
    return `
    <li>
    <span class="name">${cityName}, ${stateName}</span>
    <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `;
  }).join(''); //turn the array into string
  searchOutput.innerHTML = html;
};

const searchInput = document.querySelector('.search');
const searchOutput = document.querySelector('.suggestions');

searchInput.addEventListener('change',displayMatches);
//listen to click outside of the box
searchInput.addEventListener('keyup',displayMatches);
//listen to keyboard key up
