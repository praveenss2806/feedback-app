import { useState } from 'react';
import Button from './shared/Button'
import Card from './shared/Card';
import RatingSelect from './RatingSelect';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback} = useContext(FeedbackContext)

    const handleText = (e) => {
        if(e.target.value === '') {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(e.target.value !== '' && e.target.value.trim().length < 10) {
            setBtnDisabled(true)
            setMessage('Review should be atleast 10 characters')
        }
        else {
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text.trim().length >= 10) {
            addFeedback({
                text,
                rating
            })
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rat) => setRating(rat)}/>
                <div className='input-group'>
                    <input type="text" placeholder='write reivew' value={text} onChange={handleText} />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>

                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm