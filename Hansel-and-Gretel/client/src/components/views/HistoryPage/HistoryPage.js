import React, { useState,useEffect } from 'react'
import SoldProduct from './Sections/SoldProduct'
import { useSelector } from "react-redux";
import { Row, Col } from 'antd';
import Axios from 'axios'

function HistoryPage(props) {
    const user = useSelector(state => state.user)
    const [Product, setProduct] = useState([])



    const productId = props.match.params.productId


    
    useEffect(() => {
        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })
            console.log(Product.title)

    }, [])




    if(!user.isAdmin){
        return (
        
            <div style={{ width: '80%', margin: '3rem auto' }}>
                <div style={{ textAlign: 'center' }}>
                    <h1>주문내역</h1>
                </div>
                <br />

                <table>
                    <thead>
                        <tr>
                            <th>성함</th>
                            <th>상품</th>
                            <th>가격</th>
                            <th>수량</th>
                            <th>주문일자</th>
                        </tr>
                    </thead>

                    <tbody>

                        {props.user.userData && props.user.userData.history &&
                            props.user.userData.history.map(item => (
                                <tr key={item.id}>
                                    <td>{props.user.userData.name}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}$</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.dateOfPurchase}</td>
                                </tr>
                            ))}

                    </tbody>
                </table>
            </div>
        )
    }
    else{
        
        return (
            <div style={{ width: '80%', margin: '3rem auto' }}>
                <div style={{ textAlign: 'center' }}>
                    <h1>판매 내역</h1>
                </div>
                <br />

                <table>
                    <thead>
                        <tr>
                        <th>결제정보</th>
                        <th>가격</th>
                        <th>수량</th>
                        <th>주문일자</th>
                        </tr>
                    </thead>

                    <tbody>

                    {props.user.userData && props.user.userData.history &&
                        props.user.userData.history.map(item => (
                            <tr >
                                <td>{item.id}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.dateOfPurchase}</td>
                            </tr>
                        ))}  


                    </tbody>
                </table>



            </div>
        )
    }
}

export default HistoryPage
