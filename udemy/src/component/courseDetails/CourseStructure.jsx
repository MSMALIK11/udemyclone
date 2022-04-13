import React from "react";
import CourseAccordian from "./CourseAccordian";

const CourseStructure = () => {
  const data = [
    {
      id: "1",
      title: "introduction ",
      body: ["introduction-welcome"],
    },
    {
      title: "react fundamental ",
      id: "2",
      body: [
        "components",
        "jsx exprssion",
        "props",
        "conditional rendering",
        "dom events",
      ],
    },
    {
      id: "3",
      title: "working with state ",
      body: [
        "components",
        "jsx exprssion",
        "props",
        "conditional rendering",
        "dom events",
      ],
    },
    {
      id: "4",
      title: "working with state ",
      body: [
        "components",
        "jsx exprssion",
        "props",
        "conditional rendering",
        "dom events",
      ],
    },
  ];
  return (
    <>
      <div className="course-structure-container">
        <h1>Course Structure</h1>
        <div>
          <span>35 lactures - 03:45:42 total duration</span>
          <div className="course-structure-accourdian mt-4">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              {data &&
                data.map((item, i) => {
                  return <CourseAccordian key={item.id} data={item} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseStructure;
