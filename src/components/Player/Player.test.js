import { render, screen } from '@testing-library/react'; // Import act from react-testing-library
import { act } from 'react';
import Player from './index';

beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { });
});

afterAll(() => {
    console.error.mockRestore();
});

test('renders Player and checks card values', () => {
    const cards = [5, 7];
    const playerType = 'Player';

    act(() => {
        render(<Player cards={cards} playerType={playerType} />);
    });

    // Check that the player type is displayed
    const playerTypeElement = screen.getByText(`${playerType} Card Value`);
    expect(playerTypeElement).toBeInTheDocument();

    // Check that the card values are displayed correctly
    const cardValuesElement = screen.getByText('5 + 7 = 12');
    expect(cardValuesElement).toBeInTheDocument();
});