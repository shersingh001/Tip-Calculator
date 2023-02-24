import React, { useState } from 'react';
import style from './CustomerTip.module.css';

const CustomerTip = (props) => {
    const [custmerCount, setCount] = useState("0");
    const [totalAmount, setTotalAmount] = useState(0);

    let tipAmount = 0;
    if(props.listData.length > 0){
        tipAmount = props.listData.map((list) => {
            if(list.service === "Excellent"){
                return tipAmount = Math.floor((list.enterAmount * 20) / 100)
            }
            else if(list.service === "Good"){
                return tipAmount = Math.floor((list.enterAmount * 15) / 100)
            }
            else if(list.service === "Average"){
                return tipAmount = Math.floor((list.enterAmount * 5) / 100)
            }
        });
    };
    let tip = 0;
    for(let i = 0; i < tipAmount.length; i++){
        tip += tipAmount[i]
    };

    const tipBtnHandler = () => {
        setCount(props.listData.length);
        setTotalAmount(tip)
    }
    return(
        <div className={style.table_container}>
            <div className={style.table_container_btn}>
                <button onClick={tipBtnHandler}>Calculate Tip & Customer</button>
            </div>
            <table>
              <tbody>
                <tr>
                    <th>Total Customer</th>
                    <th>Tip A</th>
                </tr>
                <tr>
                    <td>{custmerCount}</td>
                    <td>{totalAmount}/-</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CustomerTip;