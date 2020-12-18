import styled from "styled-components"
import React from "react"

const Wrapper = styled.section`
    //position: fixed;
    //width: 100vw;
    //bottom: 5.5rem;
    display: flex;
    flex-direction: column;
    .output {
        font-size: 36px;
        text-align: right;
        div {
            margin: 15px 10px;
            padding: 0 10px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 3px 14px 0 rgba(233, 231, 241, 0.5);
        }
    }
    .pad {
        background-color: white;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        padding-top: 10px;
        overflow: hidden;
        button {
            float: left;
            width: 25%;
            height: 64px;
            border-radius: 0;
            border: none;
            outline: none;
            user-select: none;
            background-color: white;
            font-weight: bolder;
            &.ok {
                float: right;
                height: 128px;
                padding: 10px;
                border-radius: 20px;
                background-color: #472fc8;
                color: white;
                border: 10px solid white;
            }
            &.zero {
                width: 50%;
            }
        }
    }
`

const generateOutput = (text: any, output: string | string[]) => {
    switch (text) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            if (output === "0") {
                return text
            } else {
                return output + text
            }
        case ".":
            if (output.indexOf(".") >= 0) {
                return output
            } else {
                return output + text
            }
        case "⌫":
            return output.slice(0, -1)
        case "AC":
            return "0"
        case "OK":
            break
    }
}

type Props = {
    value: string
    onChange: (value: string) => void
    onOK: () => void
}

const NumberPadSection: React.FC<Props> = (props) => {
    const output = props.value
    const _setOutput = props.onChange

    const setOutput = (output: string) => {
        if (output.length > 16) {
            output = output.slice(0, 16)
        } else if (output.length === 0) {
            output = "0"
        }
        _setOutput(output)
    }

    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text: any = (e.target as HTMLButtonElement).textContent
        if (text === "OK") {
            console.log("OK")
            props.onOK()
            return
        }
        const newOutput = generateOutput(text, output)
        setOutput(newOutput)
    }

    return (
        <Wrapper>
            <div className={"output"}>
                <div>{output}</div>
            </div>
            <div className={"pad clearfix"} onClick={onClickButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>⌫</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>AC</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className={"ok"}>OK</button>
                <button className={"zero"}>0</button>
                <button>.</button>
            </div>
        </Wrapper>
    )
}
export { NumberPadSection }
