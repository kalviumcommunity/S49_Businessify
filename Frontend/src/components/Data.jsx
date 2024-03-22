
import React from "react";
import "./Data.css"

const Data = () => {
    const data = [
        {
          "_id": {
            "$oid": "65f295a0ca13c43888237b8a"
          },
          "name": "Business1",
          "company_name": "Nestle",
          "founded": "1886",
          "no_of_employees": "275000",
          "usps": "Dairy,eggs",
          "valuation": "₹ 2,37,101 Cr"
        },
        {
          "_id": {
            "$oid": "65f295a0ca13c43888237b8b"
          },
          "name": "Business2",
          "company_name": "Walmart",
          "founded": "1962",
          "no_of_employees": "222000",
          "usps": "electronics,furniture",
          "valuation": "$493.47 B"
        },
        {
          "_id": {
            "$oid": "65f295a0ca13c43888237b8c"
          },
          "name": "Business3",
          "company_name": "Amazon",
          "founded": "1994",
          "no_of_employees": "1525000",
          "usps": "N.A",
          "valuation": "$1.839 Trillion"
        },
        {
          "_id": {
            "$oid": "65f295a0ca13c43888237b8d"
          },
          "name": "Business4",
          "company_name": "Realme",
          "founded": "2018",
          "no_of_employees": "50000",
          "usps": "smartphone",
          "valuation": "$230 M"
        },
        {
          "_id": {
            "$oid": "65f295a0ca13c43888237b8e"
          },
          "name": "Business5",
          "company_name": "Reliance industries ",
          "founded": "1958",
          "no_of_employees": "389414",
          "usps": "energy",
          "valuation": "$234.05 B"
        },
        {
          "_id": {
            "$oid": "65f295a0ca13c43888237b8f"
          },
          "name": "Business6",
          "company_name": "Apple",
          "founded": "1976",
          "no_of_employees": "161000",
          "usps": "Smartphone",
          "valuation": "$2.675 T"
        },
        {
          "_id": {
            "$oid": "65f295a0ca13c43888237b90"
          },
          "name": "Business7",
          "company_name": "TATA GROUP",
          "founded": "1868",
          "no_of_employees": "1028000",
          "usps": "N.A",
          "valuation": "$382 billion"
        },
        {
          "_id": {
            "$oid": "65f295a0ca13c43888237b91"
          },
          "name": "Business8",
          "company_name": "Tesla",
          "founded": "2003",
          "no_of_employees": "275000",
          "usps": "Cars",
          "valuation": "$539.75 Billion"
        },
        {
          "_id": {
            "$oid": "65f295a0ca13c43888237b92"
          },
          "name": "Business9",
          "company_name": "Starbucks",
          "founded": "1971",
          "no_of_employees": "381000",
          "usps": "Coffee",
          "valuation": "$125.32 B"
        },
        {
          "_id": {
            "$oid": "65f295a0ca13c43888237b93"
          },
          "name": "Business10",
          "company_name": "DMART",
          "founded": "2002",
          "no_of_employees": "80000",
          "usps": "Food industry, dairy etc..",
          "valuation": "$31.18 Billion"
        }
      ] 
      

      return (
        <div className="container">
          {data.map((entry) => (
            <div key={entry._id.$oid} className="data-card">
              <h2>Name: {entry.name}</h2>
              <p>Company Name: {entry.company_name}</p>
              <p>Founded: {entry.founded}</p>
              <p>No. of Employees: {entry.no_of_employees}</p>
              <p>Unique Selling Points: {entry.usps}</p>
              <p>Valuation: {entry.valuation}</p>
            </div>
          ))}
        </div>
      );
}

export default Data;
