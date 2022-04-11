import {
  checkingAcct,
  creditHistory,
  savings,
  job,
  creditStanding,
} from "./consts.js";
import { dataSet } from "./customerData.js";

const { ZEROBALANCE, NOACCT, LOW, HIGH } = checkingAcct;
const { ALLPAID, BANKPAID, CURRENT, DELAY, CRITICAL } = creditHistory;
const { MEDLOW, MEDHIGH } = savings;
const { GOOD, BAD } = creditStanding;
const { UNSKILLED, SKILLED, MANAGEMENT, UNEMPLOYED } = job;

const sampleCustomer = {
  "Checking Acct": "No Acct",
  "Credit Hist": "Critical",
  Purpose: "Car New",
  "Savings Acct": "Low",
  Employment: "Medium",
  Gender: "M",
  "Personal Status": "Single",
  Housing: "Own",
  Job: "Management",
  Telephone: "No",
  Foreign: "Yes",
  "Months Acct (Added 1 to original Months Acct Variable)": 7,
  "Residence Time": 3,
  "Age subtracted 1 from original Age variable": 44,
  "Credit Standing": "Good",
};

function riskIndexCustomer(customer) {
  let riskScore = 0;

  if (customer["Checking Acct"] === NOACCT) riskScore -= 5;
  if (customer["Checking Acct"] === ZEROBALANCE) riskScore--;
  if (customer["Checking Acct"] === LOW) riskScore++;
  if (customer["Checking Acct"] === HIGH) riskScore += 2;

  if (customer["Savings Acct"] === NOACCT) riskScore -= 5;
  if (customer["Savings Acct"] === LOW) riskScore -= 2;
  if (customer["Savings Acct"] === MEDLOW) riskScore--;
  if (customer["Savings Acct"] === MEDHIGH) riskScore += 1;
  if (customer["Savings Acct"] === HIGH) riskScore += 5;

  if (customer["Credit Hist"] === CRITICAL) riskScore -= 5;
  if (customer["Credit Hist"] === DELAY) riskScore -= 2;
  if (customer["Credit Hist"] === CURRENT) riskScore++;
  if (customer["Credit Hist"] === BANKPAID) riskScore += 2;
  if (customer["Credit Hist"] === ALLPAID) riskScore += 5;

  if (customer["Credit Standing"] === GOOD) riskScore += 8;
  if (customer["Credit Standing"] === BAD) riskScore -= 5;

  if (customer.Job === UNEMPLOYED) riskScore -= 5;
  if (customer.Job === UNSKILLED) riskScore--;
  if (customer.Job === SKILLED) riskScore += 2;
  if (customer.Job === MANAGEMENT) riskScore += 5;

  return riskScore;
}

riskIndexCustomer(sampleCustomer);

function customerRiskList(customers) {
  const custArr = [];

  let id = 0;

  for (let customer of customers) {
    let customerObject = {};
    let riskScore = riskIndexCustomer(customer);
    customerObject.id = id;
    customerObject.riskScore = riskScore;
    id++;
    custArr.push(customerObject);
  }
  return custArr;
}

const riskList = customerRiskList(dataSet);

function approvedList(customerRiskList) {
  let approvedCount = 0;
  let deniedCount = 0;

  for (let i = 0; i < customerRiskList.length; i++) {
    if (customerRiskList[i].riskScore > 0) approvedCount++;
    else deniedCount--;
  }
  return { approved: approvedCount, denied: deniedCount };
}

const finalList = approvedList(riskList);
console.log(finalList);
