import React from "react";

interface OfficeLocations {
  [key: string]: string;
}

const officeLocations: OfficeLocations = {
  Istanbul:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.0337353288664!2d29.083769300000004!3d40.95883979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac6e3ec2eebf1%3A0x71425d87fcd56377!2zQmHEn2RhdCBDYWQuLCDEsHN0YW5idWw!5e0!3m2!1str!2str!4v1706577041472!5m2!1str!2str",
  London:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23623.26152254956!2d-0.12263100405833313!3d51.51157415300847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604a931761995%3A0x1ffc6f23e06b9be7!2sTate%20Modern!5e0!3m2!1str!2str!4v1707086016515!5m2!1str!2str",
  Paris:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20999.2094278964!2d2.342634113346435!3d48.86009478356909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66df6d6fb2ac5%3A0x50b82c368941af0!2s11th%20arrondissement%2C%2075011%20Paris%2C%20Fransa!5e0!3m2!1str!2str!4v1707085923222!5m2!1str!2str",
  Madrid:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34364.655575440906!2d-3.6728149828134744!3d40.42136296309208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289f1576c54d%3A0x6d5dca33dd3c51c8!2sGreat%20Pond%20of%20El%20Retiro!5e0!3m2!1str!2str!4v1707085841460!5m2!1str!2str",
};

const OfficeMap = ({ city = "Istanbul" }) => {
  return (
    <div className="absolute inset-0 bg-gray-300">
      <iframe
        src={officeLocations[city]}
        width="100%"
        height="100%"
        title="map"
        style={{
          margin: 0,
          padding: 0,
          border: "none",
          overflow: "hidden",
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default OfficeMap;
