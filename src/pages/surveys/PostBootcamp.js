import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { auth, db } from "../../firebase-config";
import CardStats from "../../components/CardStats";

import { Link } from "react-router-dom";

function PostBootCamp(props) {
  const [surveys, setSurveys] = useState([]);
  const [collection, setCollection] = useState([]);
  const speakers = "survey-speakers";

  useEffect(() => {
    let speakersFiltered = [];
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      console.log(data.post_bootcamp);
      let speakersFiltered = data.post_bootcamp.filter(
        (item) => item[0].length > 0
      );
      speakersFiltered = speakersFiltered.sort();
      setSurveys(speakersFiltered);

      let result = {};
      let counter = 0;
      let newArr = [];
      // loop through the resulting array
      for (let i = 0; i <= speakersFiltered.length; i++) {
        let name = speakersFiltered[i][0];

        // let instructor_rate = speakersFiltered[i][2];
        if (result[name]) {
          result[name].instructor += speakersFiltered[i][1];
          result[name].content += speakersFiltered[i][2];
          result[name].interactive += speakersFiltered[i][3];
          result[name].fit_course += speakersFiltered[i][4];
          counter += 1;
          if (speakersFiltered[i][0] !== speakersFiltered[i + 1][0]) {
            result[name].instructor = Math.round(
              result[name].instructor / counter
            );
            result[name].content = Math.round(result[name].content / counter);
            result[name].interactive = Math.round(
              result[name].interactive / counter
            );
            result[name].fit_course = Math.round(
              result[name].fit_course / counter
            );
          }
        } else {
          result[name] = {
            instructor: Number(speakersFiltered[i][1]),
            content: Number(speakersFiltered[i][2]),
            interactive: Number(speakersFiltered[i][3]),
            fit_course: Number(speakersFiltered[i][4]),
          };
          counter = 1;
        }
        setCollection(result);
        newArr = [...Object.entries(result)];
        newArr.pop();
        setCollection(newArr);
      }
    });
  }, []);

  return (
    <div className="App">
      {/* <div className="container md:ml-64 mx-auto p-4 bg-blue-100"> */}
      {/* <div className="relative md:ml-64 bg-blue-100"> */}
      <div className="relative md:pt-32 pb-32 pt-12 ">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              {collection.map((item) => (
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <CardStats
                    statSubtitle={item[0]}
                    statTitle="350,897"
                    statArrow="up"
                    instructor={(item[1].instructor * 100) / 5}
                    content={(item[1].content * 100) / 5}
                    interactive={(item[1].interactive * 100) / 5}
                    fit_course={(item[1].fit_course * 100) / 5}
                    statPercentColor="text-emerald-500"
                    statDescripiron=""
                    statIconName="far fa-chart-bar"
                    statIconColor="bg-green-500"
                  />
                </div>
              ))}
            </div>
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
  );
}

export default PostBootCamp;
