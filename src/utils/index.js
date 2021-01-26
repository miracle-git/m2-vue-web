import { getEnvConfig } from 'm2-core'
import config from 'config/env.conf'

export const env = config
export const conf = (key = '') => getEnvConfig(config, key)
