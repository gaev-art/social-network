import React from "react";

export const required=value=>{
    if(value)return undefined
    return 'Filed is required'

}



export const maxLengthCreator=(maxLength)=>(value)=>{
    if(value.length>30)return `Max length is ${maxLength} symbols`
    return undefined

}