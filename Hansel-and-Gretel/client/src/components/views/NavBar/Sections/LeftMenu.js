import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="home">
      <a href="/">홈</a>
    </Menu.Item>
    <Menu.Item key="rec">
      <a href="/recommend">추천상품</a>
    </Menu.Item>
    <Menu.Item key="best">
      <a href="/best">BEST상품</a>
    </Menu.Item>
    <Menu.Item key="new">
      <a href="/new">신상품</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu