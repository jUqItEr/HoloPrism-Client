import axios from 'axios'

export default async function news() {
    // api에 맞게 수정해야됨
    const res = await axios({
         method: 'get',
         
         url: ''
    })
    const info = res.data
    console.log(info)
    return res.data
}