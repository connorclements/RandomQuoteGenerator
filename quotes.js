
var adjective1 = [
    'frail', 'absurd', 'sweet', 'shrill', 'ultra', 'broad', 'fabulous', 'hungry', 'large', 'classy'
];

var adjective2 = [
    'female', 'male', 'mature', 'old', 'young', 'vague', 'puny', 'enchanting', 'puzzled', 'psychedelic'
];

var noun = [
    'horse', 'man', 'woman', 'baby', 'elephant', 'squirrel', 'squad', 'dog', 'cat', 'farmer'
];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * 11);
    document.getElementById('quoteDisplay').innerHTML = `Look at that ${adjective1[randomNumber]} ${adjective2[randomNumber]} ${noun[randomNumber]}`;
}

