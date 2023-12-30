import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  url: string;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, onClose }) => {
  const playerRef = useRef<ReactPlayer | null>(null);

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="player-wrapper fixed h-[100vh] w-[100vw] top-0 left-0 z-[150] bg-black/70 backdrop-filter backdrop-blur-sm ">
      <div className='w-full h-full flex flex-col justify-center items-center '>
        <div className='flex justify-end w-[90vw] px-8'>
          <div className='text-white hover:cursor-pointer bg-[gray] px-[10px] py-[5px] rounded-md hover:bg-[red]' onClick={handleClose}>Close</div>
        </div>
        <ReactPlayer
          ref={playerRef}
          className="react-player mt-5 md:mx-8"
          url={url}
          width="100%"
          height="70%"
          controls={true}
          playing={true}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
