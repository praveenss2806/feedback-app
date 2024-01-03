import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [editFeedback, setEditFeedback] = useState({
        item: {},
        edit: false,
    });

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        const res = await fetch('/feedback');
        const data = await res.json();

        setFeedback(data);
        setIsLoading(false);
    };

    const addFeedback = async (newFeed) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeed),
        });

        const data = await response.json();

        setFeedback([data, ...feedback]);
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

    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => {
                return item.id === id ? { ...item, ...updItem } : item;
            })
        );
        setEditFeedback({
            item: {},
            edit: false,
        });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                isLoading,
                delFeedback,
                addFeedback,
                edFeedback,
                updateFeedback,
                editFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
