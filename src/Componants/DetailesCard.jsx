import React from 'react';
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import likeIcon from "../assets/icon-review.png";

const DetailesCard = ({findData}) => {
  const { image, title, companyName, ratingAvg, size, downloads, reviews } = findData;
  return (
     <div className=" bg-base-200 p-5 h-[350px]">
      <div className="flex items-center">
        <div>
          <figure className="h-[350px] w-[350px] p-10 overflow-hidden">
            <img
              src={image}
              alt="Shoes"
              className="rounded-xl object-cover"
            />
          </figure>
        </div>

        <div>
          <div>
            <h1 className="text-2xl font-bold">
              {title}
            </h1>
            <h1 className="font-semibold mb-7 mt-2">
              Developed by <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">{companyName}</span>
            </h1>

            <div className="flex space-x-30 max-sm:space-x-0 max-sm:space-y-10  text-center max-sm:flex-col border-t border-gray-300 pt-6">
              <div className="space-y-1">
                <img className="h-[40px] w-[40px]" src={downloadIcon} alt="" />
                <h1>Downloads</h1>
                <h1 className="font-bold text-3xl text-start">{downloads}</h1>
              </div>
              <div className="space-y-1">
                <img className="h-[40px] w-[40px]" src={ratingIcon} alt="" />
                <h1>Average Ratings</h1>
                <h1 className="font-bold text-3xl text-start">{ratingAvg}</h1>
              </div>
              <div className="space-y-1">
                <img className="h-[40px] w-[40px]" src={likeIcon} alt="" />
                <h1 className="text-start">Total Reviews</h1>
                <h1 className="font-bold text-3xl text-start">{reviews}</h1>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <button className="btn bg-[#00D390] text-white">
              Install Now ( {size} MB )
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailesCard;