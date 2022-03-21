import React from 'react';

export const Error = ({textError}) => {
    return (
        <div className="border-2 w-full p-2 mt-2 rounded-md text-center bg-red-600 text-white mb-3 uppercase font-bold">
            <p>{textError}</p>
        </div>
    )
}
