import './InviteCard.css';
import Button from './Button.js';

function InviteCard({ server }) {
  const name = server.name;
  const iconUrl = [
    'https://cdn.discordapp.com/icons',
    server.id,
    server.icon,
  ].join('/');
  const memberCount = server.members;

  return (
    <div className="InviteCard">
      <h2>{name}</h2>
      <div className="info">
        <div className="members" title={name}>
          <p>{memberCount}</p>
          <p>members</p>
        </div>
        <img className="icon" src={iconUrl} alt="icon" height={64} />
        <Button code={server.code} />
      </div>

      <p className="desc">{server.description}</p>
    </div>
  );
}

export default InviteCard;
