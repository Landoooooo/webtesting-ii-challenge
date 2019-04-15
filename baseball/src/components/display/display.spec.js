import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './display';

describe("<Display />", () => {
    it("should diplay all the counts", () => {
        const { getByTestId } = render(
            <Display />
        )
        const strikes = getByTestId("strikes")
        expect(strikes.textContent).toBe()

    })
})