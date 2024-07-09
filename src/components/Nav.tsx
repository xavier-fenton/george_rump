import { useLocation } from 'preact-iso';
import React from 'react';
import {ArchiveNav} from './subcomponents/ArchiveNav';

const Nav = () => {
  const location = useLocation()

  return (
    <>
      {location.path === '/archive' ? <ArchiveNav /> : 
      <div class="font-medium items-center px-[20px] py-[5px] flex justify-between flex-row gap-[5px]">
        <span></span>
        <div>George Rump</div>
        <div className="text-blue-500 underline text-sm"><a href="/archive">archive</a></div>
      </div>
      
      }

    </>
  );
};

export default Nav;