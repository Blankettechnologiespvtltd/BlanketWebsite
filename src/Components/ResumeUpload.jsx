import React, { useState } from "react";
import { storage, db } from "../lib/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage("");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return setMessage("⚠️ Please select a resume first!");

    const storageRef = ref(storage, `resumes/${Date.now()}_${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(Math.round(prog));
      },
      () => setMessage("❌ Upload failed, please try again!"),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);

        await addDoc(collection(db, "resumes"), {
          fileName: file.name,
          url,
          uploadedAt: serverTimestamp(),
        });

        setMessage("✅ Resume uploaded successfully!");
        setProgress(0);
        setFile(null);
      }
    );
  };

  return (
    <div className="flex items-center justify-center py-12 bg-gray-50">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg text-center">

        <h2 className="text-3xl font-bold mb-6 text-gray-800 flex justify-center items-center gap-3">
          📤 Upload Resume
        </h2>

        {/* Drag & Drop Box */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          className={`
            border-2 border-dashed rounded-xl p-6 mb-6 transition cursor-pointer
            ${isDragging ? "border-blue-600 bg-blue-50" : "border-gray-300 bg-gray-100"}
          `}
        >
          <label className="flex flex-col items-center justify-center cursor-pointer">
            <span className="text-5xl">📄</span>

            <p className="mt-3 text-gray-700 font-semibold">
              {file ? file.name : "Drag & Drop your resume here"}
            </p>

            <p className="text-gray-500 text-sm mt-1">
              or click to browse file
            </p>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg
                     hover:bg-blue-700 transition shadow-md"
        >
          Upload
        </button>

        {progress > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-3 mt-6">
            <div
              className="bg-green-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

        {message && (
          <p className="mt-5 text-lg text-gray-700 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ResumeUpload;
