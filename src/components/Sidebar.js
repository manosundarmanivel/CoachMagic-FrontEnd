import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import DashHead from './DashHead';
import OTPInput, { ResendOTP } from "otp-input-react"

const Sidebar = () => {
   
    const DashboardList =[
        {name : 'Dashboard',icon : <DashboardIcon/>},
        {name : 'Profile',icon : <DashboardIcon/>},
        {name : 'Invitations',icon : <DashboardIcon/>},
        {name : 'Reviews',icon : <DashboardIcon/>},
        {name : 'Analytics',icon : <DashboardIcon/>},
        {name : 'Payment',icon : <DashboardIcon/>},
        {name : 'Transactions',icon : <DashboardIcon/>},
       
    ]
    

  return (
    <div className='w-[250px] font-poppins p-7 m-3'>
        <DashHead/>
        <div className='pt-5'>
            {
                DashboardList.map((dash,index)=>{
                    return(
                       <div className='flex pt-4 pb-4'>
                        
                        <div>{dash.icon}</div>
                        <h1 className='pl-3 text-[20px]'>{dash.name}</h1>
                        </div>
                       
                        
                        
                    )
                })
            }
        </div>
    </div>
  )
}

export default Sidebar