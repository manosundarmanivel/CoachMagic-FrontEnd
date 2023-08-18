import React, { useState } from 'react'

import LabTabs from './Tabs';
const Settings = () => {
    const [tabIndex, setTabIndex] = useState(0);
    
  return (
    <div className='flex font-poppins'>
        
        <div className='bg-[#F1ECFF] m-10 rounded-3xl '>
        <div className='bg-white m-10 p-10 rounded-3xl w-[900px]'>
        <LabTabs/>
        </div>
        </div>
        
    </div>
  )
}

export default Settings