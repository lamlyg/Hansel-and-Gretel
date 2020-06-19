import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Icon, Col, Card, Row } from 'antd';
import ImageSlider from '../../utils/ImageSlider';


import { useSelector } from "react-redux";



const { Meta } = Card;

function RecommendPage(props) {


    const user = useSelector(state => state.user)




    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(16)
    const [PostSize, setPostSize] = useState(0)
    const [SearchTerms, setSearchTerms] = useState("")

    const [Filters, setFilters] = useState({
        continents: []
    })

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
        }

        getProducts(variables)

    }, [props.user.userData])

    const getProducts = (variables) => {
        Axios.post('/api/product/getProducts_sold', variables)
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


    const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            filters: Filters,
            searchTerm: SearchTerms
        }
        getProducts(variables)
        setSkip(skip)
    }


    const renderCards = Products.map((product, index) => {
        let num=0;
        if(props.user.userData.favorite=="스낵류") {num=1;}
        else if(props.user.userData.favorite=="캔디류") {num=2;}
        else if(props.user.userData.favorite=="초콜릿") {num=3;}
        else if(props.user.userData.favorite=="음료류") {num=4;}
        else if(props.user.userData.favorite=="견과류") {num=5;}

        if(product.continents=== num){         
            return <Col lg={6} md={8} xs={24}>
                <Card
                    hoverable={true}
                    cover={<a href={`/product/${product._id}`} > <ImageSlider images={product.images} /></a>}
                >
                    <Meta
                        title={product.title}
                        description={`${product.price}$`}
                    />
                </Card>
            </Col>
        }
    })


    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>  추천 상품 <Icon type="rocket" />  </h2>
            </div>



            {Products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>준비 중...</h2>
                </div> :
                <div>
                    <Row gutter={[16, 16]}>

                        {renderCards}

                    </Row>


                </div>
            }
            <br /><br />

        </div>
    )
}

export default RecommendPage
