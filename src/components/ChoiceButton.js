import React from "react"

export default class ChoiceButton extends React.Component {
    constructor(props) {
        super(props)
    }

    onTrigger = () => {
        this.props.parentCallback(this.props.correct)
        this.className='choice-button-clicked'
    }

    render() {
        return (
            <button
                className='choice-button'
                disabled={this.props.disabled}
                onClick={this.onTrigger}
            >
                {this.props.choiceContent}
            </button>
        )
    }
}