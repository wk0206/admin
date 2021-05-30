import { Card, Descriptions } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { GridContent, PageContainer, RouteContext } from '@ant-design/pro-layout';

import styles from './detail.less';
import { useState } from 'react';



export default () => {
    const [showMore, setShowMore] = useState(false)

    const description = (
        <RouteContext.Consumer>
            {({ isMobile }) => (
                <Descriptions className={styles.headerList} size="small" column={isMobile ? 1 : 2}>
                    <Descriptions.Item label="区块高度">115123</Descriptions.Item>
                    <Descriptions.Item label="区块哈希">sdfaksghsafhjsdklguwlahrjlaghjdksalfhjdskslahfjl</Descriptions.Item>
                    <Descriptions.Item label="普通交易量">1</Descriptions.Item>
                    <Descriptions.Item label="前一个哈希块">
                        <a href="">sdfaksghsafhjsdklguwlahrjlaghjdksalfhjdskslahfjl</a>
                    </Descriptions.Item>
                    <Descriptions.Item label="播报方">SASHJKAHUIFLHJKLFADJK</Descriptions.Item>
                    <Descriptions.Item label="后一个哈希块">
                        <a href="">sdfaksghsafhjsdklguwlahrjlaghjdksalfhjdskslahfjl</a>
                    </Descriptions.Item>
                    <Descriptions.Item label="时间">2021-05-21 15:38:29</Descriptions.Item>
                </Descriptions>
            )}
        </RouteContext.Consumer>
    );

    const moreNode = (
        <RouteContext.Consumer>
            {({ isMobile }) => (
                <Descriptions style={{ marginBottom: 24 }} column={isMobile ? 1 : 2}>
                <Descriptions.Item label="交易类型">普通</Descriptions.Item>
                <Descriptions.Item label="交易发起时间">2021-02-21 18:12:12</Descriptions.Item>
                <Descriptions.Item label="交易哈希">31slviaoyweuhr32orhufdsjklhshda78</Descriptions.Item>
                <Descriptions.Item label="交易发起金额">0</Descriptions.Item>
                <Descriptions.Item label="区块高度">123123</Descriptions.Item>
                <Descriptions.Item label="交易接收金额">0</Descriptions.Item>
                <Descriptions.Item label="出块时间">2021-02-21 18:12:12</Descriptions.Item>
                <Descriptions.Item label="手续费">0</Descriptions.Item>
            </Descriptions>
            )}
        </RouteContext.Consumer>
    )


    return (
        <PageContainer
            title="交易号：234231029431"
            className={styles.pageHeader}
            content={description}
            tabList={[
                {
                    key: 'base',
                    tab: '基础信息',
                },
                {
                    key: 'more',
                    tab: '详细信息',
                },
            ]}
            onTabChange={(key) => {
                if (key === 'more') {
                    setShowMore(true)
                } else {
                    setShowMore(false)
                }
            }}
        >
            <div className={styles.main}>
                <GridContent>
                    {showMore ? <Card style={{ marginBottom: 24 }}>{moreNode}</Card> : '' }
                    <Card title="交易编号：247wgtjwehfkasoy8t72iqtriwhgsg8o5" style={{ marginBottom: 24 }}>
                        <div className={styles.cardTitle}>记账交易</div>
                        <div className={styles.cardContent}>
                            <div className={styles.content}>
                                <div className={styles.name}>发起方</div>
                                <a className={styles.code}>sfjkslahjfklasheuw8ir2385o2hfjaf7diagb</a>
                            </div>
                            <RightOutlined style={{ fontSize: '35px', color: '#ccc',flex: 1 }} />
                            <div className={styles.content}>
                                <div className={styles.name}>接受方</div>
                                <a className={styles.code}>13247389q22623uyrlekwhfjdsaldstfia7678</a>
                                <div className={styles.price}>总金额：0</div>
                            </div>
                        </div>
                    </Card>
                </GridContent>
            </div>
        </PageContainer>
    )
}
