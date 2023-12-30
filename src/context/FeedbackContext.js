import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this is from context 1',
            rating: 9,
        },
        {
            id: 2,
            text: 'this is from context 2',
            rating: 10,
        },
        {
            id: 3,
            text: 'this is from context 3',
            rating: 8,
        },
    ]);

    const [editFeedback, setEditFeedback] = useState({
        item: {},
        edit: false,
    });

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

    const edFeedback = (item) => {
        setEditFeedback({
            item,
            edit: true,
        });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                delFeedback,
                addFeedback,
                edFeedback,
                editFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
