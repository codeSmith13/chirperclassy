import React from "react";
import "./Styles.css";
import OneChirp from "./components/OneChirp";
let at = "@";

let ChirpList = (props) => {
  return props.chirps.map((oneChirp) => <OneChirp chirp={oneChirp} />);
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      text: "",
      chirpArr: [
        {
          name: "Oscar Wilde",
          text: "Anyone who lives within their means suffers from a lack of imagination.",
        },
        {
          name: "Bobby Boucher",
          text: "My Mama says that alligators are ornery because they got all them teeth and no toothbrush.",
        },
        {
          name: "Sheldon Cooper",
          text: "I’m not insane. My mother had me tested.",
        },
      ],
      
    };
  }

  chirpName = (e) => {
    this.setState({ name: e.target.value });
  };

  chirpText = (e) => {
    this.setState({ text: e.target.value });
  };

  chirpInfo() {
    let newChirp = {
      name: this.state.name,
      text: this.state.text,
    };

    this.setState({ chirpArr: [...this.state.chirpArr, newChirp] });
  }
  render() {
    return (
      <>
        <div className="container ">
          <div className="row ">
            <h1 className="text-white text-center">Chirper (Classy)</h1>
          </div>
        </div>
        <div className="container ">
          <div className=" row col-12 d-block display-content-end">
            <input
              type="text"
              className="m-2 col-3 h-"
              placeholder="&#64;Username"
              onChange={(e) => this.chirpName(e)}
              value={"@"+this.state.name}
            />
            
            <textarea
              type="text"
              className="m-2 row col-3"
              rows="3"
              placeholder="Your thoughts"
              onChange={(e) => this.chirpText(e)}
              value={this.state.text}
            />
            <button
              className="btn btn-warning m-1 col-2"
              onClick={() => this.chirpInfo()}
            >
              Chirp Chirp
            </button>
            <ChirpList chirps={this.state.chirpArr} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
