const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById("list-container")
const button = document.querySelector('button')


button.addEventListener('click', addTask)




function addTask(){

   

    if(inputBox.value!== ''){

        let li = document.createElement('li')
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span);
        
    }
    else{
        alert('you must write something')
      }
    inputBox.value=""
    saveData();

}


listContainer.addEventListener('click', function(e){

    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData();

    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        saveData();
    }


},false)

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem('data')
}
showTask();



// code for particles.js
window.
onload
= function() {
  Particles.
init
({
    selector: 
'.background',
 sizeVariations: 7,
 connectParticles: true
,
 color: '#18dcff',
 speed: 0.5
  },
  )
  

}