/**
 * 
 * ** areaAll {   定义的一个全局数据
 * **** initValue   数据的初始值
 * **** option      配置项
 * ** }
 * }
 */
import { generateState, generateGetters } from './fn'
// 字典名称

// 字典集合
export const store = {

  // 专家专业类别
  expertProfessionalZd: {
    initValue: [],
    option: {
      url: '/expertProfessional',
    },
  },
  // 专家类别
  expertTypeZd: {
    initValue: [],
    option: {
      url: '/expertType',
    },
  },

}

// state getters
const state = generateState(store)
const getters = generateGetters(store)

// 导出
export {
  getters,
  state
}
