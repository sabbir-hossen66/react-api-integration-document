import React, { useState } from "react";
import axios from "axios";

const UploadForm = () => {
  const [lessonName, setLessonName] = useState("");
  const [lessonNumber, setLessonNumber] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData instance
    const formData = new FormData();

    // Append fields to FormData
    formData.append("lessonName", lessonName);
    formData.append("lessonNumber", lessonNumber);
    if (file) {
      formData.append("file", file); // e.g., video, PDF, image, etc.
    }

    try {
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // important!
        },
      });
      console.log("Upload success:", response.data);
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Lesson Name"
        value={lessonName}
        onChange={(e) => setLessonName(e.target.value)}
        className="border px-3 py-2 w-full"
      />

      <input
        type="number"
        placeholder="Lesson Number"
        value={lessonNumber}
        onChange={(e) => setLessonNumber(e.target.value)}
        className="border px-3 py-2 w-full"
      />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="w-full"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Upload
      </button>
    </form>
  );
};

export default UploadForm;
