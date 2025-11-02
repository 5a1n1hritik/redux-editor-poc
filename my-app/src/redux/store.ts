import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "@/redux/counter/counterSlice"
import editorReducer from "./editor/editorSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    editor: editorReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch