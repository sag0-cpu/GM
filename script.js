const cards = [
    { position: 'Pitcher', player: 'Player A', points: 10 },
    { position: 'Pitcher', player: 'Player B', points: 12 },
    { position: 'Catcher', player: 'Player C', points: 8 },
    { position: 'Catcher', player: 'Player D', points: 9 },
    { position: '1B', player: 'Player E', points: 15 },
    { position: '1B', player: 'Player F', points: 14 },
    { position: '2B', player: 'Player G', points: 13 },
    { position: '2B', player: 'Player H', points: 16 },
    { position: '3B', player: 'Player I', points: 11 },
    { position: '3B', player: 'Player J', points: 17 },
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
