import React from 'react'

export default class PlayAgainButton extends React.Component {
    constructor(props) {
        super(props)
    }

    onTrigger = () => {
        this.props.parentCallback()
    }

    render() {
        return (
            <button className='play-agian-button' onClick={this.onTrigger}>Play Again</button>
        )
    }
}