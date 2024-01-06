import { useCallback, useEffect, useState } from "react"
import { scheduler } from "timers/promises"
import { Schedule } from "../model/Schedule"

function useSchedule(yearMonth : string) {
    const [list, setList] = useState<Schedule[]>()
    const selectDay = useCallback((date : string)=>{
        if (!list) return undefined
        return list.find((scheduler) => scheduler.date === date)
    }, [list])
    useEffect(()=>{
        setList([
            {
                date : "2024-01-05",
                content : [
                    "뿌슝빠슝하기 111",
                    "뿌슝빠슝하기 222"
                ]
            },
            {
                date : "2024-01-06",
                content : [
                    "뿌슝빠슝하기 111",
                    "뿌슝빠슝하기 222"
                ]
            },
            {
                date : "2024-01-07",
                content : [
                    "뿌슝빠슝하기 111",
                    "뿌슝빠슝하기 222"
                ]
            },
            {
                date : "2024-01-08",
                content : [
                    "뿌슝빠슝하기 111",
                    "뿌슝빠슝하기 222"
                ]
            },
            {
                date : "2024-01-09",
                content : [
                    "뿌슝빠슝하기 111",
                    "뿌슝빠슝하기 222"
                ]
            },
            {
                date : "2024-01-10",
                content : [
                    "뿌슝빠슝하기 111",
                    "뿌슝빠슝하기 222"
                ]
            },
        ])
    }, [])
    return {
        list,
        selectDay
    }
}
export default useSchedule