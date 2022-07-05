import './InviteCard.css';
import Button from './Button.js'

function InviteCard({server}) {
  const name = server.name;
  const iconUrl = ["https://cdn.discordapp.com/icons", server.id, server.icon].join('/');
  const memberCount = server.members;

  return (
    <div className="InviteCard">
      <img className="icon" src={iconUrl} alt="icon" height={48} />
      <div className="InviteCard-text" title={name}>
        <h2>{name}</h2>
        <p id="members">{memberCount} Members</p>
      </div>
      <Button code={server.code} />
    </div>
  );
}

export default InviteCard;