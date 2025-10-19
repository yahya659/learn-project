import React from "react";
import { FaStar } from "react-icons/fa";
import { CiAlarmOn } from "react-icons/ci";
import { FaBookOpen } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function Course({
  img,
  department, //prope
  tittle,
  rating,
  description,
  sales,
  price,
  discount,
  duration,
  lessons,
}) {
  return (
    <div id="coursee">
      <div className="course">
        <span className="sale">Sale</span>
        <img src={img} alt={tittle} />
        <div className="content">
          <div className="course-field">
            <p className="department">{department}</p>
            <p className="rating">
              <FaStar />
              {rating}
            </p>
          </div>
        </div>
        <h3>{tittle}</h3>
        <p className="description">{description}</p>
        <p className="sales">{sales}sales</p>
        <p className="price">
          <del>{price}</del>
          <span className="text-secondery"> . {discount}</span>
        </p>
        <div className="course-info">
          <p>
            <CiAlarmOn />
            {duration}
          </p>
          <p>
            <FaBookOpen />
            {lessons}
          </p>
          <a href="#" className="btn-learn">
            Learn More
            <FaChevronRight />
          </a>
        </div>
      </div>
    </div>
  );
}
