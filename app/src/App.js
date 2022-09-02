import "./App.css";
import * as React from "react";
import { getBase64 } from "./utils/base64.js";
import img from "./assets/upload.png";

export default function App() {
  const [form, setForm] = React.useState({
    photo: ""
  });

  const onChangeImage = async (evt) => {
    const photo = await getBase64(evt.target.files[0]);
    console.log(photo);
    setForm(old => ({ ...old, 'photo': photo }));
  };

  return (
    <div className="App">
      <img
        className='img-upload'
        src={
          form.photo === ''
            ? img
            : `data:image/jpeg;base64,${form.photo}`
        }
        alt='photo'
      />
      <input
        className="img-file"
        type="file"
        name="photo"
        onChange={onChangeImage}
      />
    </div>
  );
}
