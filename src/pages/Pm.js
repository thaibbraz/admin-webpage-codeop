

function Pm(props) {

  
    return (
      <div className="App">
      <div className="my-20 mx-4 lg:m-20 xl:m-40 2xl:m-40 md:my-20 mx-10 sm:my-20 mx-10">   
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-1 lg:px-1">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr className="border-b bg-indigo-200 hover:bg-indigo-400">
                        <th scope="col" className=" text-sm font-medium text-white-900 px-6 py-4 text-center">
                          #
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                         Student Name
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                         Date
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                        Cohort
                        </th>
                        
     
                      </tr>
                    </thead>
                    <tbody>   
                    { 
                    
                    props.attendanceList[Object.keys(props.attendanceList)[0]].map((item, index) =>                             
                           <tr className="border-b bg-white hover:bg-gray-100" key={index}>
                               <td className="text-center text-sm leading-5 font-medium text-gray-900">
                               {index+1}
                           </td>
                           <td className="text-center text-sm leading-5 font-medium text-gray-900">
                           {item.name}
                           </td>
                           <td className="text-center text-sm leading-5 font-medium text-gray-900">
                           {item.date.map((item, index) =>
                           <div key={index}>
                            {item}
                            </div>
                            )}
                           </td>                         
                           <td className="text-center text-sm leading-5 font-medium text-gray-900">
                               <a href={item.slide_link} className="co-btn" target="_blank">{item.cohort}</a>
                           </td>  
                           </tr>
                       )                    
               }               
                    </tbody>
                  </table>
                  <div className="group flex justify-center">
                  <button  className="m-4 py-2 px-4 border border-transparent text-sm font-medium
                  rounded-md text-black hover:bg-indigo-400 hover:text-white" onClick={props.logout}>Log out</button>
              </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
  
  export default Pm;
  