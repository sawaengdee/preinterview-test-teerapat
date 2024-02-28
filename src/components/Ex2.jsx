import { useState } from 'react'

function Ex2 (){
    const [num, setNum] = useState();
    const [num2, setNum2] = useState();
    const [num3, setNum3] = useState();

    function setNumber(event){
        setNum(event.target.value)
    }
    function setNumber2(event){
        setNum2(event.target.value)
    }
    function setNumber3(event){
        setNum3(event.target.value)
    }

    function resolve() {
        let result = [];
        let msg = '';
        let isResolve = false;
        if(!num2 || !num3){
            return []
        }
        for (let i = 1; i <= num; i++) {
            isResolve = false;
            msg = `${i}`;

            if(i % num2 === 0) {
                isResolve = true;
                msg += ' Ping';
            }
            if(i % num3 === 0) {
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
                ข้อ2 : {num}
            </h1>
            <input type="number" placeholder='ป้อน N' onChange={setNumber} value={num} min={0}/>
            <input type="number" placeholder='ป้อน i' onChange={setNumber2} value={num2} min={0}/>
            <input type="number" placeholder='ป้อน j' onChange={setNumber3} value={num3} min={0}/>
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
export default Ex2