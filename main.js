
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

let toggleColor = 'white';
const toggle = document.querySelector('#toggle');
const dinoRow = document.querySelector('#row');      
      toggle.addEventListener('click',()=>{
        if(toggleColor === 'white'){
            
            dinoRow.style.backgroundColor = 'pink';
            toggleColor = 'pink';
            console.log('button clicked background color changed to pink');
        }else{
            dinoRow.style.backgroundColor = 'white';
            toggleColor = 'white';
            console.log('button clicked background color changed back to white'); 
        }
      
      });

const bigDino = document.querySelector('#biggify');
      bigDino.addEventListener('mouseover',()=>{
      bigDino.style.width = '200px';
      console.log('big dino is hovered and width increased to 200 px')
      })
      bigDino.addEventListener('mouseout',()=>{
            bigDino.style.width = '100px'
      });

