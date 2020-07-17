const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }
    //select html tag > break on > second one > you can see JS casue the effect

    // Regular
    console.log('hello');

    // Interpolated
    console.log('hello'+'jasmine')

    // Styled
    //put %c in front of the text, second argument would be style
    console.log('%c I am some great text','font-size:50px; background:red;');

    // warning!
    console.warn('no')

    // Error :|
    console.error('bad')

    // Info
    console.info('fun fact')

    // Testing
    //first argument is the condition you want to test, if the condtion is false, woudl fire the second argement
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'),'that is wrong');

    // clearing
    console.clear();

    // Viewing DOM Elements
    //console.dir -> you can check all the list
    console.log(p);
    console.dir(p);

    console.clear()

    // Grouping together
    dogs.forEach(dog => {
      // console.groupCollapsed(`${dog.name}`);
      console.group(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.groupEnd(`${dog.name}`);
    })


    // counting
    console.count('wes');
    console.count('wes');
    console.count('wes');
    console.count('jasmine')

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
     .then(data=> data.json())
     .then(data =>{
      console.timeEnd('fetching data');
      console.log(data);
     });

     console.table(dogs)
