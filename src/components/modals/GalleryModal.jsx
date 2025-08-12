import { useState } from "react";

const GalleryModal = ({ data, onclose }) => {

    const [index, setIndex] = useState(data.currentIndex)

    const currentImage = data.images[index];

    //arrows 
    function goPrevious() { setIndex(index - 1) }

    function goNext() { setIndex(index + 1) }

    return (<div className="modal-overlay" onClick={onclose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button onClick={onclose}>Cerrar</button>
            <img src={currentImage.src} alt={currentImage.alt} />
            <p>{currentImage.alt}</p>

            <div className="arrowsDiv" style={{ display: "flex", justifyContent: "center", marginTop: "10px", gap: "8px" }}>
                {index > 0 && (<button type="button" onClick={goPrevious}> ⬅️ </button>)}
                <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", gap: "8px" }}>
                    {data.images.map((_, i) => (
                        <span
                            key={i}
                            onClick={() => goTo(i)}
                            style={{
                                display: "inline-block",
                                width: i === index ? "12px" : "8px",
                                height: i === index ? "12px" : "8px",
                                borderRadius: "50%",
                                backgroundColor: i === index ? "black" : "gray",
                                cursor: "pointer",
                                transition: "all 0.3s ease"
                            }}
                        />
                    ))}
                </div>
                {index < data.images.length - 1 && (<button type="button" onClick={goNext}> ➡️ </button>)}
            </div>

        </div>

    </div>);
}

export default GalleryModal;