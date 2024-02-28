import { useState } from 'react'

function Ex1 (){
    const [num, setNum] = useState();


    function setNumber(event){
        setNum(event.target.value)
    }


    function resolve() {
        let result = [];
        let msg = '';
        let isResolve = false;

        for (let i = 1; i <= num; i++) {
            isResolve = false;
            msg = `${i}`;

            if(i % 3 === 0) {
                isResolve = true;
                msg += ' Ping';
            }
            if(i % 5 === 0) {
                isResolve = true;
                msg += ' Pong';
            }
            if(isResolve) {
                result.push(msg);
            }

        }
        return result;
    }

    return (
        <div>
            <h1>
                ข้อ1 : {num}
            </h1>
            <input type="number" placeholder='ป้อน N' onChange={setNumber} value={num} min={0}/>
            <br />
            <ul>
                {resolve().map(function (message,index){
                    return (
                        <li key={index}>{message}</li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Ex1