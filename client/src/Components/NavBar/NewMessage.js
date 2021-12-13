// import React, { useState } from "react";

// const NewMessage = () => {
//   const [image, setImage] = useState("");
//   const [url, setUrl] = useState("");

//   const postDetails = () => {
//     const data = new FormData();
//     data.append("file", image);
//     data.append("upload_preset", "bond-voyage");
//     data.append("cloud_name", "emma-mandat-toland");
//     fetch("https://api.cloudinary.com/v1_1/emma-mandat-toland/image/upload", {
//         method: "post",
//         body: data
//     })
//     .then(res=> res.json())
//     .then(data=> {
//         console.log(data)
//     })
//     .catch(err=> {
//         console.log(err)
//     })
// }

// export default NewMessage;
