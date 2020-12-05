import styled from "styled-components"
import React, { useRef, useState } from "react"

const Wrapper = styled.section`
    background-color: #f5f5f5;
    padding: 0 16px;
    font-size: 14px;
    label {
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
    }
`

type Props = {
    value: string
    onChange: (selected: string) => void
}

const NoteSection: React.FC<Props> = (props) => {
    // const [note, setNote] = useState("")
    const note = props.value
    const setNote = props.onChange

    const refInput = useRef<HTMLInputElement>(null)

    const onBlur = () => {
        if (refInput.current !== null) {
            setNote(refInput.current.value)
        }
    }

    return (
        <Wrapper>
            <label htmlFor="">
                <span>备注</span>
                <input
                    type="text"
                    placeholder={"  请在这里添加备注"}
                    ref={refInput}
                    defaultValue={note}
                    onBlur={onBlur}
                />
            </label>
        </Wrapper>
    )
}

export { NoteSection }
