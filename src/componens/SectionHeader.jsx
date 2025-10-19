import React from "react";
import { coursesData } from "../../data";
import Course from "./course";

export default function SectionHeader({ tittle, description }) {
  return (
    <div className="section-header">
      <span className="text-primary">Practice Advice</span>
      <h2>{tittle}</h2>
      <p>{description}</p>
      <div className="courses-continer">
        {coursesData.map((curs) => {
          // console.log(curs)
          const {
            id,
            img,
            department,
            tittle,
            rating,
            description,
            sales,
            price,
            discount,
            duration,
            lessons,
          } = curs;
          return (
            <Course
              id={id}
              img={img}
              department={department}
              tittle={tittle}
              description={description}
              sales={sales}
              price={price}
              discount={discount}
              duration={duration}
              lessons={lessons}
              rating={rating}
            />
          );
        })}
      </div>
    </div>
  );
}
