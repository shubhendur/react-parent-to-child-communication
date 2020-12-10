import React, { Component } from 'react'
const EmployeeContext = React.createContext()
export class Context08 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 101
        }
    }
    change = () => {
        this.setState({
            id: 102
        })
    }
    render() {
        return (
            <div>
                <h4>Context </h4>
                {this.state.id}
                <EmployeeContext.Provider value={this.state}>
                    <Employee08></Employee08>
                </EmployeeContext.Provider>
                <button onClick={this.change}>Change Id</button>
            </div>
        )
    }
}

export default Context08


class Employee08 extends Component {
    static context = EmployeeContext;
    render() {
        return (
            <div>
                Employee component
                {this.context.id}
                <Salary08></Salary08>

            </div>
        )
    }
}
class Salary08 extends Component {
    static context = EmployeeContext;
    render() {
        return (
            <div>
                <span>Salary component</span>
                {this.context.id}
            </div>
        )
    }
}
