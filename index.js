//variables
let quote=document.querySelector('.quote')
let person=document.querySelector('.person')
let buttons=document.querySelector('.buttons')

const quotes=[
    {
        quote:`"The only way to do great work is to love what you do."`,
        person:` Steve Jobs`
    },
    {
    quote:`"It does not matter how slowly you go as long as you do not stop."`,
    person:`Confucius`
    },
    {
        quote:`"Do what you can, with what you have, where you are."`,
        person:`Theodore Roosevelt`
    },

    {
        quote:`"To improve is to change; to be perfect is to change often."`,
        person:`Winston Churchill`

    },
    {
    quote:`"Everything you can imagine is real."`,
    person:`Pablo Picasso`
    },
    {
        quote:`"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."`,
        person:`Gautam Buddha`
    },
    {
        quote:`"In the middle of every difficulty lies opportunity."`,
        person:`Albert Einstein`
    },
    {
        quote:`"Happiness depends upon ourselves."`,
        person:`Aristotle`

    },
    {
        quote:`"Believe you can and you're halfway there."`,
        person:`Theodore Roosevelt`
    },
    {
        quote:`"Do one thing every day that scares you."`,
        person:`Eleanor Roosevelt`
    },

    {
        quote:`"You miss 100% of the shots you don’t take."`,
        person:`Wayne Gretzky`
    },
    {
        quote:`"We are what we repeatedly do. Excellence, then, is not an act, but a habit."`,
        person:`Aristotle`
    },
    {
        quote:`"Courage is not having the strength to go on; it is going on when you don't have the strength."`,
        person:`Theodore Roosevelt`
    }
]


buttons.addEventListener('click', function(){
    let random=Math.floor(Math.random()*quotes.length)
    quote.innerText=quotes[random].quote
    person.innerText=quotes[random].person
})