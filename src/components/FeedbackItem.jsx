import Card from './shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({feedback}) => {
    const {delFeedback, edFeedback} = useContext(FeedbackContext)

    const startDel = () => {
        delFeedback(feedback.id)
    }

    return (
        <Card>
            <div className="num-display">{feedback.rating}</div>
            <button className='close' onClick={startDel}>
                <FaTimes color="purple"/>
            </button>
            <button className='edit' onClick={() => edFeedback(feedback)}>
                <FaEdit color='purple' />
            </button>
            <div className="text-display" >{feedback.text}</div>
        </Card>
    )
}

export default FeedbackItem;