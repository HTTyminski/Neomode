import React, { useState } from 'react'


function Uploader() {
  const uploadImage = (files:any) => {
    console.log(files[0]);
  }
  return (
    <div>
      <input type="file" onChange={(event) => {
          uploadImage(event.target.files);
        }}
      />
    </div>
  )
}
export default Uploader;