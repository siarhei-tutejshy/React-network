const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState = {
    posts: [
        { post: 'Hi', id: 1, likes: 11 },
        { post: 'How are you', id: 2, likes: 12 },
        { post: 'How s your thing', id: 3, likes: 5 },
    ],
    newPostText: 'new post',
    profile: null,
};

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likes: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.body,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };

        default:
            return state;
    }
};

export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = (body) => ({
    type: UPDATE_NEW_POST_TEXT,
    body: body,
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile: profile,
});

export default profileReducer;
