import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

interface State {
  useData: string | null;
}

function App() {
  const [error, setError] = React.useState<State>({ useData: null });

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
