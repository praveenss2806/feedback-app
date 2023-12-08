import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({feedback}) => {
    if(!feedback || feedback.length ===0) {
        return <p>No feedback yet</p>
    }

    return (
        <>
            {feedback.map((fb) => {
                return <FeedbackItem feedback = {fb}/>
            })}
        </>
    )
}

export default FeedbackList;