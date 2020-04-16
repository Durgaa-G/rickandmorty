import React from "react";
import Filters from "../Components/Filters"
import SelectedFilters from "../Components/SelectedFilters"
import Listcharacter from "../Components/Listcharacter";
import NameSearch from "../Components/NameSearch"



const Landing = () => {

    return (

        <React.Fragment>

            <div className="container">
                <div className="row">
                    <div className="filters">

                        <Filters />
                    </div>
                    <div className="main">
                        <SelectedFilters />
                        <NameSearch/>
                        <Listcharacter />


                    </div>

                </div>


            </div>

        </React.Fragment>


    )


}


export default Landing;
