"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search as SearchIcon } from "@kasuie/icon";

interface SearchProps {
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const Search = ({ onSearch, placeholder = "Search...", className = "" }: SearchProps) => {
  const [value, setValue] = useState("");

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && value.trim()) {
      onSearch?.(value.trim());
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed left-4 top-4 z-10 flex items-center gap-2 ${className}`}
    >
      <div 
        className="flex items-center gap-2 rounded-md bg-[rgba(var(--mio-main),0.1)] px-3 py-2 backdrop-blur"
      >
        <SearchIcon size={18} className="text-white" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleSearch}
          placeholder={placeholder}
          className="w-[200px] bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
        />
      </div>
    </motion.div>
  );
}; 