import { motion } from "framer-motion";
import { FiChevronLeft } from "react-icons/fi";
import { useHistory, useParams } from "react-router";
import { useStore } from "../store";
import Config from "./Config";

import "./ProductPage.css";

const products = [
  {
    id: 1,
    price: "$130.00",
    name: "FLARE - Flared Jeans",
    image:
      "https://img01.ztat.net/article/spp-media-p1/ce3b669ae5ae4e209424c10880c3c973/6418183062254bbbafa722e5ceddd034.jpg?imwidth=1800",
  },
  {
    id: 2,
    price: "$80.00",
    name: "Jeans Skinny Fit",
    image:
      "https://img01.ztat.net/article/spp-media-p1/dd7d432ad6bc49a699752c112a04d6c3/4f360a7059634dce8accf90c535612aa.jpg?imwidth=1800",
  },
  {
    id: 3,
    price: "$100.00",
    name: "WIDE LEG - Flared Jeans",
    image:
      "https://img01.ztat.net/article/spp-media-p1/9107f602d18f45519300276be7ecd4b2/52cd371eeb96491ca1e8cb78aa56542a.jpg?imwidth=1800",
  },
  {
    id: 4,
    price: "$110.00",
    name: "ROWE - Straight leg jeans",
    image:
      "https://img01.ztat.net/article/spp-media-p1/ee0db501de9638908e7a046f0b6dc880/c60d9777f0fc47198444c6be4d62084b.jpg?imwidth=1800",
  },
];

const ProductPage = () => {
  const history = useHistory();
  const params = useParams();
  const prod = products.find((pro) => pro.id === parseInt(params.id));
  console.log(prod);

  return (
    <>
      <div>
        <motion.div
          transition={{ delay: 0.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => history.push("/")}
          className="back"
        >
          <FiChevronLeft />
        </motion.div>
        <motion.img
          layoutId={prod.id}
          className="product-image"
          src={prod.image}
        />
        <div style={{ padding: "0em 1.5em" }}>
          <motion.h2
            transition={{ delay: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="title"
          >
            {prod.name}
          </motion.h2>
          <motion.h5
            transition={{ delay: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="price"
          >
            {prod.price}
          </motion.h5>
          <Config />
          <motion.h5
            transition={{ delay: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="description"
          >
            Short V-neck button-up cardigan long <br /> sleeves bubble
          </motion.h5>
        </div>
      </div>
      <AddButton prod={prod} />
    </>
  );
};

const AddButton = ({ prod }) => {
  const history = useHistory();
  const { setShoppingCart } = useStore();

  return (
    <motion.button
      onClick={() => {
        setShoppingCart(prod);
        history.push("/");
      }}
      whileTap={{ scale: 0.95 }}
      className="add-to-cart"
    >
      Add to cart
    </motion.button>
  );
};

export default ProductPage;
