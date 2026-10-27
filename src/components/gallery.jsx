import React, { useState } from "react";

export const Gallery = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  
  // Zoom & Pan State
  const [scale, setScale] = useState(1); 
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hasDragged, setHasDragged] = useState(false); // Differentiates click vs drag

  // Resets zoom and pan when changing images
  const resetZoomAndPan = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const openLightbox = (index, e) => {
    e.preventDefault(); 
    setPhotoIndex(index);
    resetZoomAndPan();
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);
  
  const nextImage = (e) => {
    e.stopPropagation();
    setPhotoIndex((photoIndex + 1) % props.data.length);
    resetZoomAndPan();
  };
  
  const prevImage = (e) => {
    e.stopPropagation();
    setPhotoIndex((photoIndex + props.data.length - 1) % props.data.length);
    resetZoomAndPan();
  };

  // --- Zoom Handlers ---
  const handleZoomIn = (e) => {
    e.stopPropagation();
    setScale(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setScale(prev => {
      const newScale = Math.max(prev - 0.5, 1);
      if (newScale === 1) setPosition({ x: 0, y: 0 }); // Snap back to center
      return newScale;
    });
  };

  // --- Drag to Pan Handlers ---
  const handleMouseDown = (e) => {
    e.preventDefault(); // Stops the browser's default "ghost image" dragging
    if (scale > 1) {
      setIsDragging(true);
      setHasDragged(false);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setHasDragged(true); // The user is actively moving the image
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    // If the user was dragging, don't trigger the zoom toggle
    if (hasDragged) {
      setHasDragged(false);
      return;
    }
    
    // Otherwise, toggle zoom
    setScale(prev => {
      if (prev === 1) return 2;
      setPosition({ x: 0, y: 0 }); // Snap back to center on zoom out
      return 1;
    });
  };

  return (
    <div id="portfolio" className="modern-gallery">
      <div className="container">
        
        <div className="section-title text-center">
          <h2>Project Gallery</h2>
          <p>Showcasing our high-performance solar installations across Kerala.</p>
        </div>
        
        <div className="gallery-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="gallery-item">
                  <a href={d.largeImage} onClick={(e) => openLightbox(i, e)}>
                    <div className="gallery-image-wrapper">
                      <img src={d.smallImage} className="img-responsive" alt={d.title} />
                      <div className="gallery-overlay">
                        <h4>{d.title}</h4>
                      </div>
                    </div>
                  </a>
                </div>
              ))
            : "Loading..."}
        </div>

        {/* --- Custom React Lightbox Overlay --- */}
        {isOpen && (
          <div 
            className="react-lightbox-overlay" 
            onClick={closeLightbox}
            onMouseMove={handleMouseMove} // Placed on overlay so dragging works if cursor slips off image
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            
            {/* Top Right Controls */}
            <div className="lightbox-controls">
              <span className="lightbox-icon" onClick={handleZoomIn}>&#43;</span>
              <span className="lightbox-icon" onClick={handleZoomOut}>&#8722;</span>
              <span className="lightbox-icon" onClick={closeLightbox}>&times;</span>
            </div>
            
            <div className="lightbox-content">
              <span className="lightbox-prev" onClick={prevImage}>&#10094;</span>
              
              {/* Zoomable & Draggable Image Wrapper */}
              <div className="lightbox-img-wrapper">
                <img 
                  src={props.data[photoIndex].largeImage} 
                  alt={props.data[photoIndex].title} 
                  onMouseDown={handleMouseDown}
                  onClick={handleImageClick}
                  style={{ 
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`, 
                    // Remove transition while dragging so it sticks perfectly to the mouse
                    transition: isDragging ? "none" : "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in"
                  }}
                />
              </div>

              <span className="lightbox-next" onClick={nextImage}>&#10095;</span>
            </div>
            
            <div className="lightbox-caption">
              {props.data[photoIndex].title}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};