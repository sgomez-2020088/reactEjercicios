import React from 'react'


export const Input = ({field, label,value,onChangeHandler, showErrorMessage,validationMessage,type,placeHolder}) => { 


    return (
    <>
        <div>
            <span>{label}</span>
            <input type={type} value={value} onChange={onChangeHandler} placeholder={placeHolder} />
            <span>{showErrorMessage && validationMessage}</span>
        </div>
    </>
  )
}


