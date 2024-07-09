import React from 'react';

const EmbeddedVideo = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center px-4 drop-shadow-xl h-[560px]">
                <iframe
                    className="w-full h-full"
                    src="https://player.vimeo.com/video/935702416?h=11fcff9444"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen={true}
                ></iframe>
                {/* <div className="w-fit pt-[40px]">Text about video</div> */}
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </>
    );
};

export default EmbeddedVideo;