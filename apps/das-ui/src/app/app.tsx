import './app.scss';
import { AppHeader } from './layout/header/header';
import { DashboardView } from './views';

export function App() {
  return (
    <div className="app-container">
      <AppHeader></AppHeader>
      <div className="view-container">
        <DashboardView></DashboardView>
      </div>
    </div>
  );
}

export default App;
