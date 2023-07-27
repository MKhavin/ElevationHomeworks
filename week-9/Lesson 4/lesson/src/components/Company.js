function Company(props) {
  return (
    <div>
      {props.companies.map((company) => (
        <p key={company.name}>
          {company.name} has a revenue {company.revenue}
        </p>
      ))}
    </div>
  );
}

export default Company;
