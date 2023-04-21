import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeavefeedback, options }) => {
  return (
    <div>
      {options.map((name, i) => {
        return (
          <button
            key={i + 1}
            onClick={() => {
              onLeavefeedback(name);
            }}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};
FeedbackOptions.propTypes = {
  onLeavefeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};
