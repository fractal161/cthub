import './Gallery.css';
import InviteCard from './InviteCard.js';


function Gallery({servers}) {
  return (
    <>
      <p>{servers.length} results</p>

      <div className="Gallery">

        {servers.map(server => {
          return <InviteCard server={server} key={server.id}></InviteCard>
        })}
      </div>
    </>
  );
}

export default Gallery;
