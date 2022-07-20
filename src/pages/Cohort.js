import CodeOp_logo from "../assets/CodeOp_logo_blue.jpg";
import { React, useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { getDatabase, ref, set, onValue } from "firebase/database";

function Cohort(props) {
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState(0);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    cohort: "",
    repo: "",
    id: "",
  });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      let filteredCohort = data.students.filter(function isCohort(student) {
        return props.cohort.name.toLowerCase() === student.cohort.toLowerCase();
      });

      console.log("filteredCohort", filteredCohort);
      setStudents(filteredCohort);

      let len = data.students[data.students.length - 1].id;
      console.log(len + 1);
      data.students !== undefined ? setUserId(len + 1) : setUserId(0);
    });
  }, [newStudent]);
  function handleChange(event) {
    let { name, value } = event.target;
    const newObj = {
      ...newStudent,
      [name]: value,
    };
    newObj.id = userId;
    setNewStudent(newObj);
  }

  function addStudent() {
    const db = getDatabase();
    set(ref(db, "students/" + userId), newStudent);
    setShowModal(false);
  }

  return (
    <div className="App">
      <div className="container mx-auto p-4">
        <div className="mt-6 mb-6 flex justify-center">
          <h1 className="mb-12 text-3xl font-semibold text-center uppercase">
            {props.cohort.name}
          </h1>
        </div>
        <div className="divide-y">
          <div className="mx-auto p-4 bg-slate-100 rounded-lg m-10 py-15 p-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="py-8 shadow-sm border-1 bg-white rounded-lg p-4 text-blueGray-700 uppercase">
                <div className="flex-col">
                  <h1 className="font-medium leading-tight text-4xl mt-0 mb-2">
                    {props.cohort.number_students}
                  </h1>
                  <h3 className="text-gray-400 uppercase">Students</h3>
                </div>
              </div>
              <div className="pt-10 py-8 shadow-sm border-1 bg-white rounded-lg p-4 text-blueGray-700 uppercase">
                <div className="flex-col">
                  <h1 className="font-medium leading-tight text-2xl mt-0 mb-2">
                    {props.cohort?.instructor}
                  </h1>
                  <h3 className="text-gray-400 uppercase">Instructor</h3>
                </div>
              </div>

              <div className="py-8 shadow-sm border-1 bg-white rounded-lg p-4 text-blueGray-700 uppercase">
                <div className="flex-col">
                  <h1 className="font-medium leading-tight text-4xl mt-0 mb-2">
                    {props.cohort.graduated ? props.cohort.graduated : 0}
                  </h1>
                  <h3 className="text-gray-400 uppercase">
                    Graduated Students{" "}
                  </h3>
                </div>
              </div>
              {/* <div className="py-10 shadow-md border-2 bg-purple-100 rounded-lg p-4 text-blueGray-700 rext-xs uppercase">
                <h1 className="font-medium leading-tight text-2xl mt-0 mb-2">
                  instructor
                </h1>
                <h2 className="font-small leading-tight text-1xl mt-0 mb-2">
                  {props.cohort.instructor}
                </h2>
              </div> */}
              <div className="pt-10 py-8 shadow-sm border-1 bg-white rounded-lg p-4 text-blueGray-700 uppercase">
                <div className="flex-col">
                  <h1 className="font-medium leading-tight text-2xl mt-0 mb-2">
                    {props.cohort.active === true ? "Active" : "Archived"}
                  </h1>
                  {/* test */}
                  <h3 className="text-gray-400 uppercase">Status</h3>
                </div>
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
                          type="name"
                          name="name"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Name"
                          onChange={(e) => handleChange(e)}
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className="my-3">
                        <input
                          type="email"
                          name="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          onChange={(e) => handleChange(e)}
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className="my-3">
                        <input
                          type="text"
                          name="repo"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          onChange={(e) => handleChange(e)}
                          placeholder="Project repo"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className="my-3">
                        <input
                          type="cohort"
                          name="cohort"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          onChange={(e) => handleChange(e)}
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
                        className="bg-green-500 text-white active:bg-green-200 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => addStudent()}
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
        <div className="p-10 rounded-lg shadow-lg bg-slate-100">
          <div className="bg-slate-100 p-4 rounded-lg h-50">
            <div className="flex justify-end">
              <button
                className="text-green-500 border border-green-500 hover:bg-white hover:text-green-500 active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                      Name
                    </th>
                    <th className="w-20 p-3 text-sm font-semibold tracking-wide">
                      Email
                    </th>
                    {/* <th className="w-20 p-3 text-sm font-semibold tracking-wide">
                      Cohort
                    </th> */}
                    <th className="w-32 p-3 text-sm font-semibold tracking-wide">
                      Project MVP
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {students.map((item, index) => (
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
                          // className={
                          //   item.cohort[1].toLowerCase() === "e"
                          //     ? "py-1 px-1.5 text:xs font-medium uppercase tracking wider text-teal-800 bg-teal-200 rounded-lg bg-opacity-500 "
                          //     : item.cohort[0].toLowerCase() === "f"
                          //     ? "py-1 px-1.5 text:xs font-medium uppercase tracking wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-500 "
                          //     : (item.cohort[0].toLowerCase() === "d" &&
                          //         item.cohort[3].toLowerCase() === "r") ||
                          //       (item.cohort[0].toLowerCase() === "d" &&
                          //         item.cohort[3].toLowerCase() === "s")
                          //     ? "py-1 px-1.5 text:xs font-medium uppercase tracking wider text-indigo-800 bg-indigo-200 rounded-lg bg-opacity-500 "
                          //     : "py-1 px-1.5 text:xs font-medium uppercase tracking wider text-sky-800 bg-sky-200 rounded-lg bg-opacity-500 "
                          // }
                          >
                            {item.email}
                          </span>
                        </td>

                        {/* <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
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
                        </td> */}

                        <td className="p-3 text-sm text-gray-700">
                          <a
                            href={item.slide_link}
                            className="co-btn"
                            target="_blank"
                          >
                            {item.repo}
                          </a>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cohort;
