import PropTypes from "prop-types";

function CardCoursesPages({
  key,
  images,
  title,
  status,
  description,
  boxCaptionsClass,
  boxCaptionsClassTitle,
}) {
  return (
    <div key={key ? key : null} className="box">
      <div className="box-image">
        <img src={images ? images : null} alt="Courses Images " />
      </div>
      <div
        className={`box-captions ${boxCaptionsClass ? boxCaptionsClass : ""}`}
      >
        <div className="box-headers">
          <h2
            className={`title ${
              boxCaptionsClassTitle ? boxCaptionsClassTitle : ""
            }`}
          >
            {title}
          </h2>
          {status == "Completed" ? (
            <span className="status">
              <i className="bi bi-check2 text-white text-[27.15px]"></i>
            </span>
          ) : null}
        </div>

        {status == "Scheduled" ? (
          <div className="bottom">
            <p>{description}</p>
            <div className="indicators-percent">
              <span>80% to completed</span>
              <label>
                <div className="indicators w-[80%]"></div>
              </label>
            </div>
          </div>
        ) : null}

        {status == "Locked" ? (
          <span className="status">
            <i className="bi bi-lock-fill text-white text-[27.15px]"></i>
          </span>
        ) : null}
      </div>
    </div>
  );
}

CardCoursesPages.propTypes = {
  key: PropTypes.number,
  className: PropTypes.string,
  images: PropTypes.string,
  title: PropTypes.string,
  status: PropTypes.string,
  description: PropTypes.string,
  boxCaptionsClass: PropTypes.string,
  boxCaptionsClassTitle: PropTypes.string,
};

export default CardCoursesPages;
