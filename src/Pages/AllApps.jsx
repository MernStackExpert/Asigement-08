import React, { useState } from 'react';
import { useAppApi } from '../Hooks/useAppAPi';
import HomeProduct from '../Componants/HomeProduct';

const AllApps = () => {

  const {app} = useAppApi();

  const [searchValue , setSearchValue] = useState("")
  const searchTrim = searchValue.trim().toLowerCase()
  const searchProduct = searchTrim ? app.filter(data => data.title.toLowerCase().includes(searchTrim)) : app

  return (
    <div className='max-w-[1440px] mx-auto'>
       <div className='mt-[70px] space-y-3'>
         <h1 className='font-bold text-4xl text-center'>Our All Applications</h1>
        <p className='text-gray-300 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div className='flex justify-between items-center mt-6'>
        <h1 className='font-bold'>({app.length}) Apps Found</h1>
        <input value={searchValue} onChange={e => setSearchValue(e.target.value)} className='input font-semibold' type="search" placeholder='Search Product' />
      </div>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-sm:p-5 gap-5 mt-10'>
       {
        searchProduct.map(data => <HomeProduct data={data} key={data.id}></HomeProduct>)
      }
     </div>
    </div>
  );
};

export default AllApps;