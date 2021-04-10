import React from 'react'
const MovieCard = (props) => {


  const style = {backgroundColor:"#630000", color:"#eeebdd", width:"8cm",height:"10cm",margin:"1cm",borderRadius:"0.3cm",padding:"0.5cm",fontSize:"25px"}
  const styleimg ={height:"200px",width:"120px",paddingBottom:"0.1cm"}

  return (
    <div >
        <div style={style}>
          <p>
            Movie name :{props.name}<br />
            description :{props.desc}<br />
          </p>
          
          <img src={props.imageUrl} alt="loading" style={styleimg} /> 
          <p>rating :{props.rate}<br /></p>
        </div>
    </div>
  );
};
 
export default MovieCard; 