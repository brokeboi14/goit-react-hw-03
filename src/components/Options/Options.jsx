
import clsx from 'clsx';
import css from './Options.module.css';

const Options = ({
  options,
  onOptionBtnClick,
  totalFeedback,
  onResetBtnClick,
}) => {
  return (
    <div className={css.buttonContainer}>
      {options.map(option => {
        return (
          <button
            className={clsx(css.optionBtn, css[option])}
            key={option}
            onClick={() => onOptionBtnClick(option)}
          >
            {option}
          </button>
        );
      })}
      {totalFeedback ? (
        <button className={css.optionBtn} onClick={onResetBtnClick}>
          Reset
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default Options;
