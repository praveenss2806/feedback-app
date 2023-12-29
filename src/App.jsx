import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutLink from './components/AboutLink';
import { FeedbackProvider } from './context/FeedbackContext';
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

    const addFeedback = (newFeed) => {
        newFeed.id = uuidv4()
        setFeedback([newFeed, ...feedback])
    }

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element = {
                            <>
                                <FeedbackForm addFeedback={addFeedback}/>
                                <FeedbackStats />
                                <FeedbackList delFeedback={delFeedback} />
                                <AboutLink/>
                            </>
                        } />
                        <Route path='/about' element = {<><About/></>}/>
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    );
};

export default App;
