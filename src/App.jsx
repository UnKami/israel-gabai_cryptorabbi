import HomePage from './pages/index.jsx';
import Navigation from './components/Navigation.jsx';

const App = () => {
  return (
    <div className="app-shell">
      <Navigation />
      <main>
        <HomePage />
      </main>
    </div>
  );
};

export default App;
