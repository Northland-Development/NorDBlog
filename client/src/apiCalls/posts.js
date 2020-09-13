import { apiConnectioon } from './requestSettings';

const getPosts = () => {
    return apiConnectioon.get('/')
}


export {getPosts};