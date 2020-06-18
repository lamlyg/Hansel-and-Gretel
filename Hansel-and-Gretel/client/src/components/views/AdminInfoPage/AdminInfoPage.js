import React, { useState,useEffect } from 'react'
//import SoldProduct from '../HistoryPage/Sections/SoldProduct'
import { useSelector } from "react-redux";

function AdminInfoPage(props) {
    const [Product, setProduct] = useState([])
   
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
                        </tr>
                    </thead>

                    <tbody>
                                <tr>
                                    <td>{user.userData.name}</td>
                                    <td>{user.userData.email}</td>
                                    <td>{user.userData.address}</td>
                                </tr>
                            
 
                    </tbody>
                </table>

                <div style={{ textAlign: 'center' }}>
                    <br></br><br></br><br></br><br></br>
                    <h1>회원 정보 조회</h1>
                </div>
                <br />

                <table>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>이메일</th>
                            <th>주소</th>
                            <th>관심 카테고리</th>
                        </tr>
                    </thead>

                    <tbody>
                                <tr>
                                    <td>{"Amy"}</td>
                                    <td>{"Amy@daum.net"}</td>
                                    <td>{"서울시"}</td>
                                    <td>{"초콜릿"}</td>
                                </tr>
                                <tr>
                                    <td>{"Jully"}</td>
                                    <td>{"Jully@gmail.com"}</td>
                                    <td>{"군포시"}</td>
                                    <td>{"스낵류"}</td>
                                </tr>
                                <tr>
                                    <td>{"Ellen"}</td>
                                    <td>{"Ellen@hanmail.net"}</td>
                                    <td>{"세종시"}</td>
                                    <td>{"견과류"}</td>
                                </tr>
                                <tr>
                                    <td>{"Belly"}</td>
                                    <td>{"Belly@gmail.com"}</td>
                                    <td>{"의정부시"}</td>
                                    <td>{"초콜릿"}</td>
                                </tr>
                                <tr>
                                    <td>{"John"}</td>
                                    <td>{"John@naver.com"}</td>
                                    <td>{"광운대학교"}</td>
                                    <td>{"캔디류"}</td>
                                </tr>
                            
 
                    </tbody>
                </table>
        
            </div>)

                

    
    
}








export default AdminInfoPage
