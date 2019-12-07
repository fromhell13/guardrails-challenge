import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Results = props => (
    <tr>
        <td>{props.result.RepositoryName}</td>
        <td>{props.result.Status}</td>
        <td>{props.result.ScanningAt}</td>
        <td>
            <Link to={"/show/"+props.result._id}>Show Findings</Link>
        </td>
    </tr>
)

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {results: []}
    }

    componentDidMount(){
        axios.get('http://localhost:8080/result')
        .then(response => {
            this.setState({results: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    resultList() {
        return this.state.results.map(function(currResult, i) {
            return <Results result={currResult} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Scan Result List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>RepositoryName</th>
                            <th>Status</th>
                            <th>ScanningAt</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.resultList() }
                    </tbody>
                </table>
            </div>
        )
    }
}