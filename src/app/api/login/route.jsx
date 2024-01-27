import axios from 'axios'

export default async function getloggedInUser() {
    // api에 맞게 수정해야됨
    const userToken = 'res.headers.authorization'

    const res = await axios({
         method: 'get',
         headers: {
             'Authorization': userToken,
             'Content-Type': 'application/json',
         },
         url: 'https://api.holoprism.hxlab.co.kr/user/principal',
    })
    return res.data
}