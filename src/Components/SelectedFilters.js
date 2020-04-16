import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import * as actionCreators from "../Store/Actions/index";




const Filters = () => {


    const dispatch = useDispatch();
    const data = useSelector(state => state);
    let filters = useSelector(state => state.filters)

    const removefilter= (filterType)=>{

            console.log(filterType)
            let filterObj = filters;

            filterObj[filterType] = "";
            let updatedFIlter = { ...filterObj, ...filterObj };
            console.log(updatedFIlter)
            dispatch(actionCreators.updateFilters(updatedFIlter));


    }



    return (

        <React.Fragment>
           <div className="cleaarfix" style={{marginBottom:"20px"}}>

               {(data.filters.gender || data.filters.species) && <h1 style={{fontSize:"20px"}}>Selected Filters</h1>}

            {data.filters.gender && <label className="selectedfilter">{data.filters.gender}<button className="remove" onClick={()=>removefilter("gender")}>X</button></label>}
            {data.filters.species && <label className="selectedfilter">{data.filters.species}<button className="remove" onClick={()=>removefilter("species")}>X</button></label>}
            </div>


        </React.Fragment>


    )


}


export default Filters;
