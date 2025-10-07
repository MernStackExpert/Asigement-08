
import { useEffect, useState } from "react";
import InstallCard from "../Componants/InstallCard";
import { useAppApi } from "../Hooks/useAppAPi";
import { getStoredData, removeFromStoreData } from "../Utils/LocalStrog";
import { ArrowDown } from "lucide-react";

const Installtion = () => {

  const {app} = useAppApi();
  const [installedIds, setInstalledIds] = useState([]);
 

    useEffect(() => {
    setInstalledIds(getStoredData());
  }, []);

  const data = getStoredData()
  const matchedData = app?.filter(item => data.includes(item.id)) || [];

    
    const handleRemove = (id) => {
    removeFromStoreData(id);
    const remainingIds = installedIds.filter(currentId => currentId !== id);
    setInstalledIds(remainingIds);
  };

  return (
    <div className="max-w-[1440px] mx-auto max-sm:p-3">
      <div className="mt-[70px] space-y-3">
        <h1 className="font-bold text-4xl text-center">Your Installed Apps</h1>
        <p className="text-gray-400 text-center max-sm:mb-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div>
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">{matchedData.length} Apps Found</h1>
          <label>
            <details className="w-64 bg-white border border-gray-300 rounded">
              <summary className="flex items-center justify-between p-3 list-none cursor-pointer">
                <span >Sort By Size</span>
                <span><ArrowDown /></span>
             
              </summary>

              <div className="border-t border-gray-200">
                <a href="#" className="block p-3 text-sm hover:bg-gray-200">
                  Low to High
                </a>
                <a href="#" className="block p-3 text-sm hover:bg-gray-200">
                  High To Low
                </a>
              </div>
            </details>
          </label>
        </div>

        {
          matchedData.map(data => <InstallCard handleRemove={handleRemove } key={data.id} data={data}></InstallCard>)
        }

      </div>

    </div>
  );
};

export default Installtion;
