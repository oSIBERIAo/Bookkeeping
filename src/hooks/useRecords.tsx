import { useEffect, useState } from "react"
import { useUpdate } from "./useUpdate"

type RecordItem = {
    tagIds: number[]
    note: string
    category: string
    amount: string
    createdTime: string // ISO 8601
}

type newRecordItem = Omit<RecordItem, "createdTime">

const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([])

    useEffect(() => {
        let t = JSON.parse(window.localStorage.getItem("records") || "[]")
        setRecords(t)
    }, [])

    useUpdate(() => {
        window.localStorage.setItem("records", JSON.stringify(records))
    }, records)

    const addRecord = (newRecord: newRecordItem) => {
        const record = { ...newRecord, createdTime: new Date().toISOString() }
        setRecords([...records, record])
    }

    return { records, setRecords, addRecord }
}

export { useRecords }
