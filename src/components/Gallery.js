import './Gallery.css';
import InviteCard from './InviteCard.js';
import servers from './servers.json'


function Gallery() {
  return (
    <>
      <p>{servers.length} results</p>

      <div className="Gallery">

        {servers.map(server => {
          return <InviteCard server={server}></InviteCard>
        })}
      </div>
    </>
  );
}

export default Gallery;
