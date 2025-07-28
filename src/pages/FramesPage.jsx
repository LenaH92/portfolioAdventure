import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useModal } from "../contexts/ModalContext";

import image1 from "../assets/Lena1.jpg";
import image2 from "../assets/Lena2.jpg";
import image3 from "../assets/IronhackDiplomaLenaCortes.png";
import image4 from "../assets/GoogleapplicationsLena.jpg";
import image5 from "../assets/Google_AI_En_LenaCortes_page-0001.jpg";
import image6 from "../assets/diplomaCiberseguridadLenaCortes.jpg";
import { useState } from "react";
import GalleryModal from "../components/modals/GalleryModal";

const imgArr = [image1, image2, image3, image4, image5, image6]

const FramesPage = () => {
    const { t } = useTranslation()

    const description = t("frames.descriptiveText");
    const backTo = t("frames.backTo")

    const [selectedImg, setSelectedImg] = useState(null)
    const { openModal } = useModal()

    return (<><div>
        <p>{description}</p>
        {<div className="galleryDiv">
            {imgArr.map((img, index) => (
                <div key={index} className="galleryImgCard card" onClick={() => openModal('gallery', img)}>
                    <img src={img} alt={`Imagen ${index + 1}`} />
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