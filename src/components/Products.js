import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Products.css";

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

const Products = () => {
  return (
    <motion.div className="products-wrapper">
      <Grid container spacing={1}>
        {products.map((prod) => (
          <Grid item xs={6}>
            <Product prod={prod} />
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

const Product = ({ prod }) => {
  const [liked, setLiked] = useState(false);
  let history = useHistory();

  return (
    <div className="product">
      <motion.img
        layoutId={prod.id}
        onClick={() => history.push(`/product/${prod.id}`)}
        className="thumbnail"
        src={prod.image}
      />
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={9} className="price">
          {prod.price}
          <p className="info">{prod.name}</p>
        </Grid>
        <Grid onClick={() => setLiked(!liked)} className="heart" item>
          <Heart liked={liked} />
        </Grid>
      </Grid>
    </div>
  );
};

const Heart = ({ liked }) => {
  const variants = {
    liked: {
      fill: "rgba(255,0,0,1)",
      scale: [null, 0.9, 0.8, 0.9, 1, 1.1, 1.2, 1.1, 1],
      transition: { duration: 0.4 },
      strokeWidth: 0,
    },
    open: {
      fill: "rgba(255,0,0,0)",
      scale: 1,
      strokeWidth: 75,
      stroke: "rgb(150,150,150)",
    },
  };

  return (
    <motion.svg
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate={liked ? "liked" : "open"}
        variants={variants}
        onTap={{ scale: 0.9 }}
        d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"
      ></motion.path>
    </motion.svg>
  );
};

export default Products;
