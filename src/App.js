import React from "react";
import "./App.scss";
import UseStateMistake from "./Mistakes/useStateMistake";
import Header from "./Components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./pages/User";

const Info = {
  value: {
    name: "Ercan",
    surname: "Er",
    age: 31,
    job: "Software Engineer",
  },
};
const InfoContext = React.createContext();

function App() {
  return (
    <div className="App">
      <InfoContext.Provider value={Info.value}>
        <BrowserRouter>
          <Routes>
            <Home path="/">
              <User path="user/:id" />
            </Home>
            <Route path="/mistakes">
              <UseStateMistake />
            </Route>
            <Route path="/contextExample">
              <Header headerSize={1} />
            </Route>
            <Route path="*" element={<p>What Are U doing in here?</p>} />
          </Routes>
        </BrowserRouter>
      </InfoContext.Provider>
    </div>
  );
}

export { App, InfoContext };
