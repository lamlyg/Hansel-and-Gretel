import React, { useState,useEffect } from 'react'
import { useSelector } from "react-redux";

function UserInfoPage(props) {
    const user = useSelector(state => state.user)
        return (
            <div style={{ width: '80%', margin: '3rem auto' }}>
                <div style={{ textAlign: 'center' }}>
                    <h1>내 정보</h1>
                </div>
                <br />

                <table>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>이메일</th>
                            <th>주소</th>
                            <th>관심 상품</th>
                        </tr>
                    </thead>

                    <tbody>
                                <tr>
                                    <td>{user.userData.name}</td>
                                    <td>{user.userData.email}</td>
                                    <td>{user.userData.address}</td>
                                    <td>{user.userData.favorite}</td>
                                </tr>
                            
 
                    </tbody>
                </table>
            </div>
        )
    
}////////////618

export default UserInfoPage
