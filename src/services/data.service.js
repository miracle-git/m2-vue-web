import { CONTENT_TYPE } from 'm2-core'
import http from 'utils/http'
import api from 'config/api.conf'

export const getDictList = () => http.get(api.getDictList, { loading: true })
export const addDataItem = (params) => http.post(api.user.info, { params, headers: { 'Content-Type': CONTENT_TYPE.FORM } })
