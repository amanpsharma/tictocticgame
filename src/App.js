// import React, { useState, useEffect } from "react";
import React from "react";

// import { storage } from "./firebase";
import TicToc from "./TicToc";

const App = () => {
  // const [image, setImage] = useState(null);
  // const [url, setUrl] = useState({});
  // const [process, setProcess] = useState(0);
  // const [profileImageUrl, setprofileImageUrl] = useState([]);
  // var myaar = []
  // useEffect(() => {
  //   storage
  //     .ref()
  //     .child("/images")
  //     .listAll()
  //     .then((result) => {
  //       // Loop over each item
  //       console.log(result.items, "@#$%^&*(");
  //       result.items.map((pics) => {
  //         pics.getDownloadURL().then((url) => {
  //           // console.log(JSON.stringify(url))
  //           setprofileImageUrl(url);
  //         });
  //       });
  //     });
  // }, []);

  // const handleChange = (e) => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };
  // const uploadFile = () => {
  //   const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProcess(progress);
  //     },
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       storage
  //         .ref("images")
  //         .child(image.name)
  //         .getDownloadURL()
  //         .then((url) => {
  //           setUrl(url);
  //         });
  //     }
  //   );
  // };
  return (
    <div className="App">
      {/* <progress value={process} max="100" />
      <br />
      <input type="file" onChange={handleChange} />
      <button onClick={uploadFile}>Upload</button>
      {url.length > 0 && <img width="500" height="500" src={url} alt={url} />}
      {console.log(profileImageUrl)} */}
      <TicToc/>
    </div>
  );
};

export default App;
