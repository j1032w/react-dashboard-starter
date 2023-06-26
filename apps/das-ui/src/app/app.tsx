import React from 'react';
import styles from './app.module.scss';
import { AppHeader } from './layout/header/header';
import { DashboardView } from './views';

export function App() {
  return (
    <div className={styles['app']}>
      <AppHeader></AppHeader>
      <div className={styles['app__content']}>
        <div className={styles['app__content__view-container']}>
          <DashboardView></DashboardView>
        </div>
      </div>
    </div>
  );
}

export default App;
