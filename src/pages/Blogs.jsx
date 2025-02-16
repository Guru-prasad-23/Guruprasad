import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Skeleton from "../components/Skeleton";

const API_URL = "https://jsonfakery.com/blogs";
const PAGE_SIZE = 5; // Number of blogs to fetch per request

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  // Fetch blogs function
  const fetchBlogs = useCallback(async () => {
    if (!hasMore) return;
    setLoading(true);

    try {
      const response = await axios.get(API_URL);
      console.log("API Response:", response.data); // Debugging step

      if (Array.isArray(response.data) && response.data.length > 0) {
        setBlogs((prev) => [
          ...prev,
          ...response.data.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
        ]);
        setHasMore(response.data.length > blogs.length + PAGE_SIZE);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [page, hasMore, blogs.length]);

  // Initial fetch
  useEffect(() => {
    fetchBlogs();
  }, [page]);

  // Debounced scroll event listener
  useEffect(() => {
    let debounceTimer;
    const handleScroll = () => {
      if (debounceTimer) clearTimeout(debounceTimer);

      debounceTimer = setTimeout(() => {
        if (
          window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 500 &&
          !loading &&
          hasMore
        ) {
          setPage((prev) => prev + 1);
        }
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="container pl-26 pr-26 mt-28 mx-auto">
      <h2 className="text-center text-4xl font-semibold mb-8">Blogs</h2>

      {/* Render Blogs */}
      <div className="p-6 mb-6 border-b border-gray-300 grid grid-cols-4 gap-6 mx-auto w-full">
        {blogs.slice(0, 120).map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full p-2 flex flex-col justify-between"
          >
            <div className="flex-1">
              <img
                src={blog.featured_image}
                alt=""
                className="object-cover h-full rounded-t-xl min-h-64 max-h-64"
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
      </div>

      {/* Show Skeleton while fetching */}
      {loading && (
        <div>
          {[...Array(PAGE_SIZE)].map((_, i) => (
            <Skeleton key={i} />
          ))}
        </div>
      )}

      {!hasMore && (
        <p className="text-center text-gray-500 mt-6">No more blogs</p>
      )}
    </div>
  );
};

export default Blogs;
