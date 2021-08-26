import React from "react"
import ReactDOM from "react-dom"
import Question from "./components/Question";
import ChoiceButton from "./components/ChoiceButton";
import NextQuestionButton from "./components/NextQuestionButton";
import PlayAgainButton from "./components/PlayAgainButton";
import questionsArray from "./questionData";
import './styles.css'

class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.handleAnswer = this.handleAnswer.bind(this)
        this.handleNextQuestion = this.handleNextQuestion.bind(this)
        this.renderNextQuestionButton = this.renderNextQuestionButton.bind(this)
        this.handlePlayAgain = this.handlePlayAgain.bind(this)
        this.state = {
            score: 0,
            currentQuestionIndex: 0,
            questionComplete: false,
            questionCompleteMessage: '',
            answerWasCorrect: true,
            numberOfQuestionsAnswered: 0
        }
    }
    
    handleAnswer = (childData) => {
        if (childData) {
            this.setState((prevState) => ({
                score: prevState.score + 1,
                questionComplete: true,
                answerWasCorrect: true,
                questionCompleteMessage: 'Correct!',
                numberOfQuestionsAnswered: prevState.numberOfQuestionsAnswered + 1
            }))
        } else {
            this.setState((prevState) => ({
                answerWasCorrect: false,
                questionComplete: true,
                questionCompleteMessage: 'Wrong!',
                numberOfQuestionsAnswered: prevState.numberOfQuestionsAnswered + 1
            }))
        }
    }

    renderNextQuestionButton = () => {
        if (this.state.questionComplete) {
            console.log('testing');
            return <NextQuestionButton parentCallback={this.handleNextQuestion} />
        }
    }

    handleNextQuestion = () => {
        this.setState((prevState) => ({
            questionComplete: false,
            currentQuestionIndex: prevState.currentQuestionIndex + 1
        }))
    }

    handlePlayAgain = () => {
        this.setState((prevState) => ({
            score: 0,
            currentQuestionIndex: 0,
            questionComplete: false,
            questionCompleteMessage: '',
            answerWasCorrect: true,
            numberOfQuestionsAnswered: 0
        }))
    }
    
    render() { 
        const choice0 = questionsArray[this.state.currentQuestionIndex].choices[0]
        const choice1 = questionsArray[this.state.currentQuestionIndex].choices[1]
        const choice2 = questionsArray[this.state.currentQuestionIndex].choices[2]
        const choice3 = questionsArray[this.state.currentQuestionIndex].choices[3]
        

        return (
            <div className='app'>
                <div className='header'>
                    <h1>💪 HISTORY BUFF</h1>
                </div>

                <div className='score'>
                    <h3 className='score-text'>Score: {this.state.score}</h3>
                </div>

                <div className='question-choice-container'>

                    <Question questionContent={questionsArray[this.state.currentQuestionIndex].questionContent} />

                    <ChoiceButton
                        correct={choice0.correct}
                        parentCallback={this.handleAnswer}
                        choiceContent={choice0.choiceContent}
                        disabled={this.state.questionComplete}
                    />
                    <ChoiceButton
                        correct={choice1.correct}
                        parentCallback={this.handleAnswer}
                        choiceContent={choice1.choiceContent}
                        disabled={this.state.questionComplete}
                    />
                    <ChoiceButton
                        correct={choice2.correct}
                        parentCallback={this.handleAnswer}
                        choiceContent={choice2.choiceContent}
                        disabled={this.state.questionComplete}
                    />
                    <ChoiceButton
                        correct={choice3.correct}
                        parentCallback={this.handleAnswer}
                        choiceContent={choice3.choiceContent}
                        disabled={this.state.questionComplete}
                    />
                </div>
                
                {this.state.questionComplete && <h3 className='question-complete-message'>{this.state.questionCompleteMessage}</h3>}

                {this.state.numberOfQuestionsAnswered < 5 
                    ? this.renderNextQuestionButton() 
                    : <PlayAgainButton parentCallback={this.handlePlayAgain} />
                }
                
            </div>
        )
    }
}




ReactDOM.render(<App />, document.getElementById('root'))

// After 10 questions have been completed
// - all elements exept for title  and player scoreare wiped
// - Play again 
