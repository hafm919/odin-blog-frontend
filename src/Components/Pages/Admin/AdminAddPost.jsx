import { Editor } from "@tinymce/tinymce-react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
function AdminAddPost({ postId, setPostId }) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const initialize = async () => {
      if (postId != null) {
        const response = await fetch(`${API_URL}/posts/${postId}`);
        const post = await response.json();
        setTitle(post.title);
        setContent(post.content);
        setImageFile(null);
        setUploadedImage(`${API_URL}/${post.imageUrl}`);
      }
    };
    initialize();
  }, []);

  function showImage(e) {
    const img = e.target.files?.[0];
    setUploadedImage(img ? URL.createObjectURL(img) : undefined);
    setImageFile(img);
  }

  async function handleSubmit(e) {
    let apiEndPoint = `${API_URL}/posts`;
    let method = "POST";
    if (postId) {
      apiEndPoint = `${API_URL}/posts/${postId}`;
      method = "PUT";
    }
    console.log(method);
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("categories", categories);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await fetch(apiEndPoint, {
        method,
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      if (response.ok) {
        alert("Post saved successfully!");
        setTitle("");
        setUploadedImage(null);
        setImageFile(null);
        setContent("");
        setPostId(null);
        window.location.reload();
      } else {
        const errorData = await response.json();
        alert("Failed to create post: " + errorData.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while creating the post: " + error.message);
    }
  }

  return (
    <form
      className="flex flex-col gap-4  min-h-screen p-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        name="title"
        className=" border-b border-black focus:outline-none font-semibold text-2xl"
        required
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Category, comma seperated"
        className=" border-b border-black focus:outline-none"
        name="categories"
        onChange={(e) => {
          setCategories(e.target.value);
        }}
      ></input>
      <div className="h-1/2 m-2 flex flex-col gap-2  place-content-center items-center border-2 border-blue-300 border-dashed rounded-md min-h-min">
        {uploadedImage && (
          <img src={uploadedImage} className="object-cover"></img>
        )}
        <i className="fa fa-upload text-2xl text-blue-400"></i>
        <label
          htmlFor="file-upload"
          className="inline-block py-2 px-4 rounded-full text-sm font-semibold bg-blue-50 text-blue-400 cursor-pointer hover:bg-blue-100"
        >
          Upload File
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          name="image"
          onChange={(e) => showImage(e)}
        />
      </div>
      <Editor
        apiKey="bpapoxc4b4rxtoiutbgh9fn9cflecbuikgumdxtt1nawt878"
        value={content}
        onEditorChange={(newContent) => setContent(newContent)}
        init={{
          height: "800px",
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; z-index:0; }",
        }}
      />
      <div className="flex place-content-end">
        <button
          className="bg-blue-400 py-3 px-7 text-white rounded-md"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
}
export default AdminAddPost;
