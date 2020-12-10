import React, { Component } from 'react'
import { Salary } from './Salary';

export class Employee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            updatedSalary:''
        }
    }
    getUpdatedSalary = (salary) => {
        this.setState({ updatedSalary: salary });
    }
    render() {
        return (
            <div>
                <h1>Employee Component...</h1>
                <p>
                    <label>Id : <b>{this.props.Id}</b></label>
                </p>
                <p>
                    <label>Name : <b>{this.props.Name}</b></label>
                </p>
                <p>
                    <label>Location : <b>{this.props.Location}</b></label>
                </p>
                <p>
                    <label>Total Salary : <b>{this.props.Salary}</b></label>
                </p>
                <p>
                    <label>Updated Salary : <b>{this.state.updatedSalary}</b></label>
                </p>
                <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance} onSalaryChanged={this.getUpdatedSalary}></Salary>

            </div>
        )
    }
}

export default Employee
