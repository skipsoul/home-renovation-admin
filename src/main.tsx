import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import 'antd/dist/reset.css'
import './styles/global.css'
import { AppRouter } from './router'
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><ConfigProvider locale={zhCN} theme={{ token: { colorPrimary: '#1677ff', borderRadius: 10, fontFamily: 'Inter, PingFang SC, Microsoft YaHei, sans-serif' } }}><AppRouter /></ConfigProvider></React.StrictMode>)
