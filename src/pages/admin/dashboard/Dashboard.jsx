import React, { useContext } from 'react'
import {FaUserTie } from 'react-icons/fa';
import myContext from '../../../context/data/myContext';
import Layout from '../../../components/layout/Layout';
import DashboardTab from './DashboardTab';
import {BsFillBoxFill, BsFillInboxesFill, BsMailbox2} from "react-icons/bs"
import {TbTruckDelivery} from "react-icons/tb"
function Dashboard() {
    const context = useContext(myContext);
    const { product, order, user } = context;

  return (
    <Layout>
        <section className="text-gray-600 body-font py-20 mb-10 bg-[#FDE5D4]">
            <div className="container px-5 mx-auto mb-10">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="bg-white  px-4 py-3 rounded-xl shadow-lg" >
                            <div className="text-[#445D48] w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <BsFillBoxFill size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1">{product.length}</h2>
                            <p className="text-[#445D48] font-bold" >Total Products</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" bg-white px-4 py-3 rounded-xl shadow-lg" >
                            <div className="text-[#445D48] w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <BsFillInboxesFill size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" >{order.length}</h2>
                            <p className=" text-[#445D48]  font-bold" >Total Orders</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="  bg-white px-4 py-3 rounded-xl shadow-lg"  >
                            <div className="text-[#445D48] w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <FaUserTie size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" >{user.length}</h2>
                            <p className=" text-[#445D48]  font-bold" >Total Users</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" bg-white  px-4 py-3 rounded-xl shadow-lg" >
                            <div className="text-[#445D48] w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <TbTruckDelivery size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" >0</h2>
                            <p className=" text-[#445D48] font-bold" >Orders Delivered</p>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardTab/>
        </section>
    </Layout>
  )
}

export default Dashboard