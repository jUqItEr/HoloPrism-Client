import axios from 'axios'

export default async function weather() {
    // api에 맞게 수정해야됨
    const apiKey = ''

    const res = await axios({
         method: 'get',
         params: {
            
         },
         url: 'https://'
    })
    const info = res.data
    console.log(info)
    return res.data
}