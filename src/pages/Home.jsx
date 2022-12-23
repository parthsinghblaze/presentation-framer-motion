import { motion } from "framer-motion";

const mainDiv = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  exit: {
    y: 100,
    opacity: 0,
  },
};

function Home() {
  return (
    <motion.div
      variants={mainDiv}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={"container py-5"}
    >
      <h1>Home Page</h1>
    </motion.div>
  );
}

export default Home;
