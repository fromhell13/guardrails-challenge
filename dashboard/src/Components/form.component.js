import React, {Component} from 'react';
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            RepositoryName: '',
            Status:'default',
            Findings:[],
            QueuedAt: new Date(),
            ScanningAt: new Date(),
            FinishedAt: new Date()
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Handle Submit data
    handleSubmit(event) {
        let data = JSON.stringify(this.state, null, '  ')
        console.log('submitted data: ', JSON.stringify(data));
        event.preventDefault();

        fetch('http://localhost:8080/result', {
            method: 'POST',
            body: data,
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((data) => {
            console.log('Insert status: ', data);
        })
        .catch((err) => {
            console.log('Error: ', err)
        }) 
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    QueuedAtChanged = date => this.setState({ QueuedAt: date })
    ScanningAtChanged = date => this.setState({ ScanningAt: date })
    FinishedAtChanged = date => this.setState({ FinishedAt: date })

    render() {
        return (
            <div>
                <h3>Add new scan result</h3>
                <form onSubmit={this.handleSubmit}>
                    <p>Repository Name</p>
                    <input class="form-control" type="text" name="RepositoryName" value={this.state.RepositoryName} onChange={this.handleChange}/>
                    <p>Status</p>
                    <select name="Status" class="form-control" value={this.state.Status} onChange={this.handleChange}> 
                        <option value="default">-- Select --</option>
                        <option value="Queued">Queued</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Success">Success</option>
                        <option value="Failure">Failure</option>
                    </select>
                    <p>Findings</p>
                    <textarea class="form-control" id="theFindings" rows="3" name="Findings" value={this.state.Findings} onChange={this.handleChange}></textarea>
                    <p>QueuedAt</p>
                    <DatePicker
                        selected={this.state.QueuedAt}
                        onChange={this.QueuedAtChanged}
                        showTimeSelect
                        dateFormat="Pp"
                    />
                    <p>ScanningAt</p>
                    <DatePicker
                        selected={this.state.ScanningAt}
                        onChange={this.ScanningAtChanged}
                        showTimeSelect
                        dateFormat="Pp"
                    />
                    <p>FinishedAt</p>
                    <DatePicker
                        selected={this.state.FinishedAt}
                        onChange={this.FinishedAtChanged}
                        showTimeSelect
                        dateFormat="Pp"
                    />
                    <p><input type="submit" value="Submit" /></p>
                </form>
            </div>
        )
    }
}