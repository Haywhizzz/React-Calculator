import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return (
    <div>{result}</div>
  );
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

Display.defaultProps = {
  result: 0,
};

export default Display;
