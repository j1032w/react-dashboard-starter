import {screen} from '@testing-library/react';
import App from './app';
import {renderWithProviders} from './common/testing-utilities';

describe('App', () => {


  it('should have a greeting as the title', () => {
    renderWithProviders(<App/>);

    expect(screen.getAllByTestId('das-dashboard-widget').length).toEqual(4);
  });
});
