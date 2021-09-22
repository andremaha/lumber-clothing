import SECTIONS from './directory.data';

const INITIAL_STATE = {
    sections: SECTIONS
}

const DirectoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default DirectoryReducer;