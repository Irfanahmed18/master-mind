import React, {Component} from 'react';

export default class UserInputBox extends Component {
    userInput = React.createRef();
    render() {
        return (
            <div className={"form-inline text-center"} style={{display: 'block'}}>
                <label className={"p-2"}
                       htmlFor={'userInput'}>
                    Please Enter The Number:
                </label>
                <input type={'string'}
                       id={'userInput'}
                       className={'form-control col-sm-2 p-2 m-2'}
                       maxLength={4}
                       ref={this.userInput}/>
                <button type="submit"
                        className="btn btn-primary m-2" onClick={() => this.getUserInput(this.props)}>Submit</button>
            </div>
        )
    }

    getUserInput = (props) => {
        props.onInputButtonClick(this.userInput);
        this.userInput.current.value = '';
    }
}