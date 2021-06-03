import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, color, wide } = props;
  const { clickHandler } = props;
  const buttonwidth = wide ? '50%' : '25%';
  const buttoncolor = color ? 'lightgray' : 'orange';
  const style = {
    backgroundColor: buttoncolor,
    width: buttonwidth,
  };

  return (
    <button style={style} className="button" type="button" onClick={() => clickHandler(name)}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
