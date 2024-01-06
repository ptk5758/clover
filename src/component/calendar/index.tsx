import { useCallback, useEffect, useMemo, useState } from "react"
import useSchedule from "../../hook/useSchedule";
import { Schedule } from "../../model/Schedule";

function Calendar({date} : {date : Date}) {
    const dateArray = useMemo(()=>{        
        let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
        const lastDate = new Date( date.getFullYear(), date.getMonth(), 0).getDate()
        let day = 1; 
        const result = []        
        for (let i=0; i<6; i++) {
            for (let j=0; j<6; j++) {
                if (i == 5 && j == 5) continue
                if (firstDay > 0) {
                    firstDay--
                    result.push(null)
                    continue
                }
                if (day > lastDate) {
                    result.push(null)
                    continue
                }
                result.push(day++)
            }
        }

        return result
    }, [date])
    const schedule = useSchedule("2024-01")
    const [targetDay, setTargetDay] = useState<Schedule>()

    useEffect(()=>{
        const year = date.getFullYear()
        const month = (date.getMonth()+1).toString().padStart(2, "0")
        const _day = date.getDate().toString().padStart(2, "0")
        clickDay(`${year}-${month}-${_day}`)
    }, [schedule.list])

    const clickDay = useCallback((_date : string)=>{
        const _schedule = schedule.selectDay(_date)
        setTargetDay(_schedule ? _schedule : {date : _date, content : []})
    }, [schedule.list])

    return (
        <div className="calendar">
            <Week/>
            <div className="board">
                <div className="container">
                    {
                        dateArray.map((date, index) => <Day key={index} day={date ? date.toString() : ""}/>)
                    }
                </div>
                <Note
                    content={targetDay ? targetDay.content : []}
                    date={targetDay ? targetDay.date : `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`}
                />
            </div>
            
        </div>
    )
    function Day({day} : {day : string}) {
        const currentDate = useMemo(()=>{
            const year = date.getFullYear()
            const month = (date.getMonth()+1).toString().padStart(2, "0")
            const _day = day.padStart(2, "0")
            return `${year}-${month}-${_day}`
        },[])        
        return (
            <div 
                className={`item ${schedule && schedule.list && schedule.list.find((schedule) => schedule.date === currentDate) !== undefined ? "on-1" : ""}`}
                onClick={() => {
                    if (day !== "")
                        clickDay(currentDate)
                }}
            >
                {day}
            </div>
        )
    }
}

function Note(prop : Schedule) {
    return (
        <div className="note">
            <h2>NOTES</h2>
            <div className="list">
                {prop.content.map((item, index) => <Item key={index} content={item}/>)}
            </div>
            <div className="action">
                <input/>
                <span>
                    <p>ADD</p>
                </span>                
            </div>
        </div>
    )
    function Item({content} : {content : string}) {
        return (
            <span className="item">
                <p>{content}</p>
            </span>
        )
    }
}

function Week() {
    const arr = useMemo(()=>{
        return [
            "SunDay",
            "MonDay",
            "TuesDay",
            "Wednesday",
            "ThursDay",
            "FriDay",
            "SaturDay"
        ]
    },[])
    return (
        <div className="week">
            {
                arr.map((item, index) => <Item key={index} text={item}/>)
            }
        </div>
    )
    function Item({text} : {text : string}) {
        return (
            <span>
                <p>{text}</p>
            </span>
        )
    }
}

export default Calendar