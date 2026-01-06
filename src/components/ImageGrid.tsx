import {useNavigate} from 'react-router-dom';

interface Props {
  images: string[];
  breed: string;
  subBreed?: string;
}

export default function ImageGrid({ images, breed, subBreed }: Props) {
  const navigate = useNavigate();

  return (
    <div className="grid">
      {images.map((img, i) => (
        <div
          key={i}
          className="card"
          onClick={() => navigate("/detail", { state: { image: img, breed, subBreed } })}
        >
            <img src={img} alt="dog" />
        </div>
      ))}
    </div>
  );
}