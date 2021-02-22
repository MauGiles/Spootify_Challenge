export const initialState = {
    user: null,
    playlists: [],
    categories: [],
    new_releases: [],
    playing: false,
    item: null,
    token: null,
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_NEW_RELEASES':
            return {
                ...state,
                new_releases: action.new_releases,
            }
        case 'SET_CATEGORIES':
            return{
                ...state,
                categories: action.categories,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        default:
            return state;
    }

}

export default reducer;