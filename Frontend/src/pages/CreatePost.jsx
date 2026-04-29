import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent from reloading the page on form submit

    const formData = new FormData(e.target); //get the form data
    
    axios
      .post("http://localhost:3000/create-post", formData)

      .then((res) => {
        navigate("/feed"); //navigate to feed page after successful post creation
      })
      .catch((err) => {
        console.log(err);
        alert("Error creating post");
      });
  };

  return (
    <section className="create-post-section">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" />
        <input
          type="text"
          name="caption"
          required
          placeholder="Enter caption "
        />
        <button type="submit">Create Post</button>
      </form>
    </section>
  );
};

export default CreatePost;
