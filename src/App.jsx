import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Feedback from "./components/Feedback/Feedback";
import { useState, useEffect } from "react";

function App() {

  const [clicks, setClicks] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setClicks((clicks) => ({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(clicks));
  }, [clicks]);

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const positive = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );

  return (
    <>
     <Description />
     <Options 
     updateFeedback={updateFeedback}
     resetFeedback={resetFeedback}
     totalFeedback={totalFeedback}
     />
    {totalFeedback <= 0 ? (
        <Notification />
      ) : (
        <Feedback
         good={clicks.good}
         neutral={clicks.neutral}
         bad={clicks.bad}
         total={totalFeedback}
         positive={positive}
      />
      )}
    </>
  );
}

export default App;