import React, {memo} from 'react';


const Title = memo(() => {
    console.log('title is rendering again!');

    //popshap icon
    return (
        <>
            <div className="titleBar">

                <img className="img" src='images/logo.png'></img>
            </div>
  
        </>

        
    )

});

export default Title;