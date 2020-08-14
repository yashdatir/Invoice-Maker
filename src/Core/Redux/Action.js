import { ADD_IMG, ADD_TXT, ADD_HEAD, ADD_FOOT } from '../constants'

export const addImg = image => ({
    type: ADD_IMG,
    image
});
export const addTxt = text => ({
    type: ADD_TXT,
    text
});
export const addHead = heading => ({
    type: ADD_HEAD,
    heading
});
export const addFoot = footer => ({
    type: ADD_FOOT,
    footer
})