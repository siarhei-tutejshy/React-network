const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'


let profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likes: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.body;
            return state;
        default:
                return state;
    }
};

export const addPostActionCreator = () =>  ({type: ADD_POST})

export const updateNewPostTextActionCreator = (body) =>  ({type: UPDATE_NEW_POST_TEXT, body: body})

export default profileReducer;

