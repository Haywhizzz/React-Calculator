import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const firstGroup = ['AC', '+/-', '%', '÷'];
  const secondGroup = ['7', '8', '9', 'x'];
  const thirdGroup = ['4', '5', '6', '-'];
  const fourthGroup = ['1', '2', '3', '+'];
  const fifthGroup = ['0', '.', '='];

  return (
    <>
      <div className="group1">
        {firstGroup.map(element => (
          <Button
            name={element}
            key={firstGroup.indexOf(element)}
            handleClick={element => props.clickHandler(element)}
          />
        ))}
      </div>
      <div className="group1">
        {secondGroup.map(element => (
          <Button
            name={element}
            key={secondGroup.indexOf(element)}
            handleClick={element => props.clickHandler(element)}
          />
        ))}
      </div>
      <div className="group1">
        {thirdGroup.map(element => (
          <Button
            name={element}
            key={thirdGroup.indexOf(element)}
            handleClick={element => props.clickHandler(element)}
          />
        ))}
      </div>
      <div className="group1">
        {fourthGroup.map(element => (
          <Button
            name={element}
            key={fourthGroup.indexOf(element)}
            handleClick={element => props.clickHandler(element)}
          />
        ))}
      </div>
      <div className="group1">
        {fifthGroup.map(element => (
          <Button
            name={element}
            key={fifthGroup.indexOf(element)}
            handleClick={element => props.clickHandler(element)}
          />
        ))}
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};

export default ButtonPanel;
