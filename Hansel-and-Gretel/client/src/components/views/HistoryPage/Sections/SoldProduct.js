import React, { useEffect, useState } from 'react'
import { Descriptions } from 'antd';

function SoldProduct(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    return (
        <div>
            <Descriptions title="매출통계">
                <Descriptions.Item label="Product">{Product.title}</Descriptions.Item>
                <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default SoldProduct
