/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, subtitle, url, id }) => {
  const navigate = useNavigate();

  return (
    <div className="m-4 block max-w-sm overflow-hidden rounded-lg" onClick={() => navigate(`/project/${id}`)}>
      <div className="relative">
        <a>
          <img src={image} alt={title} className="w-full cursor-pointer" />
        </a>
        <div className="flex flex-col justify-between p-4 text-white">
          <h2 className="mb-2 text-2xl font-bold">{title}</h2>
          <p className="mb-4 text-sm font-medium text-neutral-500">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
