import React, { useState,useEffect } from 'react'
//import SoldProduct from '../HistoryPage/Sections/SoldProduct'
import { useSelector } from "react-redux";
import Axios from 'axios'

function AdminInfoPage(props) {
    const [Product, setProduct] = useState([])
    const user = useSelector(state => state.user)
    const productId = props.match.params.productId

    useEffect(() => {
        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })

    }, [])

        return (
            <div style={{ width: '80%', margin: '3rem auto' }}>
                <div style={{ textAlign: 'center' }}>
                    <h1>회원 관리 및 조회</h1>
                </div>
                <br />

                <table>
                    <thead>
                        <tr>
                            <th>회원 이름</th>
                            <th>회원 이메일</th>
                            <th>관심 상품</th>
                            <th>회원 정보 삭제</th>
                        </tr>
                    </thead>

                    <tbody>
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.id}</td>
                                    <td>{user.id}</td>
                                    <td>{user.id}</td>
                                </tr>
                            
 
                    </tbody>
                </table>
            </div>
        )
    
}

export default AdminInfoPage
