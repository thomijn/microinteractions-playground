import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import "./Config.css";

const colors = [
  { text: "Oceanic blue", code: "#bed5ec" },
  { text: "Silver gray", code: "#bfbfbf" },
  { text: "Yellow", code: "#fce98d" },
];
const sizes = ["X", "XS", "M"];
export const spring = {
  type: "spring",
  stiffness: 500,
  damping: 40,
  mass: 1,
};

const Config = () => {
  return (
    <motion.div
      transition={{ delay: 0.2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Color />
        </Grid>
        <Grid item xs={6}>
          <Size />
        </Grid>
      </Grid>
    </motion.div>
  );
};

const Color = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div>
      <p className="color-text">
        Color <span className="color-text-selected">{selectedColor.text}</span>
      </p>
      <Grid container>
        {colors.map((color) => (
          <div
            onClick={() => setSelectedColor(color)}
            className="color-item"
            style={{ background: color.code }}
          >
            {selectedColor.code === color.code && (
              <motion.div
                transition={spring}
                initial={false}
                layoutId="outline-color"
                className="outline-color"
              />
            )}
          </div>
        ))}
      </Grid>
    </div>
  );
};

const Size = () => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div>
      <p className="color-text">
        Size <span className="color-text-selected">{selectedSize}</span>
      </p>
      <Grid container justifyContent="space-around">
        {sizes.map((size) => (
          <Grid
            item
            component={motion.div}
            transiton={{ duration: 0.1 }}
            onClick={() => setSelectedSize(size)}
            className="size-item"
          >
            <motion.h5
              animate={{
                color: selectedSize === size ? "#fff" : "#000",
              }}
            >
              {size}
            </motion.h5>
            {selectedSize === size && (
              <motion.div
                transition={spring}
                initial={false}
                layoutId="outline-size"
                className="outline-size"
              />
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Config;
