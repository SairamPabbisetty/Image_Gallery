import React, {useState, useEffect} from "react";

import ImageBlocks from "./components/ImageBlocks";

function App() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=41774322-47fbfc64724a580b308eec5b6&image_type=photo&pretty=true`)
    .then((res) => res.json())
    .then((data) => {
      setImages(data.hits);
    })
    .catch((err) => console.log(err));
  }, [])

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <ImageBlocks key={image.id} image={image} />
        ))}
       </div>
    </div>
  );
}

export default App;
