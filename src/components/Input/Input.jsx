import React from 'react'


export const Input = ({field, label,value,onChangeHandler, showErrorMessage,validationMessage,type,}) => { 


    return (
    <>
        <div>
            <span>{label}</span>
            <input type={type} value={value} onChange={onChangeHandler} />
            <span>{showErrorMessage && validationMessage}</span>
        </div>
    </>
  )
}


