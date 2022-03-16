import troll from "../images/troll-face.png";
export default function Header() {
  return (
    <header className="header">
      <img src={troll} alt="troll face" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h3 className="header--project">React Project </h3>
    </header>
  );
}
