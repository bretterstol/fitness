import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './inputField.jsx';

class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <InputField />
        );
    }

}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
