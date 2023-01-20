import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import rabbit from "../src/resources/rabbit.png"
import wolf from "../src/resources/wolf.png";

function ProgressBar() {
  const gameStage = useSelector((state) => state.gameStage);
  const [renderedBar, setRenderedBar] = useState();
  useEffect(() => {
    
    if (gameStage) {
      switch (gameStage.value) {
        case 0:
          setRenderedBar(
            <div className="flex items-center mt-4">
              <div className="mt-5">
                <img className="w-16 mr-4" src={wolf} alt="wolf" />
              </div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300" />
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div>
                <img className="w-16" src={rabbit} alt="rabbit" />
              </div>
            </div>
          );
          break;
        case 1:
          setRenderedBar(
            <div className="flex items-center mt-4">
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300" />
              <div className="mt-5">
                <img className="w-16 mr-4" src={wolf} alt="wolf" />
              </div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div>
                <img className="w-16" src={rabbit} alt="rabbit" />
              </div>
            </div>
          );
          break;
        case 2:
          setRenderedBar(
            <div className="flex items-center mt-4">
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300" />
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div className="mt-5">
                <img className="w-16 mr-4" src={wolf} alt="wolf" />
              </div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div>
                <img className="w-16" src={rabbit} alt="rabbit" />
              </div>
            </div>
          );
          break;
        case 3:
          setRenderedBar(
            <div className="flex items-center mt-4">
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300" />
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div className="mt-5">
                <img className="w-16 mr-4" src={wolf} alt="wolf" />
              </div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div>
                <img className="w-16" src={rabbit} alt="rabbit" />
              </div>
            </div>
          );
          break;
        case 4:
          setRenderedBar(
            <div className="flex items-center mt-4">
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300" />
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div className="mt-6 mr-4 h-8 w-8 bg-gray-300 rounded-full"></div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div className="mt-5">
                <img className="w-16 mr-4" src={wolf} alt="wolf" />
              </div>
              <hr className="mt-6 mr-4 w-10 border-2 border-gray-300 " />
              <div>
                <img className="w-16" src={rabbit} alt="rabbit" />
              </div>
            </div>
          );
          break;
        case 5:
          setRenderedBar(
            <div className="flex items-center mt-4">
              <div className="mt-5">
                <img className="w-16 mr-4" src={wolf} alt="wolf" />
              </div>
            </div>
          );
          break;
        default:
          break;
      }
    }
  }, [gameStage.value]);

  return <React.Fragment>{gameStage && renderedBar}</React.Fragment>;
}

export default ProgressBar;
