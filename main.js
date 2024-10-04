const deck = document.getElementById('deck')
const liardeck = document.getElementById('liardeck')
const player = document.getElementById('player')
const admin = document.getElementById('admin')
const playerview = document.getElementById('playerview')
const adminview = document.getElementById('adminview')
const currenttable = document.getElementById('currenttable')
const reroll = document.getElementById('reroll')
const popup = document.getElementById('popup')
const revolver = document.getElementById('revolver')
const fire = document.getElementById('fire')
const restart = document.getElementById('restart')

let check
let bullets = [
    'rev1.png',
    'rev2.png',
    'rev3.png',
    'rev4.png',
    'rev5.png',
    'rev6.png',
    'skull.png'
]
let bulletCount = 0
var body = document.getElementsByTagName('body')[0]

deck.addEventListener('click', function(){
    deck.classList.add('hide')
    liardeck.classList.remove('hide')
})
player.addEventListener('click', function(){
    player.classList.add('hide')
    admin.classList.add('hide')
    playerview.classList.remove('hide')
    body.style.backgroundImage = ('url(povpig.png)')
    revolver.src = bullets[bulletCount]
})
admin.addEventListener('click', function(){
    player.classList.add('hide')
    admin.classList.add('hide')
    currenttable.classList.add('title2')
    adminview.classList.remove('hide')
    currenttable.innerHTML = pickTable()
})
reroll.addEventListener('click', function(){
    currenttable.innerHTML = pickTable()
    popup.classList.remove('hide')
    clearTimeout(check)
    check = setTimeout(function(){
        popup.classList.add('hide')
    }, 15000)
})
fire.addEventListener('click', function(){
    revolver.src = 'spin.gif'
    clearTimeout(check)
    check = setTimeout(function(){
        shoot()
    }, 1650)
    
})
restart.addEventListener('click', function(){
    restart.classList.add('hide')
    fire.classList.remove('hide')
    bulletCount = 0
    revolver.src = bullets[bulletCount]
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function pickTable() {
    let cards = ["King's table", "Queen's table", "Ace's table"]
    let pickedCard = cards[getRandomInt(3)]
    return pickedCard
}

function shoot() {
    let ammo = 6 - bulletCount
    let number
    number = getRandomInt(ammo) + 1
    if (number === 1) {
        revolver.src = bullets[6]
        fire.classList.add('hide')
        restart.classList.remove('hide')
    } else {
        bulletCount += 1
        revolver.src = bullets[bulletCount]
        if (bulletCount === 6) {
            fire.classList.add('hide')
        }
    }
}