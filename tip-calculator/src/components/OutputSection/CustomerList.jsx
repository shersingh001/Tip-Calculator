import React from 'react';
import style from './CustomerList.module.css';
import CustomerTip from "./CustomerTip";


const CustomerList = (props) => {

    let content = (<p>No Data Found !</p>);
    if(props.data.length > 0){
        content = props.data.map((list) => {
            return (
                <li key={list.id}>{list.customerName.toUpperCase()} OFFERING A TIP OF {list.enterAmount}/- RUPPE.  ABOUT SERVICE({list.service})</li>
            );
        });
    };
    return(
        <div>
            <div className={style.CustomerList_head}>
                <h3>Customer List</h3>
            </div>
            <hr />
            <div className={style.CustomerList_list}>
                <ul>
                    {content}
                </ul>
            </div>
            <CustomerTip listData={props.data}/>
        </div>
    )
};

export default CustomerList;