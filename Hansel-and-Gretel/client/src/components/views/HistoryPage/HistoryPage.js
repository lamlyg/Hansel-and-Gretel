import React, { useState,useEffect } from 'react'
import { useSelector } from "react-redux";

import { Icon, Col, Card, Row } from 'antd';
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








    const { Meta } = Card;


    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(50)
    const [PostSize, setPostSize] = useState()

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
        }

        getProducts(variables)

    }, [props.user.userData])

    const getProducts = (variables) => {
        Axios.post('/api/product/getProducts_sold', variables) ////////////619
            .then(response => {
                if (response.data.success) {
                        if (variables.loadMore) {
                            setProducts([...Products, ...response.data.products])
                        } else {
                            setProducts(response.data.products)
                        }
                        setPostSize(response.data.postSize)
                    
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }


    const renderCards = Products.map((product, index) => {
        
        return <div>
            <table> 
                <tr>상품명: [{product.title}]</tr>
                <tr>총 판매량: {product.sold}개</tr>
                <br></br>
                            
 
                </table>
        </div>
        
    })











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
                            <th>주문번호</th>
                            <th>상품</th>
                            <th>수량</th>
                            <th>총 가격</th>
                            <th>주문일자</th>
                            <th>배송현황</th>  
                        </tr>
                    </thead>

                    <tbody>

                        {props.user.userData && props.user.userData.history &&
                            props.user.userData.history.map(item => (
                                <tr key={item.id}>
                                    <td>{item.paymentId}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price*item.quantity}$</td>
                                    <td>{item.dateOfPurchase}</td>
                                    <td>{item.ship}</td>
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
                    <h1>판매 현황</h1>
                </div>
                <br />
    
    
                {Products.length === 0 ?
                    <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                        <h2>준비 중...</h2>
                    </div> :
                    <div>
                        {renderCards}
    
                    </div>
                }
                <br /><br />
    
            </div>
        )
    }
}

export default HistoryPage