import api_tision from '../../../api_tision';

const  getPostData = async () => {
    try{
        const post = await api_tision.get('http://127.0.0.1:8000/tision/posts/')
        console.log(post)
        return post
    }
    catch(error){
        console.log(error)
    }
}

export default getPostData