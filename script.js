const cards = [
    { position: 'Pitcher', player: 'Chase McCoy', points: 21.64, ERA: 3.2, strikeouts: 150 },
    { position: 'Pitcher', player: 'Grant Navarro', points: 22.03, ERA: 2.8, strikeouts: 170 },
    { position: 'Pitcher', player: 'Mason Pierce', points: 22.66, ERA: 2.8, strikeouts: 170 },
    { position: 'Pitcher', player: 'Dylan Carter', points: 19.31, ERA: 2.8, strikeouts: 170 },
    { position: 'Pitcher', player: 'Trent Ferguson', points: 21.52, ERA: 2.8, strikeouts: 170 },
    { position: 'Pitcher', player: 'Leo Rodriguez', points: 11.09, ERA: 2.8, strikeouts: 170 },
    { position: 'Pitcher', player: 'Colton Wells', points: 24.821, ERA: 2.8, strikeouts: 170 },
    { position: 'Pitcher', player: 'Blake Dawson', points: 21.8, ERA: 2.8, strikeouts: 170 },
    { position: 'Pitcher', player: 'Evan Hamilton', points: 21.08, ERA: 2.8, strikeouts: 170 },
    { position: 'Pitcher', player: 'Nolan Sinclair', points: 21.99, ERA: 2.8, strikeouts: 170 },
    
    { position: 'Catcher', player: 'Player C', points: 8, OBP: 0.345, BA: 0.275, HR: 12, RBI: 45, SLG: 0.450 },
    { position: 'Catcher', player: 'Player D', points: 9, OBP: 0.360, BA: 0.280, HR: 15, RBI: 50, SLG: 0.470 },
    { position: '1B', player: 'Player E', points: 15, OBP: 0.380, BA: 0.300, HR: 20, RBI: 70, SLG: 0.520 },
    { position: '1B', player: 'Player F', points: 14, OBP: 0.370, BA: 0.290, HR: 18, RBI: 65, SLG: 0.510 },
    { position: '2B', player: 'Player G', points: 13, OBP: 0.365, BA: 0.310, HR: 22, RBI: 60, SLG: 0.530 },
    { position: '2B', player: 'Player H', points: 16, OBP: 0.350, BA: 0.295, HR: 19, RBI: 55, SLG: 0.500 },
    { position: '3B', player: 'Player I', points: 11, OBP: 0.340, BA: 0.280, HR: 16, RBI: 48, SLG: 0.460 },
    { position: '3B', player: 'Player J', points: 17, OBP: 0.390, BA: 0.320, HR: 25, RBI: 80, SLG: 0.570 },
    { position: 'SS', player: 'Player K', points: 14, OBP: 0.375, BA: 0.300, HR: 18, RBI: 60, SLG: 0.510 },
    { position: 'SS', player: 'Player L', points: 16, OBP: 0.355, BA: 0.290, HR: 20, RBI: 65, SLG: 0.520 },
];


function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
}

function getRandomCardsForPosition(position, numCards) {
    const positionCards = cards.filter(card => card.position === position);
    shuffleArray(positionCards);
    return positionCards.slice(0, numCards);
}

function generateCards() {
    const container = document.getElementById('cards-container');
    const positions = ['Pitcher', 'Catcher', '1B', '2B', '3B'];
    const numCardsToShow = 5;

    positions.forEach(position => {
        const positionContainer = document.createElement('div');
        positionContainer.innerHTML = `<h2>Select a ${position}</h2>`;
        const positionCards = getRandomCardsForPosition(position, numCardsToShow);
        positionCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = `
                <p>Player: ${card.player}</p>
                <button onclick="selectCard('${card.player}', '${position}')">Select ${card.player}</button>
            `;
            positionContainer.appendChild(cardElement);
        });
        container.appendChild(positionContainer);
    });
}

let selectedPlayers = {};

function selectCard(player, position) {
    if (!selectedPlayers[position]) {
        selectedPlayers[position] = player;
    } else {
        alert(`You already selected a ${position}.`);
    }
}

function submitSelections() {
    const totalPoints = Object.keys(selectedPlayers).reduce((acc, position) => {
        const player = selectedPlayers[position];
        const card = cards.find(c => c.player === player);
        return acc + card.points;
    }, 0);
    displayRanking(totalPoints);
}

function displayRanking(totalPoints) {
    const ranking = document.getElementById('ranking');
    ranking.innerHTML = `Your team's total points (hidden): ${totalPoints}.`;
}

generateCards();
