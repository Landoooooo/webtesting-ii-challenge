import React from 'react';
import App from '../../App';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from  '../display/display';
import Dashboard from './dashboard';

describe("<Dashboard />", () => {
    it("should render buttons", () => {
    const { getByText } = render(<Dashboard />);
        expect(getByText(/Strike!/i)).toBeInTheDocument();
        expect(getByText(/Ball!/i)).toBeInTheDocument();
        expect(getByText(/Foul!/i)).toBeInTheDocument();
        expect(getByText(/Hit!/i)).toBeInTheDocument();
    })

    it("should record strikes", () => {
        const { getByText } = render(<Dashboard />)
        const { getByTestId } = render(<Display display={{strikes: 0}}/>)

        const button = getByText(/Strike!/i)

        fireEvent.click(button);


        const strikes = getByTestId("strikes-display")

        expect(strikes.textContent).toBe("0")
    })
})