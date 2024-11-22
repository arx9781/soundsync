"use client";
import React, { useState, useRef, useEffect } from "react";
import { TfiViewList } from "react-icons/tfi";
import { TfiViewGrid } from "react-icons/tfi";
import { LuChevronsUpDown } from "react-icons/lu";

export function ViewModeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedView, setSelectedView] = useState("grid");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const views = [
    {
      value: "grid",
      label: "Grid View",
      icon: <TfiViewGrid className="h-4 w-4" />,
    },
    {
      value: "list",
      label: "List View",
      icon: <TfiViewList className="h-4 w-4" />,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleViewSelect = (view: string) => {
    setSelectedView(view);
    setIsOpen(false);
  };

  const currentView = views.find((view) => view.value === selectedView);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="group flex items-center space-x-2 rounded-lg bg-neutral-800/50 px-3 py-2 transition-colors hover:bg-neutral-700/50"
      >
        {currentView?.icon}
        <span className="text-sm">{currentView?.label}</span>
        <LuChevronsUpDown className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-neutral-200" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-lg border border-neutral-700 bg-neutral-800 shadow-lg">
          {views.map((view) => (
            <button
              key={view.value}
              onClick={() => handleViewSelect(view.value)}
              className={`
                w-full flex items-center space-x-2 px-3 py-2 text-left text-sm
                ${
                  selectedView === view.value
                    ? "bg-neutral-700 text-white"
                    : "hover:bg-neutral-700/50"
                }
                transition-colors
              `}
            >
              {view.icon}
              <span>{view.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
