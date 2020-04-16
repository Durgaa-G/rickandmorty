import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import * as actionTypes from "../Store/Actions/index"



const Character = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state)

    useEffect(() => {

        dispatch(actionTypes.getChars())


    }, [dispatch])


    if(data.chars.loading){
        return <div className={{width:"100px", height:"100px", margin:"100px auto"}}>Loading...</div>
    }
    if(data.chars.data && !data.chars.data.results ){
        return <div className={{width:"100px", height:"100px", margin:"100px auto"}}>No resuts found</div>
    }
    return (

        <React.Fragment>

            <div className="results">


                {data.chars.data && data.chars.data.results.map((character, index) => {
                    return <div key={index} className="card">

                        <img src={character.image} alt={character.name}
                        className="charimg"/>
                    <div className="charinfo">
                        <h2>{character.name}</h2>

                        id: {character.id} - created: {parseInt((new Date() - new Date(character.created)) / (1000 * 3600 * 24) / 365)} Years Ago
                        </div>
                        <div className="status">
                            <span>Status</span><span className="status-info">{character.status}</span>
                        </div>
                        <div className="status">
                            <span>Species</span><span className="status-info">{character.species}</span>
                        </div>
                        <div className="status">
                            <span>Gender</span><span className="status-info">{character.gender}</span>
                        </div>
                        <div className="status">
                            <span>Origin</span><span className="status-info">{character.origin.name}</span>
                        </div>
                        <div className="status">
                            <span>Last Locatoion</span><span className="status-info">{character.location.name}</span>
                        </div>


                    </div>

                })}
            </div>

        </React.Fragment>


    )


}


export default Character;
