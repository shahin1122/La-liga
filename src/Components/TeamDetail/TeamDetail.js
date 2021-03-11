import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import img1 from '../../img/male.png';
import img2 from '../../img/female.png';
import facebook from '../../img/Facebook.png';
import twitter from '../../img/Twitter.png';
import youtube from '../../img/YouTube.png';
import flag from '../../img/flag (1) 1.png';
import football from '../../img/football (1) 1.png';
import found from '../../img/found 1.png'
import genter from '../../img/male-gender-sign 1.png';


const TeamDetail = () => {
    const {teamDetailsId} = useParams();
    const [singleTeam , setSingleTeam] = useState([])


    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamDetailsId}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setSingleTeam(data.teams))
    },[teamDetailsId])



    


    return (
        <div>
            

            {
                singleTeam.map(teamDetailsId=> 


                 <main >
                     <div className="imgSection">
                        <img id="bgImg" src={teamDetailsId.strStadiumThumb} alt=""/>
                        <img id="logoImg" src={teamDetailsId.strTeamBadge}  alt=""/>
                     </div>
                    

                    <br/>

                    <div className="totalInfo">

                        {/* team detail */}
                        <div className="teamInfo">
                            <h2>{teamDetailsId.strTeam}</h2>
                            <p> <img width="20px" src={found} alt=""/> Founded: {teamDetailsId.intFormedYear}</p>
                            <p> <img width="20px" src={flag} alt=""/> Country: {teamDetailsId.strCountry}</p>
                            <p> <img width="20px" src={football} alt=""/> Sport Type: {teamDetailsId.strSport}</p>
                            <p> <img width="20px" src={genter} alt=""/> Gender : {teamDetailsId.strGender}</p>
                            

                            


                        </div>
                        {/* team logo */}

                        <div className="playerType">
                            {
                                teamDetailsId.strGender === "Male" ? <img height="150px" width="200px" src={img1} alt=""/>: <img src={img2} alt=""/> 
                            }


                        </div>

 
                    </div>
                    
                    {/* paragraph */}
                    <div className="discription">
                            <p><small>{teamDetailsId.strDescriptionEN}</small></p>

                    </div>

                    <div className="social-link d-flex justify-content-center align-items-center m-4">
                     <div>
                        <a target="_" href={`https://${teamDetailsId.strWebsite}`}> <img width="70px" src={facebook} alt=""/> </a>
                        <a target="_" href={`https://${teamDetailsId.strTwitter}`}> <img width="70px" src={twitter} alt=""/> </a>
                        <a target="_" href={`https://${teamDetailsId.strTwitter}`}> <img width="70px" src={youtube} alt=""/> </a>


                     </div>

                    </div>





                    





                     
                 </main>

                 

                 
                 
                )
            }

        </div>
    );
};

export default TeamDetail;