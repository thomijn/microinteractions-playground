import { motion } from "framer-motion";

import TopBar from "./TopBar";
import Categories from "./Categories";
import Products from "./Products";
import "./Home.css";
import { useStore } from "../store";

const Home = () => {
  const { microAnimations } = useStore();

  const attributes = microAnimations
    ? {
        transition: { delay: 0.2 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }
    : {};

  return (
    <>
      <div className="container">
        <TopBar />
        <motion.h2 {...attributes} className="home-title">
          The most popular
        </motion.h2>
        <motion.h4 {...attributes} className="home-sub">
          clothes today
        </motion.h4>
        <Categories />
        <Products />
      </div>
    </>
  );
};

export default Home;
