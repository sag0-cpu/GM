// Sample data for players and their stats
const cards = [
    { position: 'Pitcher', player: 'Chase McCoy', points: 21.64, ERA: 7.06, strikeouts: 14, winsPct: 1, WHIP: 1.708, salary: 900000 }, 
    { position: 'Pitcher', player: 'Grant Navarro', points: 22.03, ERA: 3.35, strikeouts: 18, winsPct: 0.667, WHIP: 1.161, salary: 900000 },
    { position: 'Pitcher', player: 'Mason Pierce', points: 22.66, ERA: 4.3, strikeouts: 48, winsPct: 0.7, WHIP: 1.447, salary: 2500000 },
    { position: 'Catcher', player: 'Player C', points: 8, OBP: 0.345, BA: 0.275, HR: 12, RBI: 45, SLG: 0.450 },
    { position: 'Catcher', player: 'Player D', points: 9, OBP: 0.360, BA: 0.280, HR: 15, RBI: 50, SLG: 0.470 },
    { position: '1B', player: 'Player E', points: 15, OBP: 0.380, BA: 0.300, HR: 20, RBI: 70, SLG: 0.520 },
    { position: 'SS', player: 'Player K', points: 14, OBP: 0.375, BA: 0.300, HR: 18, RBI: 60, SLG: 0.510 },
];

// Shuffle function for random selection
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
}

// Filter cards by position and return shuffled results
function getRandomCardsForPosition(position, numCards) {
    const positionCards = cards.filter(card => card.position === position);
    shuffleArray(positionCards);
    return positionCards.slice(0, numCards);
}

// Generate cards and display them on the page
function generateCards() {
    const container = document.getElementById('cards-container');
    const positions = ['Pitcher', 'Catcher', '1B', '2B', '3B', 'SS'];
    const numCardsToShow = 5;

    positions.forEach(position => {
        const positionContainer = document.createElement('div');
        positionContainer.innerHTML = `<h2>Select a ${position}</h2>`;
        const positionCards = getRandomCardsForPosition(position, numCardsToShow);
        positionCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = `
                <p><strong>Player:</strong> ${card.player}</p>
                <p><strong>Points:</strong> ${card.points}</p>
                ${card.ERA ? `<p><strong>ERA:</strong> ${card.ERA}</p>` : ''}
                ${card.strikeouts ? `<p><strong>Strikeouts:</strong> ${card.strikeouts}</p>` : ''}
                ${card.winsPct ? `<p><strong>Win %:</strong> ${card.winsPct}</p>` : ''}
                ${card.WHIP ? `<p><strong>WHIP:</strong> ${card.WHIP}</p>` : ''}
                ${card.OBP ? `<p><strong>OBP:</strong> ${card.OBP}</p>` : ''}
                ${card.BA ? `<p><strong>BA:</strong> ${card.BA}</p>` : ''}
                ${card.HR ? `<p><strong>HR:</strong> ${card.HR}</p>` : ''}
                ${card.RBI ? `<p><strong>RBI:</strong> ${card.RBI}</p>` : ''}
                ${card.SLG ? `<p><strong>SLG:</strong> ${card.SLG}</p>` : ''}
                <button onclick="selectCard('${card.player}', '${position}')">Select ${card.player}</button>
            `;
            positionContainer.appendChild(cardElement);
        });
        container.appendChild(positionContainer);
    });
}

let selectedPlayers = {};

// Function to handle card selection
function selectCard(player, position) {
    if (!selectedPlayers[position]) {
        selectedPlayers[position] = player;
    } else {
        alert(`You already selected a ${position}.`);
    }
}

// Submit selections and calculate total points
function submitSelections() {
    const totalPoints = Object.keys(selectedPlayers).reduce((acc, position) => {
        const player = selectedPlayers[position];
        const card = cards.find(c => c.player === player);
        return acc + card.points;
    }, 0);
    displayRanking(totalPoints);
}

// Display the total points after submission
function displayRanking(totalPoints) {
    const ranking = document.getElementById('ranking');
    ranking.innerHTML = `Your team's total points (hidden): ${totalPoints}.`;
}

generateCards(); // Generate cards on page load
