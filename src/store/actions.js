import { APP_TYPES } from './types'

export default {
  saveData(context, payload) {
    context.commit(APP_TYPES.SAVE_DATA, payload)
  },
  saveDataAsync(context, payload) {
    return new Promise(resolve => {
      setTimeout(() => {
        context.commit(APP_TYPES.SAVE_DATA, payload)
        resolve(true)
      }, 500)
    })
  }
}
