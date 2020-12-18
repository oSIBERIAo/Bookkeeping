import { useEffect, useState } from "react"
import { useUpdate } from "./useUpdate"
import dayjs from "dayjs"

export type RecordItem = {
    tagIds: number[]
    note: string
    category: string
    amount: string
    createdTime: string // ISO 8601
}

// Omit 去掉部分属性 createdTime
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
        if (parseInt(newRecord.amount) <= 0) {
            return false
        }
        if (newRecord.tagIds.length === 0) {
            return false
        }
        const record = { ...newRecord, createdTime: new Date().toISOString() }
        setRecords([...records, record])
        return true
    }

    const selectedRecordsByCategory = (category: string) => {
        const selectedRecords = records.filter((r) => r.category === category)

        let result: { [key: string]: RecordItem[] } = {}
        selectedRecords.forEach((r) => {
            const key = dayjs(r.createdTime).format("YYYY年MM月DD日")
            if (!result.hasOwnProperty(key)) {
                result[key] = []
            }
            result[key].push(r)
        })

        // 根据日期分类  >  子项根据日期排序
        let arrayResult = Object.entries(result).sort((a, b) => {
            if (a[0] > b[0]) return -1
            if (a[0] < b[0]) return 1
            return 0
        })
        arrayResult.forEach((r) => {
            r[1].sort((a, b) => {
                if (a.createdTime > b.createdTime) return -1
                if (a.createdTime < b.createdTime) return 1
                return 0
            })
        })

        return arrayResult
    }

    return { records, setRecords, addRecord, selectedRecordsByCategory }
}

export { useRecords }
