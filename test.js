/**
 * cron 0 0 * * * test.js
 */
const axios = require('axios')

axios({
    url: 'https://newton.gumingnc.com/newton-buyer/newton/buyer/promotion/user/couponList/v2',
    method: 'post',
    data: {
        "code": 0,
        "data": {
            "channelCode": 20,
            "brandId": 1,
            "page": {
                "pageNo": 1,
                "pageSize": 15,
                "totalSize": 1
            },
            "couponType": 0,
            "clearRed": false
        }
    },
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c11)XWEB/11275',
        authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJHT09ETUUuQ09NIiwiYXVkIjpbImFwcGxldCJdLCJpYXQiOjE3MjgzOTQwMDgsImp0aSI6IjhlNzgzNTAxLTIwMmItNDE1Ny1hYjgwLWFhYzFiODVhYzUxMiIsImVjcF9waG9uZSI6IjJwRERDV3BBU1FVTnRWZTdaN21yeWc9PSIsImNyZWF0ZV90aW1lc3RhbXAiOjE2NTM3MjYyNzUwMDAsImxvZ2luVHlwZSI6IjQxIiwib3Blbl9pZCI6Im9NekF3NVZZMzI0OWNvc0xPRHlaR3FJTjhVZFEiLCJuaWNrbmFtZSI6IueahCIsInVzZXJJZCI6IjE1MzA0NjUwMzgxNTIzMTg5NzgiLCJ2ZXJzaW9uIjoiMS4wIiwiZXhwIjoxNzI5MzY5NjA4LCJxdWV1ZV90b2tlbiI6IjIwMjQxMDA4MjEyODE4LTIwMjQxMDA4MjEyODE4LTk2NDI4NyJ9.avw2YVKXMK-PwNIOjGfnA_RKzojDqc9-7UNn7q_XeZaJQrEoMdfwGFWOVU--wthvZhNGk2YWiXGBcGn2KOeUtXw05K_kT-Er4BO8AlEHZWQ9m0MrChL4Q--0SlU-CPIY98Vk4mMhMzUJMzrUBvH5WTPb3Hw33Wh8HzMCX7dTO6Meug93MMlYsgjIN0VMf0X1Y0IDBVFx67f8tdrmxFnIJ-DIm_ZpwXY_tLs08cqgWZf_7_ycXLSchXYpd73JZVfV9uBKn-jCERdYgw7j7gmwTlTcXArdJ0NHMSYo35sXKU5ND9GiTEYh4wN5l2L1rrsBdYx8oMA_d1dpkGfB31ZJ_A'
    }
}).then(response => {
    console.log(response.data)
    
}).catch((error) => {
    console.log(error.response.data)
})
console.log('test');
11