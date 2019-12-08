import React, {Component} from 'react';
import axios from 'axios';
import './badge.component.css'
export default class Badge extends Component{

    constructor(props){
        super(props);
        this.state = {badge:[]}
        this.resultId = this.props.resultId
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/result/${this.resultId}`)
        .then(response => {
            this.setState({badge: response.data.Findings});
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div class="wrapper">
                {this.state.badge.length > 0 ? (
                    <span class="badge red">{this.state.badge.length}</span>)
                : (
                    <span class="badge grey">{this.state.badge.length}</span>
                )}
                
            </div>
        )
    }
}