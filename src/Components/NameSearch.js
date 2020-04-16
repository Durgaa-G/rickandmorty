import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import * as actionCreators from "../Store/Actions/index"
import { elements } from "../Const";



const Filters = () => {
    const dispatch = useDispatch()
    let [name, setName] = useState()
    let [error, setError] = useState(null)

    let filters = useSelector(state => state.filters)



    const search = (e) => {
        e.preventDefault();


        let filterObj = filters;

        if (!name) {
            setError("Please enter name")
            return
        }

        filterObj["name"] = name;
        let updatedFIlter = { ...filterObj, ...filterObj };
        console.log(updatedFIlter)
        dispatch(actionCreators.updateFilters(updatedFIlter));
    }
    return (

        <React.Fragment>
            <form onSubmit={search} style={{ marginBottom: "30px" }} className="form">
                <label>Search By Name</label>
                <br />
                <input type="text" placeholder="Type name"

                    onChange={
                        e => {
                            setError(null);
                            setName(e.target.value)
                        }
                    }

                    className="input-form"
                />

                <button type="submit"
                    style={{ width: "100px", padding: "10px 20px", marginTop: "10px" }}
                >Search</button>
                <div>
                 {error && <label style={{color:"#ff0000"}}>{error}</label>}
                 </div>
            </form>
        </React.Fragment>


    )


}


export default Filters;
