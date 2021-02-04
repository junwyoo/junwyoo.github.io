import React from 'react';
import '../css/App.css';
import '../css/w3.css';

const menuTexts = [
  {
    category: 'Home',
    subCategories: []
  },
  {
    category: 'Projects',
    subCategories: ['a']
  },
  {
    category: 'Links',
    subCategories: ['a', 'b']
  },
  {
    category: 'Books',
    subCategories: ['js', 'python']
  }
];

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentOpen: '',
      openLinkOne: false
    };
  }

  onClickMainMenu = (category) => () => {
      if (this.state.currentOpen === category) {
        this.setState({currentOpen: ''});
      } else {
        this.setState({currentOpen: category});
      }
  }

  renderMenuItem = (menuText) => {
    const {category, subCategories} = menuText;
    const linkClicked = this.state.currentOpen === category ? {backgroundColor: "rgb(204, 204, 204)"} : {};
    const subTags = subCategories.map(subTag =>
      <div onClick={this.onClickMainMenu} className={"w3-bar-item w3-button w3-light-white subCategory"}>
        {subTag}
      </div>
    );

    return (
      <>
        <div onClick={this.onClickMainMenu(category)} className={"w3-bar-item w3-button"} style={linkClicked}>
          {category}
        </div>
          {this.state.currentOpen === category && subTags}
      </>
    );
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <p key="top-text">
            Under construction...
          </p>
        </header>
        <div className="w3-bar-block w3-light-white mainScrollArea">
          {menuTexts.map(text =>
            <div key={`menu-${text.category}`}>
              {this.renderMenuItem(text)}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
