import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};
const Blogs = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);

  const fetchLatestBlogs = async () => {
    try {
      const res = await axios.get("https://jsonfakery.com/blogs");
      setLatestBlogs((prev) => [...prev, ...res.data]);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLatestBlogs();
  }, []);
  return (
    <div id="blogs" className="container mx-auto mt-20 tracking-tighter h-max p-6">
      <h2 className="mb-12 text-center text-4xl font-semibold flex flex-col">
        Latest Blogs
        <em className="text-sm text-neutral-500 font-normal">**This is a mock blog data**</em>
      </h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="mx-auto h-max rounded-lg grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6"
      >
        {latestBlogs.slice(0,4).map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" flex h-max  flex-col justify-between"
          >
            <div className="flex-1">
              <img
                src={blog.featured_image}
                alt=""
                className="object-cover h-full w-full rounded-t-xl min-h-64 max-h-64"
              />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <div>
                <p className="text-xl text-slate-30">{blog.title}</p>
                <p className="text-neutral-500">{blog.summary} </p>
                <p className="flex justify-between text-yellow-500">
                  Category:{blog.category}{" "}
                  <span className="text-neutral-400">
                    <p>{blog.created_at}</p>
                  </span>
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  <img
                    src={blog.user.profile_pic}
                    alt=""
                    className="size-10 rounded-full"
                  />
                </div>
                <h1>{blog.user.username}</h1>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blogs;
