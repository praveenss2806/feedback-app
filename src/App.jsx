import Header from './components/Header';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

import { useState } from 'react';

const App = () => {
    const [feedback, setFeedback] = useState(feedbackData);

    const delFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => {
                return id !== item.id
            }))
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} delFeedback={delFeedback} />
            </div>
        </>
    );
};

export default App;
