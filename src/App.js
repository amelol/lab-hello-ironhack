import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-dark bg-black">
          <div className="container">
              <a className="navbar-brand" href="https://www.ironhack.com/">
                <img
                  src="/images/ironhack-logo.svg"
                  alt="logo"
                  width="40"
                  height="40"
                />
              </a>
              <img
                src="/images/menu-top.svg"
                alt="menu"
                width="20"
                height="20"
              />
          </div>
        </nav>
        <h1>
          Say hello to <br /> ReactJS
        </h1>
        <p>
          You will learn how to use the most popular frontend library <br /> and
          become a super Ninja developer.
        </p>
        <button type="button" className="btn btn-light">
          Awesome
        </button>
      </header>
      <section>
        <div className="row g-2">
          <div className="col">
            <div className="card">
              <img src="/images/icon1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Declarative</h5>
                <p className="card-text">
                  Recat makes it painless to create interactive UIs
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="/images/icon2.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Components</h5>
                <p className="card-text">
                  Build encapsulated components that manage their state
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="/images/icon3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Single-way</h5>
                <p className="card-text">
                  A set of immutable values are passed to the components
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="/images/icon4.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">JSX</h5>
                <p className="card-text">
                  Statically-typed, designed to run on modern browsers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
