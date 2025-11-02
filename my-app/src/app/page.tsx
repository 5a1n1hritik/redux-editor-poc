"use client";

import React from "react";
import { decrement, increment } from "@/redux/counter/counterSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "@/components/Sidebar";
import Canvas from "@/components/Canvas";
import DndProviderWrapper from "@/redux/providers/DndProviderWrapper";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex py-10 px-10">
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          (Decrement)
        </button>
        <span> Currently count is {count} </span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          (Increment)
        </button>
      </div>
      <DndProviderWrapper>
      <div className="flex py-5">
        <Sidebar />
        <Canvas />
      </div>
      </DndProviderWrapper>
    </div>
  );
}
