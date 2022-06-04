import { Routes, Route } from 'react-router-dom'
import CodeOp_logo from '../CodeOp_logo_blue.jpg';
import { Link } from "react-router-dom";

function App() {
  return (
  
    <div className="App">
        <div className="container mx-auto p-4">
        <div className="mt-6 mb-6 flex justify-center">
        <img src={CodeOp_logo} alt="CodeOp logo" className="h-20" />
        </div>
        <h1 className="mb-12 text-3xl font-semibold text-center">
        Courses Platform
        </h1>
        <div className="divide-y">
            <div className="py-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                
                <Link
                  className="shadow-md border-2 hover:border-blue-500 rounded-lg p-4 text-blueGray-700 rext-xs uppercase"
                  to="/fsd"
                >FSD</Link>
                <Link
                  className="shadow-md border-2 hover:border-blue-500 rounded-lg p-4 text-blueGray-700 rext-xs uppercase"
                  to="/pm"
                >PM</Link>
                <Link
                  className="shadow-md border-2 hover:border-blue-500 rounded-lg p-4 text-blueGray-700 rext-xs uppercase"
                  to="/ds"
                >DS</Link>
                <Link
                  className="shadow-md border-2 hover:border-blue-500 rounded-lg p-4 text-blueGray-700 rext-xs uppercase"
                  to="/fe"
                >FE</Link>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
