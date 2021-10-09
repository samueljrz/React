import React, {InputHTMLAttributes} from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}
 
const Input: React.FC<InputProps> = ({name, label, ...rest}) => {
  return ( 
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" name="input" {...rest}
      />
    </div>  
  );
}
 
export default Input;