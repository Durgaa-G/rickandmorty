import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import * as actionCreators from "../Store/Actions/index"
import { elements } from "../Const";



const Filters = () => {
    const dispatch = useDispatch()

    let filters = useSelector(state => state.filters)


    const updateFIlter = (name, filterType, event) => {
        let filterObj = filters;
        const obj = {};
        obj[filterType] = event.target.value;
        let updatedFIlter = { ...filterObj, ...obj };
        dispatch(actionCreators.updateFilters(updatedFIlter));

    }

    return (

        <React.Fragment>

            <div className="filters-options">
                <h2>Filters</h2>

                <div className="filter-box clearfix">
                    <h2>Species</h2>
                    <label
                    htmlFor="human"
                    className="filter-label">
                        <input type="radio"
                        id="human"
                        name="species"
                        value="human"
                        onChange={(event) => updateFIlter("human", "species", event)}
                        checked={filters.species === "human"}

                        /> Human</label>

                    <label htmlFor="alien" className="filter-label">
                        <input type="radio" id="Alien"

                        id="alien"
                        name="species"
                        value="Alien"
                        onChange={(event) => updateFIlter("Alien", "species", event)}
                        checked={filters.species === "Alien"}
                        /> Alien</label>
                </div>

                <div className="filter-box clearfix">
                    <h2>Gender</h2>
                    <label htmlFor="male" className="filter-label">
                        <input type="radio"
                            name="Gender"
                            id="male"
                            onChange={(event) => updateFIlter("male", "gender", event)}
                            value="male"
                            checked={filters.gender === "male"}


                        /> Male</label>

                    <label htmlFor="female" className="filter-label">
                        <input type="radio" id="female"
                            name="Gender"
                            id="female"
                            onChange={(event) => updateFIlter("female", "gender", event)}
                            value="female"
                            checked={filters.gender === "female"}
                        /> Female</label>

                </div>
                {/* <div className="filter-box clearfix">
                    <h2>Origin</h2>
                     <label htmlFor="male" className="filter-label">
                         <input type="checkbox" id="unknownorigin"
                          onChange={(event)=>updateFIlter("unknown","origin", event)}
                          checked={ (filters.origin && filters.origin.length)? filters.origin.find(element => elements ==="unknown"):false}
                          /
                         > Unknown</label>
                     <label htmlFor="female" className="filter-label"><input type="checkbox" id="female"/> Nuptia-4</label>
                     <label htmlFor="female" className="filter-label"><input type="checkbox" id="female"/> Others</label>

                </div> */}
            </div>

        </React.Fragment>


    )


}


export default Filters;
