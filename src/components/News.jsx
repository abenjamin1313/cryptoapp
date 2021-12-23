import React from 'react'
import { Card, Row, Col, Avatar, Select, Typography } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'top+stories', count: simplified ? 6 : 12 })

    console.log('Data:', cryptoNews);

    if(!cryptoNews?.value) return 'Loading... ';

    return (
        <div></div>
    )
}

export default News;
