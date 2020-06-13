import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">홈</a>
    </Menu.Item>
    <Menu.Item key="mail">
      <a href="/">추천상품</a>
    </Menu.Item>
    <Menu.Item key="mail">
      <a href="/">BEST상품</a>
    </Menu.Item>
    <Menu.Item key="mail">
      <a href="/">HIT상품</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu