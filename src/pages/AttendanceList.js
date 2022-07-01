function AttendanceList(props) {
  return (
    <div className="p-5 bg-gray-200">
      <div className="bg-gray-100 p-4 rounded-lg shadow h-50">
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
                  Cohort
                </th>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide">
                  Status
                </th>
                <th className="w-32 p-3 text-sm font-semibold tracking-wide">
                  Missed Classes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {props.attendanceList[Object.keys(props.attendanceList)[0]].map(
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
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AttendanceList;
