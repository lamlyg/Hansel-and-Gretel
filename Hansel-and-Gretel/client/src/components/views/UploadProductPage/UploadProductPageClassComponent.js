import React, { Component } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import axios from 'axios';
import FileUpload from '../../utils/FileUpload';

const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
    { key: 1, value: "스낵류" },
    { key: 2, value: "캔디류" },
    { key: 3, value: "초콜릿" },
    { key: 4, value: "음료류" },
    { key: 5, value: "견과류" }
]

export class UploadProductPage extends Component {

    state = {
        title: '',
        description: '',
        continents: 1,
        images: [],
        price: 0
    }

    handleChangeTitle = (event) => {
        this.setState({ title: event.currentTarget.value })
    }

    handleChangePrice = (event) => {
        this.setState({ price: parseInt(event.currentTarget.value, 10) })
    }

    handleChangeDecsription = (event) => {
        // console.log(event.currentTarget.value)
        this.setState({ description: event.currentTarget.value })
    }

    handleChangeContinents = (event) => {
        this.setState({ continents: event.currentTarget.value })
    }

    onSubmit = (event) => {
        event.preventDefault();

        if (this.props.user.userData && !this.props.user.userData.isAuth) {
            return alert('로그인 후 이용해주세요')
        }

        if (!this.state.title || !this.state.description ||
            !this.state.continents || !this.state.images
            || !this.state.price) {
            return alert('빈칸을 채워주세요')
        }

        const variables = {
            writer: this.props.user.userData._id,
            title: this.state.title,
            description: this.state.description,
            images: this.state.images,
            continents: this.state.continents,
            price: this.state.price
        }

        axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('상품 이미지 등록 성공')
                    setTimeout(() => {
                        this.props.history.push('/')
                    }, 1000);
                } else {
                    alert('상품 이미지 등록 실패')
                }
            })
    }

    updateFiles = (newImages) => {
        this.setState({ images: newImages })
    }


    render() {
        return (
            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2} > 상품 등록하기</Title>
            </div>

            <Form onSubmit={this.onSubmit}>
               
               <FileUpload refreshFunction={this.updateFiles} />

                <br /><br />
                <label>상품</label>
                <Input
                    onChange={this.handleChangeTitle}
                    value={this.state.title}
                />
                <br /><br />
                <label>설명</label>
                <TextArea
                    onChange={this.handleChangeDecsription}
                    value={this.state.description}
                />
                <br /><br />
                <label>가격(원)</label>
                <Input
                    type="number"
                    onChange={this.handleChangePrice}
                    value={this.state.price}
                />
                <br /><br />
                <select onChange={this.handleChangeContinents}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br /><br />

                <Button type="primary" size="large" onClick={this.onSubmit}>
                    등록
                </Button>
            </Form>
        </div>
        )
    }
}

export default UploadProductPage
