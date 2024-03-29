import React, {Component} from 'react';

export default class Sample extends Component{
    constructor(){
        super()
        this.data = `
        [
            {
              "type": "sast",
              "ruleId": "G402",
              "location": {
                "path": "connectors/apigateway.go",
                "positions": {
                  "begin": {
                    "line": 60
                  }
                }
                
              },
              "metadata": {
                "description": "TLS InsecureSkipVerify set true.",
                "severity": "HIGH"
                
              }
              
            },
            {
              "type": "sast",
              "ruleId": "G404",
              "location": {
                "path": "util/util.go",
                "positions": {
                  "begin": {
                    "line": 32
                  }
                }
                
              },
              "metadata": {
                "description": "Use of weak random number generator (math/rand instead of crypto/rand)",
                "severity": "HIGH"
                
              }
              
            }
            
        ]`
    }

    render(){
        return(
            <div>
                <pre>{this.data}</pre>
            </div>
        )
    }
}