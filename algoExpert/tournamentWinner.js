//[homeTeam, awayTeam]
const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

//result[i] denotes winner of competition[i]
//1 = win for home 0 = win for away
const results = [0, 0, 1];

function tournamentWinner(competitions, results) {
  let teamScore = {};

  for (let i = 0; i < competitions.length; i++) {
    //take element of teams
    if (results[i] === 1) {
      // key + 3 is if exists || 3 is if not exist
      teamScore[competitions[i][0]] = teamScore[competitions[i][0]] + 3 || 3;
    }
    if (results[i] === 0) {
      teamScore[competitions[i][1]] = teamScore[competitions[i][1]] + 3 || 3;
    }
  }
  let max = 0;
  let name = "";
  for (let team in teamScore) {
    if (teamScore[team] > max) {
      max = teamScore[team];
      name = team;
    }
  }

  return name;
}

const winner = tournamentWinner(competitions, results);
console.log(winner);
