import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    render(){
        if(this.props.show === false) return null;
        else return <p> Hei! Klokka er: {this.state.date.toLocaleTimeString()}</p>;
    }
    componentDidMount(){
        console.log("hei");
        this.timeId =
            setInterval(
                () => this.tick(),
                1000
            );
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


export default Clock;
