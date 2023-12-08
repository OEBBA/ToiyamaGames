import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const About = () => {

  const aboutServices = [
    {
      title: "DBZ Battler PVP",
      url: "dbz-battler-pvp",
      icon: "https://media.discordapp.net/attachments/1035707553004396592/1178926831009804348/wDF6AaFJrhIhQAAAABJRU5ErkJggg.png?ex=6577ec2b&is=6565772b&hm=716d5b8cb0a9802b29a41d66439259d746f95524b9cddc8c82f7e441892536c8&=&format=webp&width=844&height=844",
    },
    {
      title: "KonohaRPG Discord Bot",
      url: "krpg-discord-bot",
      icon: "https://media.discordapp.net/attachments/1035707553004396592/1178922004674510848/krpg.webp?ex=6577e7ad&is=656572ad&hm=74b48b632fd1cb68581a2f64c0576c0b525261465c498870814c985dc0d436f4&=&format=webp&width=256&height=256",
    },
    {
      title: "Isekai Casino Discord Bot",
      url: "isekai-casino-discord-bot",
      icon: "https://media.discordapp.net/attachments/1035707553004396592/1178924016686346311/isekaicasino.png?ex=6577e98c&is=6565748c&hm=de317d271621d2d3ee78e8acb10b9e32dfd2f2d222f49cb5cc104d3a5980b5e4&=&format=webp&width=758&height=844",
    },
    {
      title: "Anime Legends Card Game",
      url: "anime-legends-card-game",
      icon: "https://media.discordapp.net/attachments/1035707553004396592/1178927445559230545/weNa52Tc8jcAAAAABJRU5ErkJggg.png?ex=6577ecbe&is=656577be&hm=7a2a79b0a4e4b272e03dbdd6a151cce56afe0a2ee3f3d0b7ce7164ede6270bed&=&format=webp&width=1266&height=844",
    },
  ];

  return (
    <>
      <div className="mt-20 flex justify-center gap-10">
        {aboutServices.map((service, index) => (
          <Link key={index} to={`/${service.url}`}>
            <motion.div
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              style={{ height: "100%" }} // Set a fixed height for the card
            >
              <div
                options={{
                  max: 45,
                  scale: 2,
                  speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col h-full"
                // Set height to 100% for the inner content
              >
                <img
                  src={service.icon}
                  alt={`about-service-${index + 1}`}
                  className="w-20 h-30 object-contain"
                />

                <h3 className="text-white text-[20px] font-bold text-center">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
