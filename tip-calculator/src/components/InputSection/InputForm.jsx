import React, { useState } from 'react';
import style from './InputForm.module.css';

const InputForm = (props) => {
    const [inputValue, setInputValue] = useState({
        enterAmount : "",
        service : "",
        customerName : "",
    });

    const amountChangeHandler = (event) => {
        setInputValue((preValue) => {
            return {
                ...preValue,
                enterAmount : event.target.value,
            }
        })
    }

    const optionHandler = (event) => {
        setInputValue((preValue) => {
            return {
                ...preValue,
                service : event.target.value,
            }
        });
    };

    const customerNameHandler = (event) => {
        setInputValue((preValue) => {
            return {
                ...preValue,
                customerName : event.target.value,
            }
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const userInputData = {
            enterAmount : inputValue.enterAmount,
            service : inputValue.service,
            customerName : inputValue.customerName,
        };
        if(userInputData.service.trim().length === 0){
            alert("Please Choose Service");
            return;
        }
        if(userInputData.customerName.length ===0){
            return;
        }

        props.onInputFormData(userInputData)
    };

    return(
        <form onSubmit={submitHandler}>
            <div className={style.form_main}>
                <div className={style.form_main_amountSection}>
                    <label>Enter your bill amount</label>
                    <input type="number"
                        placeholder='Enter amount...'
                        min={0}
                        onChange={amountChangeHandler}
                    />
                </div>
                <hr />
                <div className={style.form_main_serviceSection}>
                    <div className={style.form_main_service}>
                        <label>How was the service</label>
                        <select onChange={optionHandler}>
                            <option defaultChecked={"-1"}>Choose..</option>
                            <option value="Excellent">Excellent - 20%</option>
                            <option value="Good">Good - 10%</option>
                            <option value="Average">Average - 5%</option>
                        </select>
                    </div>
                    <div className={style.form_main_customer}>
                        <label>Customer Name </label>
                        <input type="text" placeholder='Name Type here...' onChange={customerNameHandler}/>
                        <button type="submit">Add Customer</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default InputForm;