import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./discord.css";

const KrpgInfo = () => {
  const botInfo = {
    name: "KonohaRPG Discord Bot",
    portraitUrl: "https://media.discordapp.net/attachments/1035707553004396592/1178922004674510848/krpg.webp?ex=6577e7ad&is=656572ad&hm=74b48b632fd1cb68581a2f64c0576c0b525261465c498870814c985dc0d436f4&=&format=webp&width=256&height=256",
    supportServerLink: "https://discord.com/invite/Fxek2HEJKF",
    inviteLink: "https://discord.com/oauth2/authorize?client_id=760390264425545729&scope=bot&permissions=268443648",
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
      <img src={botInfo.portraitUrl} alt={`${botInfo.name} Portrait`} style={{ maxWidth: "100%", padding: "20px" }} />

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

export default KrpgInfo;