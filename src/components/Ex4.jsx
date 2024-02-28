import { useState } from 'react'
import  moment  from 'moment'

function Ex4() {
    const [startdate, setstartdate] = useState()
    const [enddate, setenddate] = useState()
    const [checkdate, setcheckdate] = useState()
    const [isbetween, setisbetween] = useState()
    const [diff, setdiff] = useState()

    function checkDateRange() {
        let daysDifference = 0;
        const momentstartday = moment(startdate);
        const momentendday = moment(enddate);
        const momentcheckday = moment(checkdate);
        const between = momentcheckday.isBetween(momentstartday,momentendday);
        const difference = momentcheckday.diff(momentstartday,'days');
        console.log(between,difference);
        setisbetween(between);
        setdiff(difference);

        // if (checkdate >= startdate && checkdate <= enddate) {
        //     daysDifference = Math.floor((checkdate - startdate) / (24 * 60 * 60 * 1000));
        //     alert("true, " + daysDifference + " Days");
        // } else {
        //     daysDifference = Math.floor((startdate - checkdate) / (24 * 60 * 60 * 1000));
        //     alert("false, " + daysDifference + " Days");
        // }
    }
    return (
        <div>
            <h1>ข้อที่4 : </h1>
            <h2>INPUT</h2>
            <label htmlFor="startDate">วันที่เริ่มต้น (x):</label>
            <input type="date" id="startDate" name="startDate" onChange={(event) => { setstartdate(event.target.value) }} />

            <label htmlFor="endDate">วันที่สิ้นสุด (y):</label>
            <input type="date" id="endDate" name="endDate" onChange={(event) => { setenddate(event.target.value) }} />

            <label htmlFor="checkDate">วันที่ป้อนเข้า (m):</label>
            <input type="date" id="checkDate" name="checkDate" onChange={(event) => { setcheckdate(event.target.value) }} />
            <button onClick={checkDateRange}>หาช่วงช่วงวันระหว่าง</button>
            <h2>OUTPUT</h2>
            <table border={1}>
                <tr><td>อยู่ในช่วง</td><td>ห่างกันกี่วัน</td></tr>
                <tr><td>{isbetween?'อยู่':'ไม่อยู่'}</td><td>{diff}</td></tr>
            </table>
        </div>
    )
}
export default Ex4