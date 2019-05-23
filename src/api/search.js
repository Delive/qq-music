import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParams, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })

  return jsonp(url, data, options)
}

export function search(query, page, zhida, perpage) {
  console.log(perpage)
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

  const data = Object.assign({}, commonParams, {
    w: query,
    p: page,
    perpage,
    n: perpage,
    catZhida: zhida ? 1 : 0,
    zhidaqu: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    remoteplace: 'txt.mqq.all',
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })

  return jsonp(url, data, options)
}


export function getSearch(query, page, zhida, perpage) {
  const url = '/api/search'
  const data = { 
    "g_tk": "67232076", 
    "inCharset": "utf-8", 
    "outCharset": "utf-8", 
    "notice": "0", 
    "format": "jsonp", 
    "w": query, 
    "p": page, 
    "perpage": perpage, 
    "n": perpage, 
    "catZhida": zhida ? 1 : 0,
    "zhidaqu": "1", 
    "t": "0", 
    "flag": "1", 
    "ie": "utf-8", 
    "sem": "1", 
    "aggr": "0", 
    "remoteplace": "txt.mqq.all", 
    "uin": "0", 
    "needNewCode": "1", 
    "platform": "h5"
  }

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}