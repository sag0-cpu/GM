// Sample data for players and their stats
const cards = [
  const cards = [
    { position: 'Pitcher', player: 'Chase McCoy', points: 21.64, ERA: 7.06, strikeouts: 14, winsPct: 1, WHIP: 1.708, salary: 900000}, 
    { position: 'Pitcher', player: 'Grant Navarro', points: 22.03, ERA: 3.35, strikeouts: 18, winsPct: 0.667, WHIP: 1.161, salary: 900000},
    { position: 'Pitcher', player: 'Mason Pierce', points: 22.66, ERA: 4.3, strikeouts: 48, winsPct: 0.7, WHIP: 1.447, salary: 2500000},
    { position: 'Pitcher', player: 'Dylan Carter', points: 19.31, ERA: 27, strikeouts: 2, winsPct: 0, WHIP: 3, salary: 900000}, 
    { position: 'Pitcher', player: 'Trent Ferguson', points: 21.52, ERA: 6.23, strikeouts: 7, winsPct: 0, WHIP: 1.615, salary: 900000},
    { position: 'Pitcher', player: 'Leo Rodriguez', points: 15.09, ERA: 5.7, strikeouts: 45, winsPct: 0.3, WHIP: 1.75, salary: 900000}, 
    { position: 'Pitcher', player: 'Colton Wells', points: 24.821, ERA: 3.04, strikeouts: 133, winsPct: 0.462, WHIP: 1.048, salary: 1500000},
    { position: 'Pitcher', player: 'Blake Dawson', points: 21.8, ERA: 4.24, strikeouts: 10, winsPct: 0, WHIP: 1.35, salary:  900000},
    { position: 'Pitcher', player: 'Evan Hamilton', points: 21.08, ERA: 9, strikeouts: 32, winsPct: 0.556, WHIP: 2.5, salary:  900000}, 
    { position: 'Pitcher', player: 'Nolan Sinclair', points: 21.99, ERA: 2.83, strikeouts: 106, winsPct: 0.35, WHIP: 1.05, salary: 4500000},

    { position: 'Catcher', player: 'Jake Callahan', points: 3.826, OBP: 0.306, BA: 0.259, HR: 10, RBI: 39, SLG: 0.434, salary: 7652000},
    { position: 'Catcher', player: 'Wyatt Harper', points: 3.593, OBP: 0.293, BA: 0.245, HR: 8, RBI: 50, SLG: 0.353, salary: 7186000},
    { position: 'Catcher', player: 'Logan Ramirez', points: 6.958, OBP: 0.408, BA: 0.33, HR: 23, RBI: 58, SLG: 0.578, salary: 13916000},
    { position: 'Catcher', player: 'Tyler Brooks', points: 4.511, OBP: 0.291, BA: 0.211, HR: 17, RBI: 48, SLG: 0.411, salary: 9022000},
    { position: 'Catcher', player: 'Griffin Hayes', points: 1.137, OBP: 0.337, BA: 0.278, HR: 3, RBI: 10, SLG: 0.506, salary: 2274000},
    { position: 'Catcher', player: 'Austin Reed', points: 2.021, OBP: 0.371, BA: 0.264, HR: 6, RBI: 18, SLG: 0.479, salary: 4042000},
    { position: 'Catcher', player: 'Ryder Jennings', points: 1.361, OBP: 0.345, BA: 0.275, HR: 12, RBI: 45, SLG: 0.450, salary: },
    { position: 'Catcher', player: 'Colt Simmons', points: 1.231, OBP: 0.360, BA: 0.280, HR: 15, RBI: 50, SLG: 0.470, salary: },
    { position: 'Catcher', player: 'Eli Mercer', points: 1.325, OBP: 0.345, BA: 0.275, HR: 12, RBI: 45, SLG: 0.450, salary: },
    { position: 'Catcher', player: 'Max Thornton', points: 6.027, OBP: 0.360, BA: 0.280, HR: 15, RBI: 50, SLG: 0.470, salary: },
  
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
    const positions = ['Pitcher', 'Catcher', '1B', '2B', '3B', 'SS'];  // Updated positions list
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
                ${card.RBI ? `<p
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
