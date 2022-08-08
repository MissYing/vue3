import request from '@/utils/request'
import { createStore } from 'vuex'

/**
 * 获取全字典
 * @param {*} data
 */
 export function dictList(data) {
  return request({
      url: 'kfcloud-crm/sysConfig/querySysConfig',
      method: 'post',
      data: data
  })
}
