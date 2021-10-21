import { Grid } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { FiShoppingBag, FiHome, FiUser } from "react-icons/fi";
import { useHistory, useLocation } from "react-router";
import { spring } from "./Config";
import { useStore } from "../store/index.js";

import "./Menu.css";
import { useEffect } from "react";

const menuItems = [
  { icon: <FiHome />, name: "home", link: "/" },
  { icon: <FiShoppingBag />, name: "cart", link: "/cart" },
  { icon: <FiUser />, name: "profile", link: "/profile" },
];

const Menu = () => {
  const location = useLocation();
  const history = useHistory();
  const { shoppingCart, microAnimations } = useStore();
  const animationControls = useAnimation();

  useEffect(() => {
    microAnimations &&
      animationControls.start({ y: [-5, -30, -5], transition: { delay: 0.1 } });
  }, [shoppingCart, animationControls, microAnimations]);

  return (
    <motion.div
      initial={false}
      transition={
        microAnimations
          ? { stiffness: 500, mass: 1, damping: 60 }
          : { duration: 0 }
      }
      animate={{ y: location.pathname.includes("product") ? "100%" : "0%" }}
      className="menu-wrapper"
    >
      <Grid container justifyContent="space-around" alignItems="center">
        {menuItems.map((item) => (
          <Grid
            onClick={() => history.push(item.link)}
            style={{ position: "relative" }}
            item
            xs={4}
          >
            {item.icon}
            {location.pathname === item.link && (
              <motion.div
                layoutId={microAnimations ? "underline" : false}
                className="underline"
                initial={false}
                transition={spring}
              />
            )}
            {item.link === "/cart" && shoppingCart.length !== 0 && (
              <motion.div
                animate={animationControls}
                style={{ x: 10, y: -5 }}
                className="hint"
              >
                {shoppingCart.length}
              </motion.div>
            )}
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Menu;
