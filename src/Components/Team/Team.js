import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Team = () => {
    const [team , setTeam] = useState([])
    const history = useHistory()

    const handleClick=(teamDetailsId)=>{
        console.log('clicked')
        const url = `/teamDetail/${teamDetailsId}`;
        history.push(url);
    }

    

    
    
    useEffect(()=>{
        
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`)
        .then(res=> res.json())
        .then(data => setTeam(data.teams))
    },[])


    


    return (
        <div className="team">
            <div className="teamHeader">
                <h1>LA LIGA</h1>
                

            </div>
            
                {
                 team.map(team=> 
                  
                     <div className="mainBody">
                          <div className="teamBody">
                        <img style={{width:'100px', height:'100px'}} src={team.strTeamBadge} alt=""/>
                        <h3>{team.strAlternate}</h3>
                        <p>Sports Type : {team.strSport} </p>
                        <button className="px-4 py-2 rounded text-light exploreBtn" onClick={()=>handleClick(team.idTeam)}> Explore <FontAwesomeIcon className="mx-2  arrowIcon" icon={faArrowRight} /></button>
                        </div>
                     </div>
                  



                )
            }
             

            
            
        </div>
    );
};

export default Team;