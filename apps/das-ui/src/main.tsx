import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import './styles.scss';

import App from './app/app';
import {configureAppStore} from './app/stores/configure-store';

const store = configureAppStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>
);


