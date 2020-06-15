import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Icon, Col, Card, Row } from 'antd';
import ImageSlider from '../../utils/ImageSlider';
import { continents} from '../LandingPage/Sections/Datas';
import User from '../CartPage/Sections/UserCardBlock';

const { Meta } = Card;

function RecommendPage(props) {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState()
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
        Axios.post('/api/product/getProducts', variables)
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
        
        if(product.continents==2){
            //console.log(props.user._id)
            return <Col lg={6} md={8} xs={24}>
                <Card
                    hoverable={true}
                    cover={<a href={`/product/${product._id}`} > <ImageSlider images={product.images} /></a>}
                >
                    <Meta
                        title={product.title}
                        description={`${product.price}원`}
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

            {PostSize >= Limit &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={onLoadMore}>더 보기</button>
                </div>
            }

        </div>
    )
}

export default RecommendPage
