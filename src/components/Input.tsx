import styled from "styled-components"
import React from "react"

const Label = styled.label`
    display: flex;
    align-items: center;
    span {
        color: #666;
        margin-right: 16px;
        white-space: nowrap;
    }
    input {
        display: block;
        width: 100%;
        height: 40px;
        border: none;
        background: none;
    }
`

type Props = {
    label: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
    const { children, label, ...rest } = props
    return (
        <Label htmlFor="" className="clearfix">
            <span>{label}</span>
            <input {...rest} />
        </Label>
    )
}
export { Input }
