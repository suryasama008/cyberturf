import React from 'react';

const Preloader = () => {
    return (
        <>
            <div id="preloader-active">
            <div className="preloader flex-1 content-center">
                <div className="logo absolute inset-y-2/4 jump">
                    <h1 className="text-2xl font-semibold ">Cyber Turf</h1>
                </div>
            </div>
        </div>
        </>
    );
};

export default Preloader;