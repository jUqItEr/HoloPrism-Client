import axios from 'axios'

export default async function news() {
    // api에 맞게 수정해야됨
    await axios({
         method: 'get',
         header: {
             'Authorization': userToken,
             'Content-Type': 'application/json'
         },
         url: 'https://api.holoprism.hxlab.co.kr/'
    }).then(res => {

    })
}