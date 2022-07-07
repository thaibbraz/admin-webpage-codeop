import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { auth, db } from "../../firebase-config";

function GuestSpeaker(props) {
  const [surveys, setSurveys] = useState([]);
  const [obj, setObj] = useState({});
  const speakers = "survey-speakers";
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      let speakersFiltered = data.speakers.filter((item) => item[0].length > 0);
      speakersFiltered = speakersFiltered.sort();

      const obj = {};
      speakersFiltered.map(function (answer) {
        let name = answer[0];
        for (const key in obj) {
          if (key === undefined) {
            obj[name] = {
              // instructor: { rate: 0, total: 0 },
              // content: { rate: 0, total: 0 },
              // interactive: { rate: 0, total: 0 },
              // fit_course: { rate: 0, total: 0 },
            };
          } else if (key === name) {
            obj[key] = {
              // instructor: {
              //   rate: obj[key].instructor + answer[1],
              //   total: obj[key].total + answer[2],
              // },
              // content: { rate: 0, total: 0 },
              // interactive: { rate: 0, total: 0 },
              // fit_course: { rate: 0, total: 0 },
            };
          }
          // setObj(obj);
        }
      });

      setSurveys(speakersFiltered);
    });
  }, []);

  //   function advancedFilter(array, obj) {
  //     //example
  //     array[("salskal", "5", "4", "5")];
  //     let name = array[0];
  //     for (const key in obj) {
  //       if (key === undefined) {
  //         obj[name] = {
  //           instructor: { rate: 0, total: 0 },
  //           content: { rate: 0, total: 0 },
  //           interactive: { rate: 0, total: 0 },
  //           fit_course: { rate: 0, total: 0 },
  //         };
  //       } else if (key === name) {
  //         obj[key] = {
  //           instructor: { rate: rate + array[1], total: total + array[2] },
  //           content: { rate: 0, total: 0 },
  //           interactive: { rate: 0, total: 0 },
  //           fit_course: { rate: 0, total: 0 },
  //         };
  //       }
  //     }

  //     console.log(obj);
  //     //each element of the obj be an array element
  //     //go through array and print values
  //   }

  return (
    <div classNameName="App">
      <div className="w-full flex space-between">
        {/* {surveys.map(
            (answer) => {
                
            }
        )} */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>
      <button
        classNameName="m-4 py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-black hover:bg-indigo-400 hover:text-white"
        onClick={props.logout}
      >
        Log out
      </button>
    </div>
  );
}

export default GuestSpeaker;
