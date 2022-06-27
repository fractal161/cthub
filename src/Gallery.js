import './Gallery.css';
import InviteCard from './inviteCard/InviteCard';
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
