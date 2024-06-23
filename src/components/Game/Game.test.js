// This code contains two unit tests for a game. The first test checks the functionality of drawing a card for a player. It simulates a button click,
//  checks if the player's card value is displayed, and verifies that the buttons for the computer to draw a card and to reset the game are enabled. 
//  The second test checks the functionality of drawing a card for the computer. It simulates both player and computer button clicks, checks if the computer's card value is displayed, 
//  and verifies that the reset button is enabled.

import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react';
import Game from './index';

beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { });
});

afterAll(() => {
    console.error.mockRestore();
});

test('playerDrawCard function works correctly', () => {
    act(() => {
        render(<Game />);
    });

    // Click the Draw Card for Player button
    const playerButton = screen.getByText('Draw Card for Player');
    fireEvent.click(playerButton);

    // Check that the player's card value is displayed
    const playerCardValue = screen.getByText(/Player Card Value/);
    expect(playerCardValue).toBeInTheDocument();

    // Check that the Draw Card for Computer button is now enabled
    const computerButton = screen.getByText('Draw Card for Computer');
    expect(computerButton).toBeEnabled();

    // Check that the Reset button is now enabled
    const resetButton = screen.getByText('Reset');
    expect(resetButton).toBeEnabled();
});

test('computerDrawCard function works correctly', () => {
    act(() => {
        render(<Game />);
    });

    // Click the Draw Card for Player button
    const playerButton = screen.getByText('Draw Card for Player');
    fireEvent.click(playerButton);

    // Click the Draw Card for Computer button
    const computerButton = screen.getByText('Draw Card for Computer');
    fireEvent.click(computerButton);

    // Check that the computer's card value is displayed
    const computerCardValue = screen.getByText(/Computer Card Value/);
    expect(computerCardValue).toBeInTheDocument();

    // Check that the Reset button is now enabled
    const resetButton = screen.getByText('Reset');
    expect(resetButton).toBeEnabled();
});