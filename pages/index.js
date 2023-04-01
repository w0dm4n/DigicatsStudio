import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsDiscord, BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import localFont from "next/font/local";

const Pramukh = localFont({
  src: [
    { path: "./PramukhRounded-Regular.woff2", weight: "400", style: "normal" },
  ],
});

const Satoshi = localFont({
  src: [
    { path: "./Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "./Satoshi-Medium.woff2", weight: "500", style: "normal" },
  ],
});

export default function Home() {
  const socials = [
    {
      link: "https://twitter.com/digicats_studio",
      icon: <BsTwitter />,
    }
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

      <div className={Pramukh.className + " container"} onWheel={onWheel}>
        <Image src={"/bg.png"} width={1287} height={374} className="bg" />
        <Image src={"/cat.png"} width={854} height={710} className="cat" />
        <div className="main">
          <div className="header">
            <div className="logo">
              <Image src={"/logo.png"} width={150} height={150} />
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
              <div className={Satoshi.className + " subtitle gradient"}>
                Welcome to <span>Digicats Studio</span>
              </div>
              <div className="title">
              Where Innovation Meets Art:
                <br />
                <span className="title-line">
                Our Web3 <span className="gradient">NFT Studio</span>
                </span>
              </div>
              <div className={Satoshi.className + " desc"}>
              Digicats Studio is a cutting-edge digital art studio that creates unique and innovative NFT collections. Our team of talented artists and designers use the latest technology and techniques to craft stunning works of digital art that are sure to captivate and inspire. Whether you're an avid NFT collector or simply appreciate the beauty of digital art, Digicats Studio has something for everyone.<br/><br/> Join us on our journey to push the boundaries of creativity and explore the limitless possibilities of the digital art world!
              </div>
            </div>

            <div className="section" data-index="1">
              <div className={Satoshi.className + " subtitle gradient"}>
                Our last collections
              </div>

              <div className="title-wrap">
                <Image src={"/mac.png"} width={100} height={100} />
                <div className={Satoshi.className + " title small"}>
                  <span className={Pramukh.className + " title-line small"}>
                    Monster Ape Club
                  </span>
                  <br />
                  <span className="gradient">7,999</span> unique 3D Monster Apes
                </div>
              </div>

              <div className={Satoshi.className + " desc"}>
                Monster Ape Club is a collection of 7,999 unique generated 3D
                Monster Apes, stored on the Ethereum Blockchain.
                <br/><br/>
                <i>We successfully sold-out the MAC collection for 5M$ worth of ETH, mint price was 0.25 ETH and floor price went <span style={{color: "#23ff23"}}>x5</span> at ~1.3 ETH, total volume generated from the collection is approximatively <span style={{color: "#c99d66"}}><b>~7,000 ETH.</b></span></i>
                <br />
                <br />
                <a
                  href="https://opensea.io/collection/monsterapeclub-original"
                  target={"_blank"}
                  className="btn"
                >
                  View collection
                </a>
              </div>
            </div>

            <div className="section" data-index="2">
              <div className={Satoshi.className + " subtitle gradient"}>
                Our team
              </div>

              <div className="title-wrap">
                <Image src={"/kryxivia.jpg"} width={100} height={100} />
                <div className={Satoshi.className + " title small"}>
                  <span className={Pramukh.className + " title-line small"}>
                    Frederick
                  </span>
                  <br />
                  <span className="gradient">NFT MMORPG Kryxivia</span> founder
                </div>
              </div>
              <div className={Satoshi.className + " desc"}>
                <a
                  href="https://kryxivia.io/"
                  target={"_blank"}
                  className="btn"
                >
                  View more
                </a>
              </div>
              <div className="title-wrap">
                <Image src={"/nhance.png"} width={100} height={100} />
                <div className={Satoshi.className + " title small"}>
                  <span className={Pramukh.className + " title-line small"}>
                    Aleksei
                  </span>
                  <br />
                  <span className="gradient">N-Hance Studio</span> founder
                </div>
              </div>
              <div className={Satoshi.className + " desc"}>
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

          <div className={Satoshi.className + " scroll"}>
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
