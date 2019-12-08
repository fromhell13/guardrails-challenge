import React, {Component} from 'react';
import axios from 'axios';

const Findings = props => (
    <tr>
        <td>{props.finding.ruleId}</td>
        <td>{props.finding.metadata.description}</td>
        <td>{props.finding.metadata.severity}</td>
        <td>{props.finding.location.path} at line: {props.finding.location.positions.begin.line}</td>
    </tr>
)

export default class Details extends Component{
    constructor(props){
        super(props);
        this.state = {findings:[]}
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        axios.get(`http://localhost:8080/result/${params.resultId}`)
        .then(response => {
            this.setState({findings: response.data.Findings});
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    findingList() {
        return this.state.findings.map(function(currFinding, i) {
            return <Findings finding={currFinding} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Scan Findings List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Rule Id</th>
                            <th>Description</th>
                            <th>Severity</th>
                            <th>Finding Path</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.findingList() }
                    </tbody>
                </table>
            </div>
        )
    }
}