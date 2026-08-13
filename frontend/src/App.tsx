import useLogs from './hooks/useLogs';
import Terminal from './components/Terminal';

function App() {
  const logs = useLogs();

  return (
    <main className="app-container">
      <Terminal logs={logs} />
    </main>
  );
}

export default App;