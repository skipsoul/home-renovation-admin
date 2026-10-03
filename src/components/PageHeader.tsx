import { Breadcrumb, Button, Space, Typography } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
export function PageHeader({ title, subtitle, action = '新建' }: { title: string; subtitle: string; action?: string }) { return <div className="page-header"><div><Breadcrumb items={[{ title: '工作台' }, { title }]} /><Typography.Title level={2}>{title}</Typography.Title><Typography.Text type="secondary">{subtitle}</Typography.Text></div><Space><Button>导出数据</Button><Button type="primary" icon={<PlusOutlined />}>{action}</Button></Space></div> }
