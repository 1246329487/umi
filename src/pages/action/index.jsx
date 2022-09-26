import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {Link} from 'umi';
const { SubMenu } = Menu;
export default (props) => {
  const handleClick = (e) => {
    console.log('click ', e);
  };
  return (
    <>
    <div style={{display:'flex',height:'100%'}}>
      <Menu
        onClick={handleClick}
        style={{ width: '256px', height: '100%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme='dark'
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.ItemGroup key="g1" title="展示信息">
            <Menu.Item key="1"> <Link to ='/action/study'> Option 1 </Link></Menu.Item>
            <Menu.Item key="2"> <Link to ='/action/movie'> Option 2 </Link></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="操作信息">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
      <div style={{ padding: 20 ,width:'100%'}} >{ props.children }</div>
    </div>
    </>
  )
}