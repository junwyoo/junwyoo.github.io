import React from 'react';
import './App.css';
import './css/w3.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      openLinkOne: false
    };
  }

  onClickLinkOne = (e) => {
      console.log(e.id, e.target.id);
      if (this.state.openLinkOne) {
        this.setState({openLinkOne: false});
      } else {
        // Open this menu and close all others
        this.setState({openLinkOne: true});
      }
  }

  render () {
    const linkClicked = this.state.openLinkOne ? {backgroundColor: "rgb(204, 204, 204)"} : {};

    const menuBar =
      <div className="mainScrollArea" id="mainScrollArea">
        <div className="w3-bar-block w3-light-white">
          <div className="w3-bar-item w3-button">Home</div>
          <div onClick={this.onClickLinkOne} className={"w3-bar-item w3-button"} id="Link 1" style={linkClicked}>Link 1</div>
            {this.state.openLinkOne && <div onClick={this.onClickLinkOne} className="w3-bar-item w3-button w3-hover-white w3-light-gray" style={{paddingLeft: "2em"}}>Sub category</div>}
          <div onClick={this.onClickLinkOne} className={"w3-bar-item w3-button"} id="Link 2" style={linkClicked}>Link 2</div>
          <div onClick={this.onClickLinkOne} className={"w3-bar-item w3-button"} id="Link 3" style={linkClicked}>Link 3</div>
        </div>
      </div>;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Under construction...
          </p>
        </header>
        <div>
          {menuBar}
        </div>
      </div>
    );
  }
}

export default App;
