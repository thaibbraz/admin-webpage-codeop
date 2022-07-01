function Pm(props) {
  return (
    <div className="p-5 h-screen bg-gray-200">
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
                        <span className="py-1 px-1.5 text:xs font-medium uppercase tracking wider text-green-800 bg-green-200 rounded-lg bg-opacity-500 ">
                          {item.cohort}
                        </span>
                      </td>

                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <span className="py-1 px-1.5 text:xs font-medium uppercase tracking wider text-green-800 bg-green-200 rounded-lg bg-opacity-500 ">
                          good
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

export default Pm;
