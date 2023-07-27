import React from "react";
import "./App.css";
import Company from "./components/Company";
// SpotCheck 4
import Wardrobe from "./components/Wardrobe";

class App extends React.Component {
  // SpotCheck2
  generateCompanyTags(companies) {
    return companies.map((company) => <Company name={company.name} />);
  }

  render() {
    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 },
    ];

    // SpotCheck 4
    return <Wardrobe />;
    // SpotCheck2
    // return <div>{this.generateCompanyTags(companies)}</div>;

    // SpotCheck 3
    return (
      <div>
        {companies.map((company) => (
          <Company name={company.name} key={company.name} />
        ))}
      </div>
    );
  }
}

export default App;
