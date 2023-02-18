import { useState } from 'react';

const Partner = ({partner}) => {
   // const [partner] = useState(true);
    if (partner ) {
        const { image, name, description } = partner;
        return (
            <>
                <img src={image} alt={name} and style={{ width: '150px' }}/>
                <div className='m-4'>
                    <h5 className='fw-bold'>{name}</h5>       {description}
                    </div>
            </>
         );
    } 
        return null;
        //console.log
 
}

export default Partner;