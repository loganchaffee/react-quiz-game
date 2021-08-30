import React from "react";

export default class NextQuestionButton extends React.Component {
    onTrigger = () => {
        this.props.parentCallback(this.props.correct)
    }

    render() {
        return (
            <button className='next-question-button' onClick={this.onTrigger}>Next Question</button>
        )
    }
}