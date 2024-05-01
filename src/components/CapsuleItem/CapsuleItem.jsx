import { useEffect, useState } from 'react';
import CapsuleComponent from '../CapsuleComponent/CapsuleComponent';

const CapsuleItem = () => {
    const [capsules, setCapsules] = useState([]);

    useEffect(() => {
        getCapsules();
    }, []);


    const getCapsules = async () => {
        try {
            let response = await fetch('https://api.spacexdata.com/v3/capsules')
            let data = await response.json()
            setCapsules(data);
        } catch { }
    }

    return (
        <>
            {capsules?.map((capsule) => <CapsuleComponent capsule={capsule} />)}
        </>
    )



}

export default CapsuleItem;
