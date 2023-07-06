import 'jest-canvas-mock';
import {screen} from '@testing-library/react';
import {renderWithProviders} from '../../common/testing-utilities';
import {DashboardView} from './dashboard-view';


describe('Dashboard-View', () => {
  it('should render successfully', () => {
    renderWithProviders(<DashboardView/>);

    expect(screen.getAllByTestId('das-dashboard-widget').length).toEqual(4);
  });


});
