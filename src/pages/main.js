import React from 'react';
import "./main.css"
import { Layout,theme } from 'antd';
import CommonAside from "./components/aside";
import CommonHeader from "./components/header";
const { Content } = Layout;
const Main = () => {
    // const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout className="main-container">
            <CommonAside />
            <Layout>
                {/*<Header*/}
                {/*    style={{*/}
                {/*        padding: 0,*/}
                {/*        background: colorBgContainer,*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Button*/}
                {/*        type="text"*/}
                {/*        style={{*/}
                {/*            fontSize: '16px',*/}
                {/*            width: 64,*/}
                {/*            height: 64,*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</Header>*/}
                <CommonHeader />
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};
export default Main;