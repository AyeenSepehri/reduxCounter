import ChangeStatus from "./components/ChangeStatus";
import CurrentNum from "./components/CurrentNum";


function App() {
  return (
    <div className="App">
      <ChangeStatus>
        <CurrentNum/>
      </ChangeStatus>
    </div>
  );
}

export default App;
