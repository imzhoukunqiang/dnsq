import type { AxiosResponse } from 'axios'
import type { Count } from '../types/types'
import instance from './axios-config'

// 获取欢迎信息
export async function fetchHello(): Promise<string> {
  return (await instance.get('/home/hello') as AxiosResponse<string>).data
}

// 获取点击计数
export async function fetchClickCountById(id: number): Promise<Count> {
  return (await instance.get(`/home/click-count/${id}`) as AxiosResponse<Count>).data
}

// 增加点击计数
export async function incrementClickCountById(id: number): Promise<Count> {
  return (await instance.put(`/home/click-count/${id}/increment`) as AxiosResponse<Count>).data
}

export default {
  fetchHello,
  fetchClickCountById,
  incrementClickCountById,
}
