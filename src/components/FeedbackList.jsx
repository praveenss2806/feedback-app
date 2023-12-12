import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({feedback, delFeedback}) => {
    if(!feedback || feedback.length ===0) {
        return <p>No feedback yet</p>
    }

    return (
        <>
            {feedback.map((fb) => {
                return <FeedbackItem key={fb.id} feedback = {fb} handleDel={(id) => delFeedback(id)}/>
            })}
        </>
    )
}

export default FeedbackList;