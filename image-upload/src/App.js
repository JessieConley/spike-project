import React from "react";
// import ReactDOM from "react-dom";




function App() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1>Add Profile</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <div
        style={{
          height: "150px",
          width: "150px",
          border: "1px solid black"
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          placeholder="Profile Image"
          ref={uploadedImage}
          style={{
            width: "150px",
            height: "150px",
            position: "absolute"
          }}
        />
      </div>
      <br></br>
      Click to upload Profile Image
      <form>
        <h2>Name:</h2>
        <input type="text"></input>
        <h2>Date of Birth:</h2>
        <input type="text"></input>
      </form>
    </div>
  );
}

export default App;