import React, { useRef, useState } from "react";

function UseRef() {
  const [isPlaying, setIsPlaying] = useState(false);
  const inputRef1 = useRef(null);
  const listRef = useRef(null);
  const playRef = useRef(null);

  const handlefirstRef = () => {
    inputRef1.current.focus();
  };
  const handlePlay = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if(nextIsPlaying){
      playRef.current.play();
    }else{
      playRef.current.pause();
    }
  }
  const scrollToIndex = (index) => {
    // const listNode = listRef.current;
    // const imgNode = listNode.querySelectorAll('li > img')[index];
    // imgNode.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'nearest',
    //   inline: 'center'
    // })
  };
  return (
    <div>
      <h1>useRef examples</h1>
      <div>
        <h3>Foucsuing a text input</h3>
        <div>
          <input ref={inputRef1} />
          <button onClick={handlefirstRef}>click to foucs on input</button>
        </div>
      </div>
      <br />
      <div>
        <h3>Scrolling an image to view</h3>
        <div>
          <nav>
            <button onClick={scrollToIndex(0)}>Tom</button>
            <button onClick={scrollToIndex(1)}>Maru</button>
            <button onClick={scrollToIndex(2)}>Jelly</button>
          </nav>
          <ul ref={listRef}>
            <li>
              <img src="https://placekitten.com/g/200/200" alt="Tom" />
            </li>
            <li>
              <img src="https://placekitten.com/g/300/200" alt="Maru" />
            </li>
            <li>
              <img src="https://placekitten.com/g/250/200" alt="Jelly" />
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div>
        <h3>Playing and pausing a video</h3>
        <div>
          <button onClick={handlePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
          <br/>
          <video
            width="250"
            ref={playRef}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <br />
      <div>
        <h3>Exposing a ref to your own component</h3>
      </div>
    </div>
  );
}

export default UseRef;

