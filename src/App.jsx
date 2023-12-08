import Header from './components/Header';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';

const App = () => {
    const [feedback, setFeedback] = useState(feedbackData);

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </>
    );
};

export default App;
