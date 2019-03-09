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
document.querySelector('button').addEventListener('click',function(event){
    event.target.textContent="The button was Clicked"
})