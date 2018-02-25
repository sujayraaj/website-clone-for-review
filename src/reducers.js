export default (state='',{type, payload}) => {
    switch(type) {
        case 'ACTION1':
            return payload;
        case 'ACTION2':
            return 'ACTION2';
        default:
            return state;
    }
}