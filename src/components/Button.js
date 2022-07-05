import './Button.css'

function Button({code}) {
  let link = '//discord.gg/' + code;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className = "invite-button" name={link}>
        Join
      </div>
    </a>
  );
}


export default Button;