import React from 'react';

const Information = () => {
    return (
        <div className="px-[10px]">
            <div className="text-gray-900">
                <div className="font-semibold w-fit text-sm">Contact:</div>
                <div className="flex flex-row gap-2">
                    <div className="text-sm">Email:</div>
                    <div className="underline text-sm">
                        <a href="mailto: gcrrump@gmail.com">gcrrump@gmail.com</a>
                    </div>
                </div>
                <div className="flex flex-row gap-2 text-sm">
                    <div>Number:</div> <div className="underline">+64 204 440 101</div>
                </div>
            </div>
        </div>
    );
};

export default Information;