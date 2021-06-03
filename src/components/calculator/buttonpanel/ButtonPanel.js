import PropTypes from 'prop-types';
import Button from '../button/Button';

const ButtonPanel = (props) => {
  const groups = {
    group1: ['AC', '+/-', '%', '÷'],
    group2: ['7', '8', '9', 'x'],
    group3: ['4', '5', '6', '-'],
    group4: ['1', '2', '3', '+'],
    group5: ['', '0', '.', '='],
  };

  return (
    <div>
      {
        Object.keys(groups).map((groupName) => (
          <div key={groupName}>
            {groups[groupName].map((value, index) => (value ? (
              <Button
                color={groups[groupName].length - 1 === index ? null : true}
                wide={value === '0' ? true : null}
                key={value}
                name={value}
                clickHandler={props.clickHandler}
              />
            ) : null))}
          </div>
        ))
      }
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
