import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import Card from "./components/shared/Card";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
    <Header />
   <div className="container">
    <FeedbackList feedback={feedback} />
    <Card>Helo </Card>
   </div>
   </>
  );
}

export default App;
