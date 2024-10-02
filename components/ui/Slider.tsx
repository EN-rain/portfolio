import React from 'react';
import Image from 'next/image';
import '../../app/slider.css'; 
import { BackgroundBeams } from './BackgroundBeams';

const Slider: React.FC = () => {
  return (
    <div className="banner"> 
      <div className="slider" style={{ "--quantity": 6 } as React.CSSProperties}>
        <div className="item" style={{ "--position": 1 } as React.CSSProperties}>
          <Image src="/images/mdb.png" alt="MongoDB" width={100} height={125} />
          <p className="text-center font">Mongo DB</p>
        </div>
        <div className="item" style={{ "--position": 2 } as React.CSSProperties}>
          <Image src="/images/e.png" alt="Express" width={100} height={125} />
          <p className="text-center">ExpressJs</p>
        </div>
        <div className="item" style={{ "--position": 3 } as React.CSSProperties}>
          <Image src="/images/r.png" alt="React" width={100} height={125} />
          <p className="text-center">ReactJs</p>
        </div>
        <div className="item" style={{ "--position": 4 } as React.CSSProperties}>
          <Image src="/images/nodejs.png" alt="NodeJS" width={100} height={125} />
          <p className="text-center">NodeJS</p>
        </div>
        <div className="item" style={{ "--position": 5 } as React.CSSProperties}>
          <Image src="/images/javas.png" alt="JavaScript" width={100} height={125} />
          <p className="text-center">JavaScript</p>
        </div>
        <div className="item" style={{ "--position": 6 } as React.CSSProperties}>
          <Image src="/images/python.png" alt="Python" width={100} height={125} />
          <p className="text-center">Python</p>
        </div>
      </div>
      <div className="content">
        <div className="model"></div>
      </div>
      <BackgroundBeams/>
    </div>
  );
};

export default Slider;
