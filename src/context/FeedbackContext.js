import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this is from context',
            rating: 9,
        },
    ]);

    const addFeedback = (newFeed) => {
        newFeed.id = uuidv4();
        setFeedback([newFeed, ...feedback]);
    };

    const delFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(
                feedback.filter((item) => {
                    return id !== item.id;
                })
            );
        }
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                delFeedback,
                addFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
