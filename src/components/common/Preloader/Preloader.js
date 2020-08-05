import React from 'react';
import preloader from "../../../img/SimilarPlumpBarasingha-small.gif";


function Preloader(props) {
return(
    <div>
        <img src={preloader}/>
        {/*<h2>...Loading</h2>*/}
    </div>
)
}

export default Preloader;