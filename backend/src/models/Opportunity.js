const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const opportunitySchema = new Schema({
  Opportunityid: { type: Number, unique: true },
  OpportunityTitle: { type: String },
  OpportunityNumber: { type: String },
  OpportunityCategory: { type: String },
  FundingInstrumentType: { type: String },
  CategoryOfFundingActivity: { type: String },
  CategoryExplanation: { type: String },
  CFDANumbers: { type: String },
  EligibleApplicants: { type: String },
  AdditionalInformationOnEligibility: { type: String },
  AgencyCode: { type: String },
  AgencyName: { type: String },
  PostDate: { type: String },
  CloseDate: { type: String },
  LastUpdatedDate: { type: String },
  AwardCeiling: { type: String },
  AwardFloor: { type: String },
  EstimatedTotalProgramFunding: { type: String },
  ExpectedNumberOfAwards: { type: String },
  Description: { type: String },
  Version: { type: String },
  CostSharingOrMatchingRequirement: { type: String },
  ArchiveDate: { type: String },
  GrantorContactEmail: { type: String },
  GrantorContactEmailDescription: { type: String },
  GrantorContactText: { type: String },
});

const OpportunityModel = mongoose.model("Opportunity", opportunitySchema);

module.exports = OpportunityModel;
