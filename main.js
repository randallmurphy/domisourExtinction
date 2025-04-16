
const messWithMe = document.querySelector('.mess-with-me');
      messWithMe.style.fontSize = '40px';
      messWithMe.style.backgroundColor = 'green';
      messWithMe.addEventListener('click',()=>{
      messWithMe.style.backgroundColor = 'orange';
      })

const hideMe = document.querySelector('#hide-me');
      hideMe.style.visibility = 'hidden';

const triCeratops = document.querySelector('#triceratops');
      triCeratops.style.width = '324px'; 
      triCeratops.addEventListener('click',()=>{
      triCeratops.style.border = '5px solid red';
        console.log('Triceratops clicked red border added!');
        });

const featherDino = document.querySelector('#feathers');
      featherDino.addEventListener('click',()=>{
      featherDino.style.opacity = '0.5';
        console.log('Feather Dino clicked!');
      });

const toggle = document.querySelector('#toggle');
      toggle.addEventListener('click',()=>{
      const dinoRow = document.querySelector('#row');
            dinoRow.style.backgroundColor = 'pink';
            console.log('button clicked background color changed to pink');
      });

      

