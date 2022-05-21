import "./styles.css";
import Home from "./Home";
// import About from "./About";
import React, { lazy, Suspense } from "react";
const About = lazy(() => import("./About"));
export default function App() {
  return (
    <div className="App">
      <h1>Hello Nabarun!</h1>
      <Home />
      <Suspense
        fallback={
          <img
            src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp?cid=ecf05e47xgligzqjzclvl6tzp3p2lkrqoeqfcspk3gqfhbt9&rid=giphy.webp&ct=g"
            height="100px"
            width="100px"
            alt="img"
          />
        }
      ></Suspense>
      <About />
    </div>
  );
}

// About component will load after a few micro sec.
