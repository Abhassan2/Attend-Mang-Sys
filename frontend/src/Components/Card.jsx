import DropDown from "./DropDown";


export default function Card() {
  return (
    <div className="card">
      <div>
        <div>ACA</div>
        <div>
          <h1 className="primary-text">Advanced Computer Architecture</h1>
        </div>
      </div>
      <DropDown list={["content1","content2","content3"]} />
    </div>
  );
}
