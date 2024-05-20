import React from 'react'
import { Slider, Button, DatePicker, Radio } from 'antd';
import { FaSearch, FaRedoAlt } from "react-icons/fa";
import Search from 'antd/es/input/Search';
import { useEffect, useRef } from 'react';
import './LawyerUI.css'

const SearchSidebar = ({ setSearchTerm, setSorByGender, setSpecialist, setPriceRange, resetFilter, query }) => {
  const searchBarRef = useRef(null);
  const onSearch = (value) => {
    setSearchTerm(value);
  }

  
  return (
    <div className="w-full lg:w-4/12 xl:w-3/12" >

      <div className="p-3 rounded" style={{ background: '#f3f3f3', right: '25px'  ,position:'sticky', top:120}}>
        <h5 className='text-center mb-3' style={{fontSize:'20px'} }> Search Lawyer </h5>
        <div className="mb-3">
          <Search placeholder="Search..." onSearch={onSearch} enterButton allowClear />
        </div>
       </div>
       </div>
  )
};

export default SearchSidebar