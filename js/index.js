

const ch = e =>{

}



  function addElement() {

    let butts = document.getElementsByTagName('button')
    let inp = document.getElementById('inp')
    var main = document.querySelector('.main')
    var newDiv = document.createElement("p");
    var newBtn = document.createElement('button')
    newBtn.className = 'delete'
    newDiv.className = 'unchecked'
        newDiv.innerHTML = inp.value;
        newBtn.innerHTML = 'X'
        newBtn.style.marginLeft = '3px'
       newBtn.addEventListener('click',(e) =>{
        newDiv.style.display = 'none'
       })
   

    newDiv.appendChild(newBtn)
    main.appendChild(newDiv)
  }
window.onload = () =>{
   
}

function hidefunc (p){

var ps = document.getElementsByTagName('p')
ps[p].style.display  = 'none'
}

const deletefunc = () =>{
  var pars = document.getElementsByTagName('p')
  var butts = document.getElementsByTagName('button')
  console.log(butts)
  butts[0].onclick = hidefunc(0)
  
}

const submittitle = () =>{
  
    let textNode = document.createTextNode('gonvo')
    var  newP = document.createElement('p')
    newP.innerHTML = '<p>Govno</p>';


  
}
document.addEventListener('keyup', function(event){
    if (event.which == 13){
        addElement()
        
    }
  })

const you = () =>{
    var butts  = document.getElementsByTagName('button')
    butts[0].textContent = 'y'
}

