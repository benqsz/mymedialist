import wretch from 'wretch'
import QueryStringAddon from 'wretch/addons/queryString'

export const JIKAN_BASE_URL = 'https://api.jikan.moe/v4'

export const JIKAN_SECOND_LIMIT = 3
export const JIKAN_MINUTE_LIMIT = 60

export const jikanApi = wretch(JIKAN_BASE_URL).addon(QueryStringAddon)
