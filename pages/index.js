import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsDiscord, BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export default function Home() {
  const socials = [
    {
      link: "#",
      icon: <BsGithub />,
    },
    {
      link: "#",
      icon: <BsTwitter />,
    },
    {
      link: "#",
      icon: <BsDiscord />,
    },
    {
      link: "#",
      icon: <FaTelegramPlane />,
    },
    {
      link: "#",
      icon: <BsYoutube />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  function onWheel(e) {
    if (isAnimating) {
      return;
    }

    if (e.deltaY > 0) {
      setCurrentIndex(Math.min(currentIndex + 1, 2));
    } else {
      setCurrentIndex(Math.max(currentIndex - 1, 0));
    }

    setIsAnimating(true);
    window.setTimeout(() => setIsAnimating(false), 500);
  }

  useEffect(() => {
    [...document.querySelectorAll(".section")].forEach(
      (el) => delete el.dataset.active
    );
    document.querySelector(
      '.section[data-index="' + currentIndex + '"]'
    ).dataset.active = "true";
  }, [currentIndex]);

  return (
    <>
      <Head>
        <title>Digicats Studio</title>
        <meta name="description" content="Digicats Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="container" onWheel={onWheel}>
        <div className="main">
          <div className="header">
            <div className="logo">
              <Image src={"/kryxivia.jpg"} width={150} height={150} />
            </div>
            <div className="socials">
              {socials.map((social, i) => (
                <a href={social.link} target="" key={i}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="sections">
            <div className="section" data-index="0" data-active>
              <div className="subtitle gradient">
                Welcome to Digicats Studio
              </div>
              <div className="title">
                Discover our Web3 Studio
                <br />
                <span className="title-line">
                  specialized in <span className="gradient">NFT creation</span>
                </span>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent leo erat, tristique vitae elementum a, iaculis auctor
                eros. Proin suscipit mollis enim, ac mollis ligula pulvinar sed.
                Sed tincidunt bibendum augue et blandit. Proin lobortis congue
                elit, quis mollis augue semper a. Ut elementum posuere orci vel
                sollicitudin.
              </div>
            </div>

            <div className="section" data-index="1">
              <div className="subtitle gradient">Our last collection</div>

              <div className="title-wrap">
                <Image src={"/mac.png"} width={80} height={80} />
                <div className="title">
                  <span className="title-line">Monster Ape Club</span>
                  <br />
                  <span className="gradient">7,999</span> unique 3D Monster Apes
                </div>
              </div>

              <div className="desc">
                Monster Ape Club is a collection of 7,999 unique generated 3D
                Monster Apes, stored on the Ethereum Blockchain.
                <br />
                <br />
                <a
                  href="https://opensea.io/collection/monsterapeclub-original"
                  target={"_blank"}
                  className="btn"
                >
                  View more
                </a>
              </div>
            </div>

            <div className="section" data-index="2">
              <div className="subtitle gradient">Our last collection</div>

              <div className="title-wrap">
                <Image src={"/kryxivia.jpg"} width={80} height={80} />
                <div className="title">
                  <span className="title-line">Frederick</span>
                  <br />
                  <span className="gradient">NFT MMORPG Kryxivia</span> founder
                </div>
              </div>
              <div className="desc">
                <a
                  href="https://kryxivia.io/"
                  target={"_blank"}
                  className="btn"
                >
                  View more
                </a>
              </div>
              <div className="title-wrap">
                <Image src={"/nhance.png"} width={80} height={80} />
                <div className="title">
                  <span className="title-line">Aleksei</span>
                  <br />
                  <span className="gradient">N-Hance Studio</span> founder
                </div>
              </div>
              <div className="desc">
                <a
                  href="https://www.nhance.studio/"
                  target={"_blank"}
                  className="btn"
                >
                  View more
                </a>
              </div>
            </div>
          </div>

          <div className="scroll">
            <div className="scroll-deco"></div>
            <span className="gradient">Scroll to explore</span>
            <div className="scroll-sep"></div>
            <span className="bold">
              <span className="gradient">{currentIndex + 1}</span> / 3
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
