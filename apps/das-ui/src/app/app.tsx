import styles from './app.module.scss';
import { AppHeader } from './layout/header/header';
import { DashboardView } from './views';

export function App() {
  return (
    <div className={styles.appContainer}>
      <AppHeader></AppHeader>
      <div className={styles.appContainer}>
        <DashboardView></DashboardView>
      </div>
    </div>
  );
}

export default App;
