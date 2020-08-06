import React from "react";
import "../App.css";

const Field = ({ name, value, type, onChange, placeholder, children }) => {
    return <div className="form-group-field my-2">
        {children && <label htmlFor={name}>{children}</label>}
        <input type={type} value={value} onChange={onChange} id={name} name={name} className="field-control" placeholder={placeholder} required />
    </div>
}

export default Field;