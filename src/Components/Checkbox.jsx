import React from "react";

const Checkbox = ({ name, value, onChange, children }) => {
    return <div className="form-check my-2">
        <input type="checkbox" checked={value} onChange={onChange} id={name} name={name} className="form-check-input" />
        <label htmlFor={name} className="form-check-label">{children}</label>
    </div>
}

export default Checkbox;