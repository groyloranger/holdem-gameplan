// @flow
import type PlayerList from '../components/Table';
import type PlProps from '../components/Player';

function activePlayerKey(players: PlayerList) {
  let pl = ''; // ensure initialisation (but there should always be an active player)
  Object.keys(players).forEach((key) => {
    const { active } = players[key];
    if (active) { pl = key; }
  });
  return pl;
}

function currentBet(players: PlayerList) {
  let currBet = 0;
  Object.keys(players).forEach((key) => {
    const { bet } = players[key];
    currBet = ((bet > currBet) ? bet : currBet);
  });
  return currBet;
}

function replacePlayer(players: PlayerList, player: PlProps, key: string) {
  const copy = players;
  copy[key] = player;
  return copy;
}

function fold(players: PlayerList) {
  // Grab active player
  const key = activePlayerKey(players);
  const p = players[key];

  // Fold
  p.folded = true;

  return replacePlayer(players, p, key);
}

function call(players: PlayerList) {
  // Grab active player
  const key = activePlayerKey(players);
  const p = players[key];

  // Call for 'amount'
  const amount = currentBet(players) - p.bet;
  p.bet += amount;
  p.stack -= amount;

  return replacePlayer(players, p, key);
}

export { activePlayerKey, fold, call };
