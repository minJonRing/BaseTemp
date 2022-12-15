import { state as globalState } from '../global/index'
import { state as documentState } from '@/modules/yDocument/store/index'
const state = {
  ...globalState,
  ...documentState,
}
export default {
  namespaced: true,
  state,
}
