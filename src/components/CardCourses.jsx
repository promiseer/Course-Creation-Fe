import PropTypes from "prop-types";

function CardCourses({
  className,
  images,
  childLabel,
  label,
  time,
  views,
  descriptions,
}) {
  return (
    <li>
      <div className={`card-mycourses ${className}`}>
        <div className="card-thumbnail">
          <img src={images} alt="" />
          <div className="thumbnail-play">
            <a href="#" className="btn-play">
              <i className="bi bi-play-circle"></i>
            </a>
          </div>
        </div>
        <div className="card-descriptions">
          <span className="card-descriptions-label">{childLabel}</span>
          <div className="card-descriptions-headers">
            <h2 className="card-title">{label}</h2>
            <div className="flex items-center justify-end gap-x-[8px]">
              <p className="flex items-center gap-x-[2px] text-[12px]">
                <i className="bi bi-clock text-[12px]"></i>
                <span> {time}</span>
              </p>
              <p className="flex items-center justify-center gap-x-2 text-[12px] ml-2">
                <span>{views}</span>
                <img
                  src="../../public/images/icons/mortar.svg"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
              </p>
            </div>
          </div>
          <p className="text-sm mt-[3px]">{descriptions}</p>
        </div>
      </div>
    </li>
  );
}

CardCourses.propTypes = {
  className: PropTypes.string,
  images: PropTypes.string,
  childLabel: PropTypes.string,
  label: PropTypes.string,
  time: PropTypes.string,
  views: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  descriptions: PropTypes.string,
};

export default CardCourses;
