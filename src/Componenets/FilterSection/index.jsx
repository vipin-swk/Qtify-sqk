import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab'
import Carousel from "../Carousel";
import "./fsection.css"
import { useState } from 'react';

export default ({title, data, filters, executeFilter}) =>{
    const [selectedTab, setSelectedTab] = useState(0);

    return (<div className="section">
        <div >
            <h1 className="title">{title}</h1>
            </div>
            <Tabs
            value={selectedTab}
            onChange={(e, value) => {
                setSelectedTab(value)
                executeFilter(filters[value].key)
            
            }}
            TabIndicatorProps={{
                style: {
                    backgroundColor: "var(--css-primary)"
                }
            }}
            >
                {filters.map(
                    (genre) => <Tab className='tab' key={genre.key} label={genre.label}/>
                )}
            </Tabs>
        
        <Carousel data={data} navId="filter" /> 
    </div>)
    
}