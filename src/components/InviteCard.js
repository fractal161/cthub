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
      <img className="icon" src={iconUrl} alt="icon" height={48} />
      <div className="InviteCard-text" title={name}>
        <p id="members">{memberCount} Members</p>
      </div>
      <Button code={server.code} />
      <p>{server.description}</p>
    </div>
  );
}

export default InviteCard;
