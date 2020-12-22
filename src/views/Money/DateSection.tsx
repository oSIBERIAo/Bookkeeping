import styled from "styled-components"
import React from "react"

const Wrapper = styled.section`
    padding: 10px;
    position: relative;
    > input {
        // Chrome 样式
        ::-webkit-datetime-edit {
            //padding: 10px 0;
        }
        ::-webkit-datetime-edit-fields-wrapper {
            display: flex;
            justify-content: center;
            font-size: 30px;
            //background: silver;
        }
        ::-webkit-datetime-edit-text {
            display: none;
            color: #ebecf1;
        }
        ::-webkit-datetime-edit-month-field {
            display: none;
            color: #002251;
        }
        ::-webkit-datetime-edit-day-field {
            color: #002251;
            :focus {
                background-color: rgba(0, 0, 0, 0);
            }
        }
        ::-webkit-datetime-edit-year-field {
            display: none;
            color: #002251;
        }
        ::-webkit-inner-spin-button {
            display: none;
        }
        ::-webkit-calendar-picker-indicator {
            /*这是控制下拉小箭头的*/
            //border: 1px solid #ccc;
            //border-radius: 14px;
            background: white;
            user-select: none;
            opacity: 0;
            cursor: pointer;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
        }
        :focus {
            //color: red;
            //border: 1px solid white;
            background-color: white;
        }
    }
    > input {
        background-color: #fdfdfd;
        border: none;
        border-radius: 10px;
        position: relative;
        box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.1);
        width: 40px;
        height: 40px;
        //color: #472fc8;
        outline: none;
        //background: none;
        //outline: none;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }
    .Safari {
        display: flex;
        justify-content: center;
        align-items: center;
        //padding: 10px;
        background-color: white;
        //width: 40px;
        //height: 40px;
        //iPhone 的 Safari浏览器
        //font-size: 1px;
        ::-webkit-date-and-time-value {
            margin-right: 0;
            display: none;
        }
    }
    .desktopSafari {
        width: 120px;
        height: 40px;
        font-weight: bold;
        padding-left: 10px;
        padding-right: 10px;
    }
    .date {
        display: none;
    }
    .MobileSafari {
        position: absolute;
        background-color: white;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: 20px;
        font-weight: bold;
        line-height: 1;
    }
`

type Props = {
    day: string
    onChange: (selected: string) => void
}

const DateSection: React.FC<Props> = (props) => {
    const day = props.day
    const setDay = props.onChange

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDay(e.target.value)
    }

    const browserType = (function () {
        let explorer = window.navigator.userAgent
        if (explorer.indexOf("Chrome") >= 0) {
            return "Chrome"
        }
        //判断是否为Safari浏览器
        else if (explorer.indexOf("Safari") >= 0) {
            if (explorer.indexOf("Mobile") >= 0) {
                return "MobileSafari"
            }
            return "Safari"
        }
    })()

    return (
        <Wrapper>
            <input
                type="date"
                name=""
                id=""
                defaultValue={day}
                onChange={(e) => {
                    onChange(e)
                }}
                className={
                    browserType === "Safari" ? "Safari desktopSafari" : "Safari"
                }
            />
            <div
                className={
                    browserType === "MobileSafari"
                        ? "Safari MobileSafari"
                        : "date"
                }
            >
                {day.split("-")[2]}
            </div>
        </Wrapper>
    )
}

export { DateSection }
