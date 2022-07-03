import CodeOp_logo from "../CodeOp_logo_blue.jpg";
import { Link } from "react-router-dom";
import Cohort from "./Cohort";

function Cohorts(props) {
  return (
    <div className="App">
      <div className="container mx-auto p-4">
        <div className="mt-6 mb-6 flex justify-center">
          <img src={CodeOp_logo} alt="CodeOp logo" className="h-20" />
        </div>
        <h1 className="mb-12 text-3xl font-semibold text-center">Cohorts</h1>
        <div className="divide-y">
          <div className="py-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {props.cohorts.map((cohort) => (
                <Link
                  className="shadow-md border-2 hover:border-blue-500 rounded-lg p-4 text-blueGray-700 rext-xs uppercase"
                  to={`/cohorts/${cohort.name}`}
                >
                  {cohort.name}
                </Link>
              ))}
              {/* <Link
                className="shadow-md border-2 hover:border-blue-500 rounded-lg p-4 text-blueGray-700 rext-xs uppercase"
                to="/courses"
              >
                FS20
              </Link>
              <Link
                className="shadow-md border-2 hover:border-blue-500 rounded-lg p-4 text-blueGray-700 rext-xs uppercase"
                to="/cohorts"
              >
                FSPT10
              </Link>
              <Link
                className="shadow-md border-2 hover:border-blue-500 rounded-lg p-4 text-blueGray-700 rext-xs uppercase"
                to="/instructors"
              >
                FSPT11
              </Link>
              <Link
                className="shadow-md border-2 hover:border-blue-500 rounded-lg p-4 text-blueGray-700 rext-xs uppercase"
                to="/admin"
              >
                FSPT12
              </Link> */}
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
    </div>
  );
}

export default Cohorts;
