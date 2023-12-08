import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./discord.css";

const LegendsInfo = () => {
  const botInfo = {
    name: "Anime Legends Discord Bot",
    portraitUrl: "https://media.discordapp.net/attachments/1035707553004396592/1178927445559230545/weNa52Tc8jcAAAAABJRU5ErkJggg.png?ex=6577ecbe&is=656577be&hm=7a2a79b0a4e4b272e03dbdd6a151cce56afe0a2ee3f3d0b7ce7164ede6270bed&=&format=webp&quality=lossless&width=1396&height=930",
    supportServerLink: "https://discord.gg/DQXCUEmtTk",
    inviteLink: "https://discord.com/oauth2/authorize?client_id=1145411025768824882&permissions=0&scope=bot%20applications.commands",
  };

  return (
    <div style={{
      background: "linear-gradient(to bottom, skyblue, navy)",
      minHeight: "100vh",
      padding: "20px",
      boxSizing: "border-box",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>

      <h1>{botInfo.name}</h1>
      <img src={botInfo.portraitUrl} alt={`${botInfo.name} Portrait`} style={{ maxWidth: "20%", padding: "20px" }} />

      <div className="d-grid gap-2">
        <a href={botInfo.supportServerLink} target="_blank" rel="noopener noreferrer" className="btn btn-discord">
          Official Support Server
        </a>
        <a href={botInfo.inviteLink} target="_blank" rel="noopener noreferrer" className="btn btn-discord">
          Invite Bot To Your Server
        </a>
      </div>
    </div>
  );
};

export default LegendsInfo;
