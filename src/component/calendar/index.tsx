import { useMemo } from "react"

function Calendar({date} : {date : Date}) {
    return (
        <div className="calendar">
            <Week/>
            <div className="board">
                <div className="container">
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
                    <Day day={"1"}/>
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
                arr.map((item) => <Item text={item}/>)
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