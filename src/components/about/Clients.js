import React from "react";
import client1 from "../../assets/img/client-1.jpg";
import client2 from "../../assets/img/client-2.jpg";
import client3 from "../../assets/img/client-3.jpg";
import nat from "../../assets/img/photographer.jpg";

const Clients = () => {
  return (
    <div className="about">
      <div className="about__images">
        <img src={client1} />
        <img src={client2} />
        <img src={client3} />
      </div>
      <div className="about__card">
        <h2>Natalia Chmielevska</h2>
        <p>Lifestyle Photography</p>
        <h4>Family | Children | Couples | Newborn | Maternity | Weddings</h4>
      </div>
      <div className="about__me">
        <img src={nat} />

        <h1>Hello There!</h1>
        <p>
          I&apos;m Natalia, mum to two wild and beautiful boys and a passionate
          lifestyle photographer based in Dubai, UAE.
        </p>
        <p>
          {" "}
          I love to take advantage of the stunning outdoor locations this
          beautiful country has to offer but I also have a thing for in-home
          newborn and family photography too! Instead of formal portraits, I
          prefer to focus on story telling and connection, so I won’t ask you to
          pose, or even to make eye contact with me... I just want you to be
          yourselves and have fun while I capture some authentic memories for
          you and your family!You can find I photograph all sorts of
          photography, including weddings, seniors, families, events, maternity,
          engagement, and more. I&apos;ve been doing photography professionally
          since 2011, and love it! Contact me today for information on pricing
          and availability, or if you&apos;d just like to have a chat about some
          possibilities!
        </p>
      </div>
    </div>
  );
};

export default Clients;
