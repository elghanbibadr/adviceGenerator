// adding the variabels from the html document
let idOfAdvice=document.querySelector('.idNumber');
let adviceContent=document.querySelector('.advice__content');

// ² we need to fetch the api url and take the advice and its id

function generateAdvice(){
  let slip_id= randomIntFromInterval(100);
    fetch(`https://api.adviceslip.com/advice/${slip_id}`)
    .then(response=>response.json())
    .then(data=>{
        // destructe the data object and get  the content of the current advice
        let {slip : {advice}}=data;

        // update the dom depending on the advice content and id
       if (!advice)return;
         idOfAdvice.textContent=slip_id;
         adviceContent.textContent=advice;
    })
}

function randomIntFromInterval( max) { // min and max included 
    return Math.floor(Math.random() * (max ) +1)
  }

 generateAdvice(); 

