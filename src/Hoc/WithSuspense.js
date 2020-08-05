import React from 'react';

export const WithSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<h2>...Loaning</h2>}>
            <Component {...props}/>
        </React.Suspense>
    }
}

