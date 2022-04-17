const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
let direction = null; //direction has to be null? So it can change?
let x = 100; //current position for Link
let y = 250;

// Function to move the character
setInterval(function(){
    if(direction === 'west'){
        x = x -1
    }

    if(direction === 'north'){
        y = y + 1
    }

    if(direction === 'east'){
        x = x + 1
    }

    if(direction === 'south'){
        y = y -1
    }

    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 1) //calls moveCharacter function every millisecond

// When no keys are pressed, the character
//stays still
document.addEventListener('keyup', function(e){
    direction = null
})

// Click arrow keys for movement! "e" needed for checking
//which key was pressed. When keys are pressed, character moves.
document.addEventListener('keydown', function(e){
    //let user hold down key to keep movement happening
    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})


move(character).to(100, 250)


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)