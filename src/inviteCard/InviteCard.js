import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InviteCard.css';

function InviteCard({code}) {
  const [name, setName] = useState('Server Name');
  const [iconUrl, setIcon] = useState('');
  const [memberCount, setMemberCount] = useState(0);
  const fetchData = async () => {
    const res = await axios(
      `https://discord.com/api/v10/invites/${code}?with_counts=true`,
    );
    const guild = res.data.guild;
    setName(guild.name);
    setIcon(["https://cdn.discordapp.com/icons", guild.id, guild.icon].join('/'));
    setMemberCount(res.data.approximate_member_count)
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="InviteCard">
      <p>{code}</p>
      <img src={iconUrl} alt="icon"></img>
      <p>{name}</p>
      <p>{memberCount} Members</p>
      <button name="Join">
        Join
      </button>
    </div>
  );
}

export default InviteCard;