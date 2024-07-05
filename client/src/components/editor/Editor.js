import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

export default function Editor({ value, onChange }) {
  const theme = 'snow';

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

      const { quillRef } = useQuill({ theme, modules, formats, value, onChange });
    
  return (
    <div style={{ width: '90%', height: 500, backgroundColor: '#FEE3EC', paddingBottom: 40, borderRadius: 5, alignSelf:'center', marginTop: 30}}>
    <div ref={quillRef} 
  />
  </div>
  );
}
