
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

import './App.css';

import { useState, useEffect } from 'react';

const App = () => {
  const initialFeedbackValues = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const getFeedbackFromLS = () => {
    const savedFeedback = window.localStorage.getItem('saved-feedback');
    return savedFeedback !== null
      ? JSON.parse(savedFeedback)
      : initialFeedbackValues;
  };

  const [feedbacks, setFeedbacks] = useState(getFeedbackFromLS);

  useEffect(() => {
    window.localStorage.setItem('saved-feedback', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = feedbackType => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const resetFeedback = () => {
    setFeedbacks(initialFeedbackValues);
  };
  const positiveFeedback = Math.round(
    ((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100
  );

  return (
    <div className="appContainer">
      <Description />
      <Options
        options={['good', 'neutral', 'bad']}
        onOptionBtnClick={updateFeedback}
        totalFeedback={totalFeedback}
        onResetBtnClick={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          goodFeedback={feedbacks.good}
          neutralFeedback={feedbacks.neutral}
          badFeedback={feedbacks.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;