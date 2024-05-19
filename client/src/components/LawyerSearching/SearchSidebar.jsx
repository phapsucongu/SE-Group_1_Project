import React from 'react'
import { Slider, Button, DatePicker, Radio } from 'antd';
import { FaSearch, FaRedoAlt } from "react-icons/fa";
import Search from 'antd/es/input/Search';
import { useEffect, useRef } from 'react';
import './LawyerUI.css'

const SearchSidebar = ({ setSearchTerm, setSorByGender, setSpecialist, setPriceRange, resetFilter, query }) => {
  const searchBarRef = useRef(null);
  const handleDateChange = (_date, _dateString) => { }
  const options = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
  ];

  const SpecialistOptions = [
    { label: "Criminal Defense", value: "Criminal Defense" },
    { label: "Family Law", value: "Family Law" },
    { label: "Intellectual Property", value: "Intellectual Property" },
    { label: "Immigration", value: "Immigration" },
    { label: "Environmental", value: "Environmental" },
    { label: "Personal Injury", value: "Personal Injury" },
    { label: "Employment", value: "Employment" },
    { label: "Economic Law", value: "Economic Law" },
  ]

  const onSelectGender = (e) => setSorByGender(e.target.value)

  const onSelectSepcialist = (e) => setSpecialist(e.target.value)

  const onRangeChange = (range) => {
    const obj = {
      min: range[0],
      max: range[1]
    }
    setPriceRange(obj)
  }
  const onSearch = (value) => {
    setSearchTerm(value);
  }

  
  return (
    <div className="w-full lg:w-4/12 xl:w-3/12" >

      <div className="p-3 rounded" style={{ background: '#f3f3f3', right: '25px'  ,position:'sticky', top:120}}>
        <h5 className='text-center mb-3' style={{fontSize:'20px'} }>Search Lawyer</h5>
        <div className="mb-3">
          <Search placeholder="Search..." onSearch={onSearch} enterButton allowClear />
        </div>
        </div>

    </div>
  )
};

export default SearchSidebar