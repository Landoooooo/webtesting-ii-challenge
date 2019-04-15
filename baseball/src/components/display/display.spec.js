import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './display';

describe("<Display />", () => {
    it("should diplay all the counts", () => {
        const { getByTestId } = render(
            <Display display={{strikes:0, balls:0}}/>
        )
        const strikes = getByTestId("strikes-display")
        const balls = getByTestId("balls-display")
        expect(strikes.textContent).toBe("0")
        expect(balls.textContent).toBe("0")

    })
})