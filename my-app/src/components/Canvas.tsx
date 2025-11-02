"use client";

import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem, EditorItem } from "@/redux/editor/editorSlice";
import { RootState } from "@/redux/store";

export default function Canvas() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.editor.items);

  console.log("Current JSON from Redux:", items);

  const [, drop] = useDrop(() => ({
    accept: "BOX",
    drop: (item: { type: string }) => {
      dispatch(
        addItem({
          id: Date.now().toString(),
          type: item.type,
          content: item.type === "text" ? "New text" : "Image placeholder",
        })
      );
    },
  }));

  const handleContentChange = (id: string, newContent: string) => {
    dispatch(updateItem({ id, content: newContent }));
  };

  return (
    <div
      ref={drop as unknown as React.Ref<HTMLDivElement>}
      className="flex-1 p-4 min-h-screen bg-gray-50"
    >
      {items.map((i: EditorItem) => (
        <div
          key={i.id}
          className="border p-2 m-2 bg-white shadow rounded hover:shadow-md transition"
        >
          <strong className="block mb-1 text-sm text-gray-600">
            {i.type.toUpperCase()}
          </strong>

          {i.type === "text" ? (
            <input
              type="text"
              value={i.content}
              onChange={(e) => handleContentChange(i.id, e.target.value)}
              className="w-full border px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ) : (
            <div className="flex flex-col gap-2">
              <div className="text-gray-700">{i.content}</div>
              <button
                onClick={() =>
                  handleContentChange(i.id, "Updated Image Placeholder")
                }
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
              >
                Update Image
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
