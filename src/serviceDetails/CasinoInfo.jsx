import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./discord.css";

const CasinoInfo = () => {
  const botInfo = {
    name: "Isekai Casino Discord Bot",
    portraitUrl: "https://media.discordapp.net/attachments/1035707553004396592/1178924016686346311/isekaicasino.png?ex=6577e98c&is=6565748c&hm=de317d271621d2d3ee78e8acb10b9e32dfd2f2d222f49cb5cc104d3a5980b5e4&=&format=webp&quality=lossless&width=834&height=930",
    supportServerLink: "https://discord.gg/invite/U4g5PgXd24",
    inviteLink: "https://discord.com/oauth2/authorize?client_id=1035989992058671176&permissions=0&scope=bot%20applications.commands",
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
      <img src={botInfo.portraitUrl} alt={`${botInfo.name} Portrait`} style={{ maxWidth: "12%", padding: "20px" }} />

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

export default CasinoInfo;
