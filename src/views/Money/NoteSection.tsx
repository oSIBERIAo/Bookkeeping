import styled from "styled-components"
import React from "react"
import { Input } from "../../components/Input"

const Wrapper = styled.section`
    background-color: #f5f5f5;
    padding: 4px 16px;
    font-size: 16px;
    span {
        font-size: 10px;
    }
    input {
        outline: none;
    }
    input::placeholder {
        font-size: 10px;
        color: #c4c4c4;
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

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value)
    }

    return (
        <Wrapper>
            <Input
                label="备注"
                type="text"
                placeholder={"  请在这里添加备注"}
                value={note}
                onChange={(e) => {
                    onChange(e)
                }}
            />
        </Wrapper>
    )
}

export { NoteSection }
