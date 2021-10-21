import { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import "./Categories.css";

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
  return (
    <>
      <motion.div
        transition={{ delay: 0.2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setSelected(cat)}
        className="category"
      >
        <motion.p
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
            layoutId="selected"
          />
        )}
      </motion.div>
    </>
  );
};

export default Categories;
