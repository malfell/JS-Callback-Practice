function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom){
        let direction = null; //direction has to be null? So it can change?
        let x = left; //current position for thing
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        // Function to move the element
        function moveCharacter(){
            if(direction === 'west'){
                x-=1
            }

            if(direction === 'north'){
                y+=1
            }

            if(direction === 'east'){
                x+=1
            }

            if(direction === 'south'){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        //calls move function every millisecond
        setInterval(moveCharacter, 1)

        // Click arrow keys for movement! "e" needed for checking
        //which key was pressed. When keys are pressed, element moves.
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

        // When no keys are pressed, the thing
        //stays still
        document.addEventListener('keyup', function(e){
            direction = null

        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}