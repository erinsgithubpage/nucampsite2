//import { useState } from 'react';

const Partner = () => {
    const [partner] = useState(false);
    if (partner === true) {
        const { image, name, description } = partner;
        return (
            <>
                <img src={image} alt={name} and style={{ width: '150px' }}/>
                <div className='m-4'><h5 className='fw-bold'>{name}</h5>
                    {description}</div>
            </>
         );
    } else {
        return null;
        //console.log
    }
}

export default Partner;