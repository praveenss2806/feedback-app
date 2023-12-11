import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'

const FeedbackItem = ({feedback}) => {

    return (
        <Card>
            <div className="num-display">{feedback.rating}</div>
            <button className='close'>
                <FaTimes color="purple"/>
            </button>
            <div className="text-display">{feedback.text}</div>
        </Card>
    )
}

export default FeedbackItem;