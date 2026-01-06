import  {useLocation, useNavigate} from "react-router-dom";
import type { DetailState } from "../types/dog";

export default function Detail() {
  const navigate = useNavigate();
  const {state} = useLocation() as {state: DetailState};

  if (!state) {
    navigate("/");
    return null;
  }

    const { image, breed, subBreed } = state;

    const dowloadImage = () => {
        const link = document.createElement("a");
        link.href = image;
        link.download = `${breed}${subBreed ? `-${subBreed}` : ""}.jpg`;
        document.body.appendChild(link);
        link.click();
    }

    return (
        <div>
            <h2>
                {breed} {subBreed && ` - ${subBreed}`}
            </h2>

            <img src={image} alt="dog" style={{ maxWidth: "400px"}} />

            <button onClick={dowloadImage}>Descargar Imagen</button>
        </div>
    );
}

