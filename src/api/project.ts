import { projects } from '../mock/projects'; import { wait } from './request'
export const getProjects = () => wait(projects)
