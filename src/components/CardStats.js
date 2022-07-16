import React from "react";
import PropTypes from "prop-types";

export default function CardStats({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
  instructor,
  content,
  interactive,
  fit_course,
}) {
  return (
    <>
      <div className="relative rounded-xl py-15 bg-gray-100 py-10 px-5 flex flex-col min-w-0 m-3 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="flex-1 max-w-xs w-full text-center text-black-300">
              {/* <div className="relative w-full max-w-full flex-grow flex-1"> */}
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>

              {/* <span className="font-semibold text-sm text-blueGray-700"></span> */}
            </div>
            {/* <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-10 h-10 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                <i className={statIconName}></i>
              </div>
            </div> */}
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            Instructor:{" "}
            <span className={statPercentColor + " mr-2"}>
              <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              <strong>{instructor}%</strong>
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p>
          <p className="text-sm text-blueGray-400 mt-4">
            Content:{" "}
            <span className={statPercentColor + " mr-2"}>
              <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              <strong>{content}%</strong>
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p>
          <p className="text-sm text-blueGray-400 mt-4">
            Session interactive:{" "}
            <span className={statPercentColor + " mr-2"}>
              <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              <strong>{interactive}%</strong>
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p>
        </div>
      </div>
    </>
  );
}

CardStats.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
  instructor: "bg-red-500",
  content: "bg-red-500",
  interactive: "bg-red-500",
  fit_course: "bg-red-500",
};

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
  instructor: PropTypes.string,
  content: PropTypes.string,
  interactive: PropTypes.string,
  fit_course: PropTypes.string,
};
