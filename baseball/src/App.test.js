import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import App from './App';


describe("<App />", () =>  {
  it('renders without crashing', () => {
    const app = render(<App />)
  });

  it("should record strikes", () => {
    const { getByText } = render(<App/>)
    const { getByTestId } = render(<App/>)

    const button = getByText(/Strike!/i)

    fireEvent.click(button);

    const strikes = getByTestId("strikes-display")

    expect(strikes.textContent).toBe("1")

    fireEvent.click(button);

    expect(strikes.textContent).toBe("2")
})

})