import React from "react";
import { useState } from "react";
import MenuConfig from "../../../config";
import * as Icon from '@ant-design/icons';
import { Menu , Layout } from 'antd';
const { Sider } = Layout;

// 动态获取菜单
const iconToElement = (icon) => React.createElement(Icon[icon]);

const items = MenuConfig.map((item) => {
    // 没有子菜单
    const child = {
        key: item.path,
        icon: iconToElement(item.icon), // 添加 icon 渲染
        label: item.label,
    };

    // 有子菜单
    if (item.children) {
        child.children = item.children.map((childItem) => {
            return {
                key: childItem.path,
                icon: iconToElement(childItem.icon),
                label: childItem.label,
            };
        });
    }
    return child;
});


const CommonAside = () => {
    const [collapsed] = useState(false);
    return(
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <h3 className="app-name">通用后台管理系统</h3>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={items}
                style={{
                    height: '100%',
                }}
            />
        </Sider>
    )
}

export default CommonAside;