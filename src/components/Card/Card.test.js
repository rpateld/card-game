import { render, screen } from '@testing-library/react'; // Import act from react-testing-library
import { act } from 'react';
import Card from './index';

beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { });
});

afterAll(() => {
    console.error.mockRestore();
});

test('renders Card and checks values', () => {
    const values = [5, 7];
    const playerType = 'Player';

    act(() => {
        render(<Card values={values} playerType={playerType} />);
    });

    // Check that the player type is displayed
    const playerTypeElement = screen.getByText(`${playerType} Card Value`);
    expect(playerTypeElement).toBeInTheDocument();

    // Check that the card values are displayed correctly
    const cardValuesElement = screen.getByText('5 + 7 = 12');
    expect(cardValuesElement).toBeInTheDocument();
});