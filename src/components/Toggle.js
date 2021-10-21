import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useStore } from "../store";

import "./Toggle.css";

const Toggle = () => {
  const { microAnimations, setMicroAnimations } = useStore();

  const toggleSwitch = () => setMicroAnimations(!microAnimations);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="toggle-wrapper"
    >
      <Grid item>
        <h2>Microinteractions </h2>
      </Grid>
      <Grid item>
        <div
          className="switch"
          data-isOn={microAnimations}
          onClick={toggleSwitch}
        >
          <motion.div
            animate={{
              backgroundColor: microAnimations
                ? "rgb(0, 0, 0)"
                : "rgb(170, 170, 170)",
            }}
            className="handle"
            layout
            transition={spring}
          />
        </div>
      </Grid>
      <h2>{microAnimations ? "On" : "Off"}</h2>
    </Grid>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default Toggle;
