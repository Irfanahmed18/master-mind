import React, {Component} from 'react';
import PegLine from "./pegLine";
import UserInputBox from "./userInputBox";

class Container extends Component {
    state = {
      isSetMode: true,
      originalValue: [],
      inputtedValue: '',
      guessedValues: [],
    };
    render() {
        return (
            <>
                <UserInputBox onInputButtonClick = {this.handleClick}/>
                <div className="grid-container">
                    <div className="game-container">
                        {
                            this.state.guessedValues.map((guessedValue, index) => <PegLine key={index} lineValue = {guessedValue}/>)
                        }
                    </div>
                    <div className="game-container">
                        <PegLine/>
                        <PegLine/>
                    </div>
                </div>
            </>
        )
    }

    handleClick = (userInput) => {
        const inputtedValue = userInput.current.value;
        if (this.state.isSetMode) {
            const inputArray = inputtedValue.split('');
            let inputMap = new Map();
            inputArray.forEach((num, index) => inputMap.set(num, index));
            this.setState({
                originalValue: inputMap,
                isSetMode: false
            });
            return '';
        }
        this.setState({inputtedValue});
        this.setGuessedValue(inputtedValue);
    };

    setGuessedValue(inputedValue) {
        let previousValues = this.state.guessedValues;
        previousValues.push(inputedValue.split(''));
        this.setState({guessedValues: previousValues});
    }

}

export default Container;