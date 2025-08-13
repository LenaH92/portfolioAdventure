import { useState } from "react";

const GalleryModal = ({ data, onclose }) => {

    const [index, setIndex] = useState(data.currentIndex)

    const currentImage = data.images[index];

    //arrows 
    function goPrevious() { setIndex(index - 1) }

    function goNext() { setIndex(index + 1) }

    function goTo() {
        setIndex(i)
    }

    return (<div className="modal-overlay" onClick={onclose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button onClick={onclose}>Cerrar</button>
            <img src={currentImage.src} alt={currentImage.alt} />
            <p>{currentImage.alt}</p>

            <div className="navigationDiv">
                {index > 0 && (<button type="button" onClick={goPrevious}> ⬅️ </button>)}
                <div className="dotsContainer">
                    {data.images.map((_, i) => (
                        <span
                            key={i}
                            onClick={() => goTo(i)}
                            className={`dot ${i === index ? "active" : ""}`}
                        />
                    ))}
                </div>
                {index < data.images.length - 1 && (<button type="button" onClick={goNext}> ➡️ </button>)}
            </div>

        </div>

    </div>);
}

export default GalleryModal;