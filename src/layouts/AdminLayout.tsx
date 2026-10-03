import { Avatar, Badge, Dropdown, Layout, Menu, Space, Typography } from 'antd'
import { AppstoreOutlined, BellOutlined, BuildOutlined, FileTextOutlined, HomeOutlined, LogoutOutlined, TeamOutlined, UserOutlined, WalletOutlined } from '@ant-design/icons'
import { Link, Outlet, useLocation } from 'react-router-dom'
const items = [
  { key:'/dashboard', icon:<HomeOutlined/>, label:<Link to="/dashboard">经营看板</Link> },
  { key:'/customers', icon:<TeamOutlined/>, label:<Link to="/customers">客户管理</Link> },
  { key:'/projects', icon:<BuildOutlined/>, label:<Link to="/projects">施工项目</Link> },
  { key:'/design', icon:<AppstoreOutlined/>, label:<Link to="/design">设计管理</Link> },
  { key:'/quotation', icon:<FileTextOutlined/>, label:<Link to="/quotation">报价合同</Link> },
  { key:'/finance', icon:<WalletOutlined/>, label:<Link to="/finance">财务中心</Link> }
]
export function AdminLayout(){ const { pathname } = useLocation(); return <Layout className="app-shell"><Layout.Sider width={236} theme="dark" className="sider"><div className="brand"><div className="brand-mark">筑</div><div><b>筑家云</b><span>家装经营管理</span></div></div><Menu theme="dark" mode="inline" selectedKeys={[pathname]} items={items}/><div className="sider-bottom">PROFESSIONAL<br/>HOME RENOVATION OS</div></Layout.Sider><Layout><Layout.Header className="topbar"><div><Typography.Text strong>早上好，张总</Typography.Text><Typography.Text type="secondary">  ·  今天也要稳步向前</Typography.Text></div><Space size="large"><Badge dot><BellOutlined className="notice"/></Badge><Dropdown menu={{items:[{key:'profile', icon:<UserOutlined/>, label:'个人中心'}, {key:'logout', icon:<LogoutOutlined/>, label:'退出登录'}]}}><Space><Avatar style={{background:'#1677ff'}}>张</Avatar><span>张一鸣</span></Space></Dropdown></Space></Layout.Header><Layout.Content className="content"><Outlet /></Layout.Content></Layout></Layout> }
