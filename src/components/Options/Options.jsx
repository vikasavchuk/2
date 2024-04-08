import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
    return (
        <div className={css.object}>
        <button
          type="button"
          className={css.butOp}
          onClick={() => updateFeedback("good")}
        >
          Good
        </button>
        <button
          type="button"
          className={css.butOp}
          onClick={() => updateFeedback("neutral")}
        >
          Neutral
        </button>
        <button
          type="button"
          className={css.butOp}
          onClick={() => updateFeedback("bad")}
        >
          Bad
        </button>
        {totalFeedback > 0 && (
          <button
            type="button"
            className={css.butOff}
            onClick={() => resetFeedback()}
          >
            Reset
          </button>
        )}
      </div>
    );
};

export default Options;