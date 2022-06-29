import './Gallery.css';
import InviteCard from './InviteCard.js';
import servers from './servers.json'


function Gallery() {
  return (
    <div className="Gallery">
      {servers.map(server => {
        return <InviteCard code={server}></InviteCard>
      })}
    </div>
  );
}

export default Gallery;
