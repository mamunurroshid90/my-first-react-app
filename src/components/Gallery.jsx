import React from "react";

const Gallery = () => {
  return (
    <div>
      <section id="gallery__part">
        <div className="container">
          <div className="gallery__heading">
            <h2>Gallery</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac a,
              eget tellus et, viverra mauris dignissim morbi in.
            </p>
          </div>
          <div className="gallery__image">
            <img src="/src/assets/gallery-1.png" alt="gallery-1" />
            <img src="/src/assets/gallery-2.png" alt="gallery-2" />
            <img src="/src/assets/gallery-3.png" alt="gallery-3" />
            <img src="/src/assets/gallery-4.png" alt="gallery-4" />
            <img src="/src/assets/gallery-5.png" alt="gallery-5" />
            <img src="/src/assets/gallery-6.png" alt="gallery-6" />
            <img src="/src/assets/gallery-7.png" alt="gallery-7" />
            <img src="/src/assets/gallery-8.png" alt="gallery-8" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
