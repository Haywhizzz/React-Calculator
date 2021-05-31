import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(
      (state) => calculate(state, buttonName),
    );
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div id="calculator">
        <h1>
          Let&apos;s do some maths!
        </h1>
        <Display result={total || next || '0'} next={next} operation={operation} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    );
  }
}

export default App;
