import css from './Feedback.module.css';

const Feedback = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <div className={css.feedbackContainer}>
      <p>Good: {goodFeedback}</p>
      <p>Neutral: {neutralFeedback}</p>
      <p>Bad: {badFeedback}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;