import CodeOp_logo from "../CodeOp_logo_blue.jpg";
import { Link } from "react-router-dom";
import { db } from "../firebase-config";
import React from "react";
function Cohort(props) {
  const [showModal, setShowModal] = React.useState(false);
  // const postStudent = () => {
  //   database
  //     .ref("user")
  //     .set({
  //       name: name,
  //       age: age,
  //     })
  //     .catch(alert);
  // };

  return (
    <div className="App">
      <div className="container mx-auto p-4">
        <div className="mt-6 mb-6 flex justify-center">
          {/* <img src={CodeOp_logo} alt="CodeOp logo" className="h-20" /> */}
          <h1 className="mb-12 text-3xl font-semibold text-center uppercase">
            {props.cohort.name}
          </h1>
        </div>
        <div className="divide-y">
          <div className="py-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="py-8 shadow-md border-2 bg-blue-100 rounded-lg p-4 text-blueGray-700 rext-xs uppercase">
                <h1 className="font-medium leading-tight text-2xl mt-0 mb-2">
                  Students
                </h1>
                <h2 className="py-2 font-small leading-tight text-1xl mt-0 mb-2">
                  {props.cohort.number_students}
                </h2>
              </div>
              <div className="py-8 shadow-md border-2 bg-green-100 rounded-lg p-4 text-blueGray-700 rext-xs uppercase">
                <h1 className="font-medium leading-tight text-2xl mt-0 mb-2">
                  instructor
                </h1>
                <h2 className="font-small leading-tight text-1xl mt-0 mb-2">
                  {props.cohort.instructor}
                </h2>
              </div>
              <div className="py-8 shadow-md border-2 bg-indigo-200 rounded-lg p-4 text-blueGray-700 rext-xs uppercase">
                <h1 className="font-medium leading-tight text-2xl mt-0 mb-2">
                  Students graduated
                </h1>
                <h2 className="font-small leading-tight text-1xl mt-0 mb-2">
                  {props.cohort.graduated}
                </h2>
              </div>
              <div className="py-8 shadow-md border-2 bg-purple-100 rounded-lg p-4 text-blueGray-700 rext-xs uppercase">
                <h1 className="font-medium leading-tight text-2xl mt-0 mb-2">
                  instructor
                </h1>
                <h2 className="font-small leading-tight text-1xl mt-0 mb-2">
                  {props.cohort.instructor}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-sm">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Add New Student
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl 
                        leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="my-3">
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Name"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className="my-3">
                        \ab\messages\rooms\room_ca521af2e9724f6c65bf70737f4ac843
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className="my-3">
                        <input
                          type="repo"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Project repo"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className="my-3">
                        <input
                          type="cohort"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Cohort"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Add Student
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
        <div className="p-5 bg-gray-200">
          <div className="bg-gray-100 p-4 rounded-lg shadow h-50">
            <div className="flex justify-end">
              <button
                className="text-green-500 border border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
              >
                Add new Student
              </button>
            </div>
            <div className="bg-white p-4 my-10 rounded-lg shadow">
              <h1 className="text-xl mb-2">Students</h1>
            </div>
            <div className="overflow-auto my-5 rounded-lg shadow">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200 shadow">
                  <tr>
                    <th className="w-20 p-3 text-sm font-semibold tracking-wide">
                      Id
                    </th>
                    <th className="w-20 p-3 text-sm font-semibold tracking-wide">
                      name
                    </th>
                    <th className="w-20 p-3 text-sm font-semibold tracking-wide">
                      repos
                    </th>
                    <th className="w-20 p-3 text-sm font-semibold tracking-wide">
                      Youtube Playlist
                    </th>
                    <th className="w-32 p-3 text-sm font-semibold tracking-wide">
                      Missed Classes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {/* {props.attendanceList[Object.keys(props.attendanceList)[0]].map(
                (item, index) => (
                  <>
                    <tr className="bg-white">
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <span
                          className={
                            item.cohort[1].toLowerCase() === "e"
                              ? "py-1 px-1.5 text:xs font-medium uppercase tracking wider text-teal-800 bg-teal-200 rounded-lg bg-opacity-500 "
                              : item.cohort[0].toLowerCase() === "f"
                              ? "py-1 px-1.5 text:xs font-medium uppercase tracking wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-500 "
                              : (item.cohort[0].toLowerCase() === "d" &&
                                  item.cohort[3].toLowerCase() === "r") ||
                                (item.cohort[0].toLowerCase() === "d" &&
                                  item.cohort[3].toLowerCase() === "s")
                              ? "py-1 px-1.5 text:xs font-medium uppercase tracking wider text-indigo-800 bg-indigo-200 rounded-lg bg-opacity-500 "
                              : "py-1 px-1.5 text:xs font-medium uppercase tracking wider text-sky-800 bg-sky-200 rounded-lg bg-opacity-500 "
                          }
                        >
                          {item.cohort}
                        </span>
                      </td>

                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <span
                          className={
                            item.date.length > 6
                              ? "py-1 px-1.5 text:xs font-medium uppercase tracking wider text-red-800 bg-red-200 rounded-lg bg-opacity-500"
                              : item.date.length > 3
                              ? "py-1 px-1.5 text:xs font-medium uppercase tracking wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-500"
                              : "py-1 px-1.5 text:xs font-medium uppercase tracking wider text-green-800 bg-green-200 rounded-lg bg-opacity-500 "
                          }
                        >
                          {item.date.length > 6
                            ? "RED FlAG"
                            : item.date.length > 3
                            ? "YELLOW FLAG"
                            : "GOOD"}
                        </span>
                      </td>

                      <td className="p-3 text-sm text-gray-700">
                        <a
                          href={item.slide_link}
                          className="co-btn"
                          target="_blank"
                        >
                          {item.missed_classes}
                        </a>
                      </td>
                    </tr>
                  </>
                )
              )} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button
          className="m-4 py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-black hover:bg-indigo-400 hover:text-white"
          onClick={props.logout}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default Cohort;
