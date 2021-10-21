import { motion } from "framer-motion";
import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { spring } from "./Config";

import "./TopBar.css";

const variants = {
  open: {
    width: "calc(100%)",
    borderRadius: "50px",
    paddingLeft: "1em",
  },
  closed: {
    borderRadius: "50px",
    width: "40px",
    paddingLeft: "0em",
  },
};

const TopBar = () => {
  const [openInput, setOpenInput] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <motion.div
      transition={{ delay: 0.2, ...spring }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="top-wrapper"
    >
      <motion.h5 animate={{ opacity: openInput ? 0 : 1 }} className="top-text">
        Hi, Alisa Wilson
      </motion.h5>
      <motion.input
        transition={{ ...spring }}
        variants={variants}
        animate={openInput ? "open" : "closed"}
        onClick={() => setOpenInput(true)}
        onChange={(e) => setSearch(e.target.value)}
        className="top-input"
        value={search}
      />
      {!openInput ? (
        <FiSearch
          onClick={() => setOpenInput(!openInput)}
          className="search-icon"
        />
      ) : (
        <FiX
          onClick={() => {
            setOpenInput(false);
            setSearch("");
          }}
          className="search-icon"
        />
      )}
    </motion.div>
  );
};

export default TopBar;
