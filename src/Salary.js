import React, { Component } from "react";

export class Salary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form:'',
            basic: this.props.BasicSalary,
            hra: this.props.HRA,
            sa: this.props.SpecialAllowance
        };
        this.BasicSalaryRef=React.createRef();
    }
    updateSalary = () => {

        let salary = parseInt(this.refs.BasicSalary.value) + parseInt(this.refs.HRA.value) + parseInt(this.refs.SpecialAllowance.value);
        console.log('Update salary called',salary)
        this.props.onSalaryChanged(salary);
        //Warning: A string ref, "BasicSalary", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref
    }
    handleChange = (e) => {
        this.setState({
            form:{
                [e.target.name]:e.target.value
            } 
        })
    }
    
    render() {
        return (
            <div>
                <h1>Salary Details...</h1>
                <p>
                    <label>Basic Salary :<input type="text" name="BasicSalary" defaultValue={this.state.basic} ref="BasicSalary" onChange={(e)=>this.handleChange(e)} /></label>
                </p>
                <p>
                    <label>HRA : <input type="text" defaultValue={this.state.hra} ref="HRA" /></label>
                </p>
                <p>
                    <label>Special Allowance : <input type="text" defaultValue={this.state.sa} ref="SpecialAllowance" /></label>
                </p>
                <button onClick={this.updateSalary}>Update</button>
            </div>
        );
    }
}

export default Salary;
