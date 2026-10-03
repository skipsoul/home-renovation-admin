import { dashboard } from '../mock/dashboard'; import { wait } from './request'
export const getDashboard = () => wait(dashboard)
