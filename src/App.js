import logo from "./logo.svg";
import "./App.css";
import { RecoilRoot } from "recoil";
import CharacterCounter from "./components/CharacterCounter";

import styled from "styled-components";

const Button = styled.button`
  font-size: 47px;
`;

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter className="border" />
      <div className="App">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12"
              src="/img/logo.svg"
              alt="ChitChat Logo"
            ></img>
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
        <Button>우아</Button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </RecoilRoot>
  );
}

export default App;
