import { motion } from "framer-motion";

import TopBar from "./TopBar";
import Categories from "./Categories";
import Products from "./Products";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <TopBar />
        <motion.h2
          transition={{ delay: 0.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="home-title"
        >
          The most popular
        </motion.h2>
        <motion.h4
          transition={{ delay: 0.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="home-sub"
        >
          clothes today
        </motion.h4>
        <Categories />
        <Products />
      </div>
    </>
  );
};

export default Home;
