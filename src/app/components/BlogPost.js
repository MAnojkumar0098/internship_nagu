"use client";
import { useState, useEffect } from "react";

const BlogPost = () => {
  // State to hold the blog data fetched from the server
  let [data, setData] = useState([]);

  // State to hold the form inputs
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    content: "",
  });

  // Fetch the existing blog posts from the backend on component mount
  useEffect(() => {
    fetch("http://localhost:2000")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => {
        console.log("error: " + e);
      });
  }, []); // Empty array ensures it only runs once

  // Handle form input changes
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Handle form submission and append the new data to the blog
  function handleSubmit(e) {
    e.preventDefault();

    // Add the new post to the existing data array
    setData((prevData) => [
      ...prevData,
      formData, // Append the new blog data
    ]);

    // Clear the form inputs
    setFormData({
      name: "",
      date: "",
      content: "",
    });
  }

  return (
    <div>
      {/* Form for submitting new blog post */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Author Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <br />
        <input
          type="text"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
        <br />
        <input
          type="text"
          name="content"
          placeholder="Blog Content"
          value={formData.content}
          onChange={handleInputChange}
          required
        />
        <br />
        <button type="submit">create BLOG</button>
      </form>

      {/* Display existing and newly added blog posts */}
      <div className="blog max-width-95 margin-auto">
        <h1 className="m-1">Blogging</h1>
        {data.map((dat, index) => (
          <div key={index} className="blogTextAll p-1">
            <div className="blogHead m-1 text-center">
              <hr />
            </div>
            <div className="blogPostMeta">
              <div className="authorName text-muted">
                <b>{dat.name}</b>
                <br />
                {dat.date}
              </div>
            </div>
            <div className="blogText m-2 p-1">
              <p>{dat.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
