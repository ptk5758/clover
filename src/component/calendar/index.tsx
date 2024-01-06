import { useMemo } from "react"

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
    return (
        <div className="calendar">
            <Week/>
            <div className="board">
                <div className="container">
                    {
                        dateArray.map((date, index) => <Day key={index} day={date ? date.toString() : ""}/>)
                    }
                </div>
                <Note/>

            </div>
            
        </div>
    )
    function Day({day} : {day : string}) {
        return (
            <div className="item">{day}</div>
        )
    }
}

function Note() {
    return (
        <div className="note">
            <h2>NOTES</h2>
            <div className="list">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
            <div className="action">
                <input/>
                <span>
                    <p>ADD</p>
                </span>                
            </div>
        </div>
    )
    function Item() {
        return (
            <span className="item">
                <p>뿌슝빠슝하기</p>
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