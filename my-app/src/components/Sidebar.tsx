"use client";

import React from "react";
import { useDrag } from "react-dnd";

interface SidebarItemProps {
  type: string;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "BOX",
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag as unknown as React.Ref<HTMLDivElement>}
      className={`p-2 m-2 border rounded cursor-grab ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      {label}
    </div>
  );
};

export default function Sidebar() {
  return (
    <div className="p-4 w-48 border-r">
      <SidebarItem type="text" label="Text Block" />
      <SidebarItem type="image" label="Image Block" />
    </div>
  );
}
