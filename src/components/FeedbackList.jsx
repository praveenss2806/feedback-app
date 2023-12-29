import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackList = ({delFeedback}) => {
    const {feedback} = useContext(FeedbackContext)

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