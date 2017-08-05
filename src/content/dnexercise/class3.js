import React,{Component} from 'react'

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			student : [],
			name : '',
			age : '',
			sex : '',
			status : ''
		};
	}

    render(){
        return(
            <div>
                <Student />
                <Action />
            </div>
        );
    }
}


class Student extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const students=this.props.students;
        let nodes=[];
        nodes=students.map((student,index)=>{
            return (<li key={index}>student.name</li>);
        });
    }
}

class Action extends Component{
    constructor(props){
        super(props);
    }
    render(){

    }

}