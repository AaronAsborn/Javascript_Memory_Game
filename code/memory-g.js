document.addEventListener('DOMContentLoaded', ()=>{

    //card options

    const cardArray = [
        {
            name : 'BMW',
            img : '../images/BMW.png'
        },

        {
            name : 'BMW',
            img : '../images/BMW.png'
        },

        {
            name : 'chevrolet',
            img : '../images/chevrolet.png'
        },

        {
            name : 'chevrolet',
            img : '../images/chevrolet.png'
        },

        {
            name : 'lambo',
            img : '../images/lambo.png'
        },

        {
            name : 'lambo',
            img : '../images/lambo.png'
        },

        {
            name : 'Muscle',
            img : '../images/Muscle.png'
        },

        {
            name : 'Muscle',
            img : '../images/Muscle.png'
        },

        {
            name : 'Pontiac',
            img : '../images/Pontiac.png'
        },

        {
            name : 'Pontiac',
            img : '../images/Pontiac.png'
        },

        {
            name : 'Sportscar',
            img : '../images/Sportscar.png'
        },

        {
            name : 'Sportscar',
            img : '../images/Sportscar.png'
        },
    ];

    cardArray.sort(()=> 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //Game board

    function createBoard(){
        for ( let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', '../images/Cars-pixar-7.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);

        }
        
    }

    
    //check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match !!');
            cards [optionOneId].setAttribute('src', '../images/Cars-pixar-4.png');
            cards [optionTwoId].setAttribute('src', '../images/Cars-pixar-4.png');
            cardsWon.push(cardsChosen);
        } else {
            cards [optionOneId].setAttribute('src', '../images/Cars-pixar-7.png');
            cards [optionTwoId].setAttribute('src', '../images/Cars-pixar-7.png');
            alert('Sorry,try again !');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! you found them all!!'
        }
    }
    

    // flip your card
    function flipcard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    // console.log(typeof cards);
    // console.dir(cards);

    createBoard();
})





// console.log('cardId');