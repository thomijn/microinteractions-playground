import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useStore } from "../store";
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
  const { microAnimations } = useStore();

  const attributes = microAnimations
    ? {
        transition: { delay: 0.2, ...spring },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }
    : {};

  return (
    <motion.div {...attributes}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Color microAnimations={microAnimations} />
        </Grid>
        <Grid item xs={6}>
          <Size microAnimations={microAnimations} />
        </Grid>
      </Grid>
    </motion.div>
  );
};

const Color = ({ microAnimations }) => {
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
                layoutId={microAnimations ? "outline-color" : false}
                className="outline-color"
              />
            )}
          </div>
        ))}
      </Grid>
    </div>
  );
};

const Size = ({ microAnimations }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div>
      <p className="color-text">
        Size <span className="color-text-selected">{selectedSize}</span>
      </p>
      <Grid container justifyContent="space-between">
        {sizes.map((size) => (
          <Grid
            item
            component={motion.div}
            transiton={{ duration: 0.1 }}
            onClick={() => setSelectedSize(size)}
            className="size-item"
          >
            <motion.h5
              transition={{ duration: microAnimations ? 0.2 : 0 }}
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
                layoutId={microAnimations ? "outline-size" : false}
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
