import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackList = () => {
    const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length ===0)) {
        return <p>No feedback yet</p>
    }

    return isLoading ? <h1>Loading...</h1>: (
        <>
            {feedback.map((fb) => {
                return <FeedbackItem key={fb.id} feedback = {fb} />
            })}
        </>
    )
}

export default FeedbackList;