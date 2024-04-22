import React from 'react'
import { Slider, Button, DatePicker, Radio } from 'antd';
import { FaSearch, FaRedoAlt } from "react-icons/fa";
import Search from 'antd/es/input/Search';
import { useEffect, useRef } from 'react';
//import './index.css'

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

  const doctorSpecialistOptions = [
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

  // const handleStickyBar = () => {
  //   window.addEventListener('scroll', () => {
  //     if (
  //       document.body.scrollTop > 500||
  //       document.documentElement.scrollTop > 500
  //     ) {
  //       searchBarRef.current.classList.add('sticky__header');
  //     } else {
  //       searchBarRef.current.classList.remove('sticky__header');
  //     }
  //   });
  // };

  // useEffect(() => {

  //   handleStickyBar();
  //   return () => window.removeEventListener('scroll', handleStickyBar);
  // });

  
  return (
    <div className="w-full lg:w-4/12 xl:w-3/12" ref={searchBarRef} style={{ position: 'sticky' }}>

      <div className="p-3 rounded" style={{ background: '#f3f3f3', position: 'relative', right: '25px'  }}>
        <h5 className='text-center mb-3' style={{fontSize:'20px'} }>Search Lawyer</h5>
        <div className="mb-3">
          <Search placeholder="Search..." onSearch={onSearch} enterButton allowClear />
        </div>
        <div className='mb-3'>
          <h6 style={{ fontSize:'17px' }}>Date Range</h6>
          <DatePicker
            style={{ width: "100%" }}
            format="YYYY-MM-DD HH:mm:ss"
            onChange={handleDateChange}
          />
        </div>

        <div className='mb-3'>
          <h6 style={{ fontSize:'17px' }}>Gender</h6>
            <div className='flex flex-col'>
              <Radio.Group onChange={onSelectGender}>
                {options.map((option, index) => (
                  <div key={index}>
                    <Radio value={option.value}>{option.label}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
        </div>

        <div className='mb-3'>
          <h6 style={{ fontSize:'17px' }}>Price Range</h6>
          <Slider range defaultValue={[100, 300]} onChange={onRangeChange} />
        </div>

        <div className='mb-3'>
          <h6 style={{fontSize:'17px'}}>Select Specialist</h6>
            <div className='flex flex-row flex-wrap'>
              <Radio.Group onChange={onSelectSepcialist}>
                {doctorSpecialistOptions.map((option, index) => (
                  <div key={index}>
                    <Radio value={option.value}>{option.label}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
        </div>

        <Button className='w-100 mt-4 mb-2' type="primary" style={{backgroundColor:'#1977cc'}} shape="round"
          icon={<FaSearch />} 
         size="sm">Search</Button>
        {
          Object.keys(query).length > 4 && <Button className='w-100 mt-4 mb-2' style={{backgroundColor:'#1977cc'}} type="primary" shape="round" 
           icon={<FaRedoAlt />} 
          size="sm">Reset</Button>
        }
      </div>

    </div>
  )
}

export default SearchSidebar