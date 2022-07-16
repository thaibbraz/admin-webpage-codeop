import { useState } from "react";
import feCurriculum from "./fe-curriculum";

function Fe(props) {
  const [course, setCourse] = useState(feCurriculum);

  return (
    <div className="App">
      <div className="m-40 lg:m-30 xl:m-40 2xl:m-40 md:m-10 sm:m-5">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="border-b ">
                    <tr className="bg-indigo-200">
                      <th
                        scope="col"
                        className=" text-sm font-medium text-white-900 px-6 py-4 text-center"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Module
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Activity link
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Slides
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <>
                      {course.map((item, index) => (
                        <tr className="bg-white hover:bg-gray-100" key={index}>
                          <td className="text-center text-sm leading-5 font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="text-center text-sm leading-5 font-medium text-gray-900">
                            {""}
                          </td>
                          <td className="text-center text-sm leading-5 font-medium text-gray-900">
                            {item.name}
                          </td>
                          <td className="text-center text-sm leading-5 font-medium text-gray-900">
                            <a
                              href={item.activity_link}
                              className="co-btn"
                              target="_blank"
                            >
                              FE-{item.name}
                            </a>
                          </td>
                          <td className="text-center text-sm leading-5 font-medium text-gray-900">
                            <a
                              href={item.slide_link}
                              className="co-btn"
                              target="_blank"
                            >
                              FS-{item.name}
                            </a>
                          </td>
                        </tr>
                      ))}
                      <td className="text-center text-sm leading-5 font-medium text-gray-900">
                        9
                      </td>
                      <td className="text-center text-sm leading-5 font-medium text-gray-900">
                        No module{" "}
                      </td>
                      <td className="text-center text-sm leading-5 font-medium text-gray-900">
                        Solutions
                      </td>

                      <td className="text-center text-sm leading-5 font-medium text-gray-900">
                        <a
                          href="https://github.com/CodeOp-tech/fe-solutions"
                          className="co-btn"
                          target="_blank"
                        >
                          FE-solutions
                        </a>
                      </td>
                      <td className="text-center text-sm leading-5 font-medium text-gray-900">
                        NO SLIDES
                      </td>
                    </>
                  </tbody>
                </table>
                {/* <button  className="m-4 py-2 px-4 border border-transparent text-sm font-medium
                  rounded-md text-black hover:bg-indigo-400 hover:text-white" onClick={props.logout}>Log out</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fe;
