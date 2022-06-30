import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InviteCard.css';

function InviteCard({code}) {
  const [name, setName] = useState('Server Name');
  const [iconUrl, setIcon] = useState('');
  const [memberCount, setMemberCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        `https://discord.com/api/v10/invites/${code}?with_counts=true`,
      );
      const guild = res.data.guild;
      setName(guild.name);
      setIcon(["https://cdn.discordapp.com/icons", guild.id, guild.icon].join('/'));
      setMemberCount(res.data.approximate_member_count)
    };
    fetchData();
  }, [code]);
  return (
    <div className="InviteCard">
      <img className="icon" src={iconUrl} alt="icon" height={48} />
      <div className="InviteCard-text">
        <h2>{name}</h2>
        <p id="members">{memberCount} Members</p>
      </div>
      <button className="invite-button" name="Join">
        Join
      </button>
    </div>
  );
}

export default InviteCard;