// for example:
// export const SIGN_UP_ENDPOINT = '/api/signup';
export const SIGN_IN_ENDPOINT =
  "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDLKXk0n2O38AWd_CdvvPbRVZgC6DP8KMI";
export const SIGN_UP_ENDPOINT = "";
export const REFRESH_ACCESS_TOKEN_ENPOINT = "";
export const TEST_AUTH_ENDPOINT = "";
export const ALL_CUSTOMERS_ENDPOINT =
  "/customer/api/v1/customers?fields=documentStatusCode%2CenhancedKyc%2CfullName%2Cid%2CkycSuccess%2Cmobile%2CreviewAt%2CriskLevel%2CstatusCode%2CsubmissionAt%2CunitholderId%2Cuuid&";
export const GET_CLIENT_DETAIL_ENDPOINT =
  "?fields=bank%7BaccountName%2CaccountNo%2CbankCode%7D%2Cchildren%7BbirthDate%2CfullName%2CidentificationNo%7D%2CcontactAddress%7Baddress1%2Caddress2%2CcountryCode%2CdistrictCode%2CpostCode%2CprovinceCode%2CsubDistrict%7D%2Cdetail%7Bavatar%7Burl%7D%2CbirthDate%2Cemail%2CfullName%2CgenderCode%2CidentificationExpireDate%2CidentificationNo%2CidentificationTypeCode%2ClazerCode%2CmaritalStatusCode%2Cmobile%2CnationalityCode%2CtaxOption%7D%2Coccupation%7BincomeCode%2CoccupationCode%2CsourceOfFundCode%2CsourceOfIncomeCode%7D%2CresidentialAddress%7Baddress1%2Caddress2%2CcountryCode%2CdistrictCode%2CpostCode%2CprovinceCode%2CsubDistrict%7D%2Crisk%7Blevel%7D%2Cspouse%7BfullName%2CidentificationNo%7D%2CstatusCode%2CworkplaceAddress%7Baddress1%2Caddress2%2CcountryCode%2CdistrictCode%2Cname%2CpostCode%2CprovinceCode%2CsubDistrict%7D";
export const GET_DOCUMENTS_BY_ID_ENDPOINT =
  "/documents?fields=lastModifiedAt%2CstatusCode%2CtypeCode%2Curl%2Cuuid";
export const ALL_FUNDS_ENDPOINT = "/funds/api/v1/dashboard/funds";
export const POST_CSV_DATA = "/api/v1/dashboard/";
export const GET_FUNDS_BY_ID = "/admin/api/admin-actions/getPortfolioByUserId";
export const GET_IS_LOCKED_STATUS = "/admin/api/admin-actions/getLockoutStatus";
export const POST_UNLOCKED_STATUS = "/admin/api/admin-actions/unlockUser";
export const EXISTING_FUND = "/funds/api/v1/dashboard/fund/fundCode/exists";
export const RECEIVE_FUND_DETAIL_EXISTING = "/funds/api/v1/dashboard/fund/";
export const SAVE_FUND = "/funds/api/v1/dashboard/fund/";
export const PATCH_UPDATE_IMAGE = "/funds/api/v1/dashboard/fund/";
export const GET_TRANSACTION_DETAILS = "/order/api/v1/orders?fields=amount%2Cchannel%2CeffectiveDate%2Cfee%2CfundCode%2CfundNo%2Cnav%2CprofitLoss%2CstatusCode%2CstatusDesc%2Ctax%2CtoFundCode%2CtoFundNo%2CtransCode%2CtransDatetime%2CtransNo%2Cunit%2CunitholderId%2CunitholderName&";
