import React from "react";

const Checkbox = ({ name, value, onChange, children }) => {
    return <div className="form-check my-2">
        <label htmlFor={name} className="container-checkbox">
            <input type="checkbox" checked={value} onChange={onChange} id={name} name={name} className="form-check-input" />
            <span className="checkmark-box"></span>{children}</label>
    </div>
}

export default Checkbox;