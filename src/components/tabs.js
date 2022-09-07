import { useState } from "react";
import { FiPhone } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import { CgMenuGridO } from 'react-icons/cg';
import { RiSettings3Line } from 'react-icons/ri';
import { FaRegDotCircle } from 'react-icons/fa';

export default function Tabs() {

    const handlechange = () => {

    }
    return (
        <div className="tabbar">
            <div className='tabphone'
                onClick={handlechange}
            >
                <FiPhone className="iconstyle" size={22} />
            </div>
            <div className="tabcontact"
                onClick={handlechange}

            >
                <BiUser className="iconstyle" size={22} />
            </div>
            <div className="tabgrid">
                <div className="tabgridcont">
                    <CgMenuGridO size={30}/>
                </div>
            </div >
            <div className="tabsetting"
                onClick={handlechange}
            >
                <RiSettings3Line className="iconstyle" size={22} />
            </div >
            <div className="tabdot"
                onClick={handlechange}
            >
                <FaRegDotCircle className="iconstyle" size={22} />
            </div>
        </div>
    );
}
