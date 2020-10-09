import React from 'react'
import {createContext} from 'react'
const defaultTheme = {
  background: 'yellow',
  color: 'black',
};
const fooTheme = {
  background: 'red',
  color: 'green',
}
const ThemeContext = createContext(defaultTheme);


const Banner = ({theme}) => {
  return (<div style={theme}>Welcome!</div>);
};

const Content = () => (
  <ThemeContext.Consumer>
    {
      context => {
        return <Banner theme={context} />
      }
    }
  </ThemeContext.Consumer>
);

class Hello extends React.Component {
  state = {
    theme: defaultTheme
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Content/>
        <div>
          <button onClick={() => {
            this.setState(state => ({
              theme: state.theme === defaultTheme ? fooTheme : defaultTheme
            }))
          }}>
            Toggle Theme
          </button>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default Hello