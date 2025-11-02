import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EditorItem {
  id: string;
  type: string;
  content: string;
}

interface EditorState {
  items: EditorItem[];
}

const initialState: EditorState = {
  items: [],
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<EditorItem>) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action: PayloadAction<{ id: string; content: string }>) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) item.content = action.payload.content;
    },
  },
});

export const { addItem, updateItem } = editorSlice.actions;
export default editorSlice.reducer;
