import React, { useState } from 'react';
import SearchSidebar from './SearchSidebar';
import LawyerList from './LawyerList'
import SubHeader from '../../components/Header/SubHeader';

const SearchLawyer = () => {
    const query = {};
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortByGender, setSorByGender] = useState("");
    const [specialist, setSpecialist] = useState("");
    const [priceRange, setPriceRange] = useState({});

    query["limit"] = size;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;

    sortByGender !== '' && (query["gender"] = sortByGender);
    specialist !== '' && (query["specialist"] = specialist);

    return (
        <div>
            <SubHeader title='Search Lawyers' subtitle='Our trustworthy lawyers'/>
            <div className="container" style={{ marginBottom: 200, marginTop: 60, marginLeft: 60}}>
                <div className="mx-auto">
                    <div className="flex flex-wrap">
                        <SearchSidebar 
                            setSearchTerm={setSearchTerm}
                            setSorByGender={setSorByGender}
                            setSpecialist={setSpecialist}
                            setPriceRange={setPriceRange}
                            query={query}
                        />
                        <div className="w-full lg:w-8/12 xl:w-9/12">
                            
                            <LawyerList />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SearchLawyer