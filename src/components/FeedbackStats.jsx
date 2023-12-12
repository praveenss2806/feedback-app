const FeedbackStats = ({feedback}) => {
    const getAverage = (feedback) => {
        let average = 0;

        feedback.forEach((item) => {
            average += item.rating;
        })

        return average/feedback.length;
    }

    let average = getAverage(feedback).toFixed(1)

    return (
        <div className="feedback-stats">
            <h3>{feedback.length} Reviews</h3>
            <h3>Average Rating: {isNaN(average)?0 : average}</h3>
        </div>
    )
}

export default FeedbackStats;