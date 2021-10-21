import { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import "./Categories.css";
import { useStore } from "../store";
import { spring } from "./Config";

const categories = ["Jeans", "Tank Tops", "Jumpers"];

const Categories = () => {
  const [selected, setSelected] = useState("Jeans");

  return (
    <motion.div>
      <AnimateSharedLayout>
        <motion.div className="categories-wrapper">
          {categories.map((cat) => (
            <Category selected={selected} setSelected={setSelected} cat={cat} />
          ))}
        </motion.div>
      </AnimateSharedLayout>
    </motion.div>
  );
};

const Category = ({ cat, selected, setSelected }) => {
  const { microAnimations } = useStore();

  const attributes = microAnimations
    ? {
        transition: { delay: 0.2, ...spring },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }
    : {};

  return (
    <>
      <motion.div
        {...attributes}
        onClick={() => setSelected(cat)}
        className="category"
      >
        <motion.p
          transition={{ duration: microAnimations ? 0.2 : 0 }}
          initial={{ margin: 0 }}
          animate={{
            zIndex: 10,
            color: selected === cat ? "#fff" : "#000",
          }}
        >
          {cat}
        </motion.p>
        {selected === cat && (
          <motion.div
            initial={{ borderRadius: 50 }}
            style={{ scale: 1.1 }}
            className="selected"
            layoutId={microAnimations ? "selected" : false}
          />
        )}
      </motion.div>
    </>
  );
};

export default Categories;
