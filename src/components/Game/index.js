import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Player from '../Player';


function Game() {
  const [playerCards, setPlayerCards] = useState([]);
  const [computerCards, setComputerCards] = useState([]);
  const [gameResult, setGameResult] = useState('');

  const playerDrawCard = () => {
    // Generate a random card value between 1 and 10
    const newCard = Math.floor(Math.random() * 10) + 1;

    // Add the new card to the player's hand
    setPlayerCards(prevCards => [...prevCards, newCard]);

    // If the player's total is over 25, the game ends and the computer wins
    const playerTotal = playerCards.reduce((a, b) => a + b, 0) + newCard;
    if (playerTotal > 25) {
      setGameResult("The computer wins");
    }
  };

const computerDrawCard = () => {
    // Now the computer draws cards until it either wins or loses
    let computerTotal = computerCards.reduce((a, b) => a + b, 0);
    while (computerTotal < 17) { // The computer stays if its total is 17 or higher
      const newCard = Math.floor(Math.random() * 10) + 1;
      setComputerCards(prevCards => [...prevCards, newCard]);
      computerTotal += newCard;
    }

    // If the computer's total is over 25, the game ends and the player wins
    if (computerTotal > 25) {
      setGameResult("The player wins 😊");
      return;
    }

    // If the player's total is 25 and the computer's total is less than 25, the game ends and the player wins
    const playerTotal = playerCards.reduce((a, b) => a + b, 0);
    if (playerTotal === 25 && computerTotal < 25) {
      setGameResult("The player wins 😊");
      return;
    }

    // If the player's total is over 25, the game ends and the computer wins
    if (playerTotal > 25) {
      setGameResult("The computer wins");
      return;
    }

    // If the total is the same, the player with more cards wins
    if (playerTotal === computerTotal) {
      if (playerCards.length > computerCards.length) {
        // The player wins
        setGameResult("The player wins 😊");
      } else if (playerCards.length < computerCards.length) {
        // The computer wins
        setGameResult("The computer wins");
      } else {
        // It's a tie
        setGameResult("It's a tie");
      }
    } else if (playerTotal > computerTotal) {
      // The player wins
      setGameResult("The player wins 😊");
    } else {
      // The computer wins
      setGameResult("The computer wins");
    }
  };

  const resetGame = () => {
    setPlayerCards([]);
    setComputerCards([]);
    setGameResult('');
  };

  return (
    <Grid container spacing={3} direction="column" justify="center" alignItems="center" style={{ marginTop: '50px' }}>
      <Grid item style={{ height: '50px' }}>
        <Typography variant="h6" data-testid="game-result">{gameResult}</Typography>
      </Grid>
      <Grid item>
        <Player cards={playerCards} playerType="Player" />
      </Grid>
      <Grid item>
        <Player cards={computerCards} playerType="Computer" />
      </Grid>
      <Grid item>
        <Grid container spacing={2} direction="row" >
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={playerDrawCard}
              disabled={playerCards.reduce((a, b) => a + b, 0) >= 25 || !!gameResult}
            >
              Draw Card for Player
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              onClick={computerDrawCard}
              disabled={!playerCards || playerCards.length === 0 || playerCards.reduce((a, b) => a + b, 0) > 25 || !!gameResult}
            >
              Draw Card for Computer
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="text"
              color="warning"
              onClick={resetGame}
              disabled={(!playerCards || playerCards.length === 0) && (!computerCards || computerCards.length === 0)}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Game;