import PropTypes from 'prop-types';

export const Statistics = ({
  options,
  statistic,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {options.map((name, i) => {
        return (
          <p key={i}>
            {name}:<span>{statistic[name]}</span>
          </p>
        );
      })}
      <p>
        Total: <span>{total}</span>
      </p>
      <p>
        Positive feedback: <span>{positivePercentage()}</span>%
      </p>
    </>
  );
};

Statistics.propTypes = {
    options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])).isRequired,
    statistic: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.func.isRequired,
};