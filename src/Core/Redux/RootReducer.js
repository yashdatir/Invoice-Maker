import { ADD_IMG, ADD_TXT, ADD_HEAD, ADD_FOOT } from '../constants';

const INITIAL_STATE = {
    image: 'https://placekitten.com/200/300',
    text: 'Some random Text',
    heading: 'Hello World... Write your Heading here',
    footer: 'Footer Text',
    table: []
};

export function rootReducer( state = INITIAL_STATE, action ){
    switch ( action.type ) {
        case ADD_IMG :
            state.image = action.image;
            return {...state}; 
        case ADD_TXT :
            state.text = action.text;
            return {...state};
        case ADD_HEAD :
            state.heading = action.heading;
            return {...state};
        case ADD_FOOT :
            state.footer = action.footer;
            return {...state};
        default :
            return {...state};
    }
}