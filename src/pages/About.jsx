import { useState } from "react";
import { motion } from "framer-motion";

const mainDivVariant = {
  exit: {
    y: 100,
    opacity: 0,
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const formVariant = {
  hidden: {
    y: -100,
    opacity: 0.5,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const listVarient = {
  hidden: {
    x: 100,
  },
  visible: {
    x: 0,
  },
};

function About() {
  const [tableData, setTableData] = useState([]);
  const [formValue, setFormValue] = useState({
    name: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name);
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  function handleSubmit() {
    setTableData([...tableData, formValue]);
    setFormValue({ name: "" });
  }

  function handleDelete(i) {
    let newData = tableData.filter((item, index) => {
      return index !== i;
    });

    setTableData(newData);
  }

  return (
    <motion.div
      variants={mainDivVariant}
      exit="exit"
      className={"container py-5"}
    >
      <motion.h1 variants={headingVariants} initial="hidden" animate="visible">
        About Page
      </motion.h1>
      <div className="row">
        <motion.div
          className="col-md-6 offset-md-3"
          variants={formVariant}
          initial="hidden"
          animate="visible"
        >
          <input
            name="name"
            className="form-control mb-4"
            value={formValue.name}
            onChange={(e) => handleChange(e)}
            placeholder={"Enter List"}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="btn btn-primary w-100"
            onClick={handleSubmit}
          >
            Add Item
          </motion.button>
        </motion.div>

        <hr className={"my-5"} />
        <div className="col-md-6 offset-md-3">
          <ul class="list-group">
            {tableData.map((item, i) => {
              return (
                <motion.li
                  variants={listVarient}
                  initial="hidden"
                  animate="visible"
                  key={i}
                  class="list-group-item"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDelete(i)}
                >
                  {item.name}
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
