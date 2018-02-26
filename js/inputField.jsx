import React from 'react';

class InputField extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDate: false,
            date: new Date()
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleOnClick() {
        this.setState(prevState => ({
            showDate: !prevState.showDate
        }));
    }
    render() {
        console.log(this.state.showDate);
        return (
            <div>
                <h2> Hei på deg </h2>
                <button onClick={this.handleOnClick}> Få klokka </button>
                {this.state.showDate ? this.state.date.toLocaleTimeString() : null}
            </div>
        );
    }
    startOrStop(){
        if(this.state.showDate){
            this.timeId =
                setInterval(
                    () => this.tick(),
                    1000
                );
        }else if(this.timeId){
            clearIntervall(this.timeId);
        }
    }
            

    componentDidMount(){
    }
    tick(){
        this.setState(
            {date: new Date()}
        )
    }
    componentWillUnmount(){
        console.log("ferdig");
        clearIntervall(this.timeId);
    }
}


export default InputField;
