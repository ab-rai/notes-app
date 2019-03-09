const notes=[{
    title:'My next trip',
    body:'I would like to go to Switzerland'
},{
    title:'Habbits to work on',
    body:'Exercise,eating a bit better'
},{
    title:'Room modification',
    body:'Change to the 1st floor room'
}]
const ps=document.querySelectorAll('p')
ps.forEach(function(p){
    p.textContent='#$$$$$$$$$$$$$$#'
})
const newPara=document.createElement('p')
newPara.textContent='123This is a new element from JavaScript'
document.querySelector('body').appendChild(newPara)