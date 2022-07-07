import './Gallery.css';
import InviteCard from './InviteCard.js';

function Gallery({ servers }) {
  return (
    <>
      <div className="Gallery">
        {servers.map((server) => {
          return <InviteCard server={server} key={server.id}></InviteCard>;
        })}
      </div>
    </>
  );
}

export default Gallery;
