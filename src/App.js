import React from "react";
import "./style.css";
import Employee from './Employee';
import Context08 from './08Context'

export default function App() {
  return (
    <div>
      <Employee Id="101" Name="Pragim" Location="Bangalore" Salary="50000" BasicSalary="25000" HRA="10000" SpecialAllowance="15000"></Employee>
      <Context08/>
    </div>
  );
}
