import React, { useEffect } from 'react';
import { getFirestore } from '../firebase/index';



const Home =({greeting})=>{



    return(
        <><div class="row">
            <h1 class="col-4 offset-md-4 d-flex justify-content-around">{greeting}</h1>
            </div>
            
        </>
    )
}

export default Home;

