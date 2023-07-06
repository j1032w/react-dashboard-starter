import {render} from '@testing-library/react';
import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {configureAppStore} from '../stores/configure-store';


export function renderWithProviders(
  ui: React.ReactElement
) {
  const store = configureAppStore();

  function Wrapper({children}: PropsWithChildren<NonNullable<unknown>>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return {store, ...render(ui, {wrapper: Wrapper})};
}
