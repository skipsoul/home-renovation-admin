import { Tag } from 'antd'
const colors: Record<string,string> = { '水电施工':'blue', '泥木施工':'gold', '设计确认':'purple', '竣工验收':'green', '全包整装':'blue', '局部改造':'gold', '设计施工':'purple', '全屋定制':'cyan' }
export const StatusTag = ({ value }: { value: string }) => <Tag color={colors[value] || 'default'}>{value}</Tag>
