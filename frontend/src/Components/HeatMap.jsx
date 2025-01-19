import React, { useEffect, useState } from 'react';
import India from '@react-map/india';
import axios from 'axios';

const HeatMap = () => {
    const [ data, setData ] = useState( [] );

    const getColor = ( value ) => {
        if ( value >= 100 ) return '#7f0000'; // Darkest shade
        if ( value >= 90 ) return '#990000'; // Darker shade
        if ( value >= 80 ) return '#b20000';
        if ( value >= 70 ) return '#cc0000';
        if ( value >= 60 ) return '#e60000';
        if ( value >= 50 ) return '#ff0000';
        if ( value >= 40 ) return '#ff3333'; // Original color
        if ( value >= 30 ) return '#ff6666';
        if ( value >= 20 ) return '#ff9999';
        if ( value >= 10 ) return '#ffcccc';
        return '#1C1C1C'; // Lightest shade
    };

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const fetchData = async () => {
        try {
            const res = await axios.get( backendUrl + '/complaint', { withCredentials: true } );
            console.log( res.data.states );
            setData( res.data.states );
        } catch ( error ) {
            console.log( error );
        }
    };

    useEffect( () => {
        fetchData();
    }, [] );

    const stateColors = data.reduce( ( acc, { name, number } ) => {
        acc[ name ] = getColor( number );
        return acc;
    }, {} );
    console.log( stateColors );

    return (
        <div className="flex flex-col items-center mt-32 mr-12">
            <div className="">
                <India
                    type="select-single"
                    cityColors={stateColors}
                    mapColor={'#1C1C1C'}
                    strokeColor="#777777"
                    hints={true}
                    hintTextColor="black"
                    hintBackgroundColor="white"
                    hintPadding="5px"
                    hintBorderRadius={5}
                />
            </div>
        </div>
    );
};

export default HeatMap;