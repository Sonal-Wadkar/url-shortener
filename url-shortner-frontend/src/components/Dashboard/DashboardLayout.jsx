import React, { useState } from "react";
import Graph from "./Graph";
import { useStoreContext } from "../../contextApi/ContextApi";
import {
  useFetchMyShortUrls,
  useFetchTotalClicks,
} from "../../hooks/useQuery";
import ShortenPopUp from "./ShortenPopUp";
import { FaLink } from "react-icons/fa";
import ShortenUrlList from "./ShortenUrlList";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

const DashboardLayout = () => {
  const { token } = useStoreContext();
  const navigate = useNavigate();

  const [shortenPopUp, setShortenPopUp] = useState(false);

  function onError() {
    navigate("/error");
  }

  const {
    isLoading,
    data: myShortenUrls = [],
    refetch,
  } = useFetchMyShortUrls(token, onError);

  const {
    isLoading: loader,
    data: totalClicks = [],
  } = useFetchTotalClicks(token, onError);

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)] bg-[#D1CFC9]">
      {loader ? (
        <Loader />
      ) : (
        <div className="lg:w-[90%] w-full mx-auto py-16">

          {/* Click Analytics Graph */}
          <div className="h-96 relative bg-[#BDC4D4] rounded-lg shadow-md p-4">
            {totalClicks.length === 0 && (
              <div className="absolute flex flex-col justify-center sm:items-center items-end w-full left-0 top-0 bottom-0 right-0 m-auto">
                <h1 className="text-[#0F1A2B] font-serif sm:text-2xl text-[18px] font-bold mb-1">
                  No Data For This Time Period
                </h1>

                <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-sm text-[#52677D]">
                  Share your short link to view where your engagements are
                  coming from
                </h3>
              </div>
            )}

            <Graph graphData={totalClicks} />
          </div>

          {/* Create Short URL Button */}
          <div className="py-5 sm:text-end text-center">
            <button
              className="bg-[#1C2E4A] hover:bg-[#0F1A2B] transition-colors duration-200 px-5 py-2.5 rounded-md text-[#D1CFC9] font-semibold shadow-md"
              onClick={() => setShortenPopUp(true)}
            >
              Create a New Short URL
            </button>
          </div>

          {/* Short URL List */}
          <div>
            {!isLoading && myShortenUrls.length === 0 ? (
              <div className="flex justify-center pt-16">
                <div className="flex gap-2 items-center justify-center py-6 sm:px-8 px-5 rounded-md shadow-lg bg-[#BDC4D4] border border-[#52677D]">
                  <h1 className="text-[#0F1A2B] font-montserrat sm:text-[18px] text-[14px] font-semibold mb-1">
                    You haven't created any short link yet
                  </h1>

                  <FaLink className="text-[#52677D] sm:text-xl text-sm" />
                </div>
              </div>
            ) : (
              <ShortenUrlList data={myShortenUrls} />
            )}
          </div>
        </div>
      )}

      {/* Shorten URL Popup */}
      <ShortenPopUp
        refetch={refetch}
        open={shortenPopUp}
        setOpen={setShortenPopUp}
      />
    </div>
  );
};

export default DashboardLayout;