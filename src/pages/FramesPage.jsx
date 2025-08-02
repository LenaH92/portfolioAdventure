import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useModal } from "../contexts/ModalContext";

import lena1 from "../assets/Lena1.jpg";
import lena2 from "../assets/Lena2.jpg";
import ironhack from "../assets/IronhackDiplomaLenaCortes.png";
import googleAI from "../assets/GoogleAIEnLenaCortes.jpg";
import googleApps from "../assets/GoogleapplicationsLena.jpg";
import cibersecurity from "../assets/diplomaCiberseguridadLenaCortes.jpg";
//import { useState } from "react";

const imagesMap = {
    "Lena1.jpg": lena1,
    "Lena2.jpg": lena2,
    "IronhackDiplomaLenaCortes.png": ironhack,
    "GoogleapplicationsLena.jpg": googleApps,
    "GoogleAIEnLenaCortes.jpg": googleAI,
    "DiplomaCiberseguridadLenaCortes.jpg": cibersecurity,
}

const FramesPage = () => {
    const { t } = useTranslation()

    const description = t("frames.descriptiveText");
    const backTo = t("frames.backTo")
    const images = t("frames.images", { returnObjects: true });

    //const [selectedImg, setSelectedImg] = useState(null)
    const { openModal } = useModal()

    return (<><div>
        <p>{description}</p>
        {<div className="galleryDiv">
            {images.map((img, index) => (
                <div
                    key={index}
                    className="galleryImgCard card"
                    onClick={() => openModal("gallery", { src: imagesMap[img.src], alt: img.alt })}
                >
                    <img src={imagesMap[img.src]} alt={img.alt} />
                </div>
            ))}
        </div>}
        <Link to="/hall">{backTo} </Link>

        {/* {selectedImg && (
            <GalleryModal image={selectedImg} onClose={closeModal} />
        )} */}
    </div></>);
}

export default FramesPage;