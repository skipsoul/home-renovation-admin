import { customers } from '../mock/customers'; import { wait } from './request'
export const getCustomers = () => wait(customers)
