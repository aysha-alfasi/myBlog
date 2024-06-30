import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFile] = useState('');
  async function createPost(e) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0])
    e.preventDefault();
     const response = await fetch('http://localhost:5000/newPost', {
        method: 'POST',
        body: data,
    }) 

  }

  return (
    <form onSubmit={createPost}>
      <input type="title" placeholder={"Title"} value={title} onChange={e => setTitle(e.target.value)}/>
      <input type="summary" placeholder={"Summary"} value={summary} onChange={e => setSummary(e.target.value)} />
      <input type="file" onChange={e => setFile(e.target.files)} />
      <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats} />
      <button style={{ marginTop: "5px" }}>Create Post</button>
    </form>
  );
}
