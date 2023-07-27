import SubCompany from "./SubCompany";

function Company(props) {
  return (
    <div id="company">
      <SubCompany name={props.name} />
    </div>
  );
}

export default Company;
