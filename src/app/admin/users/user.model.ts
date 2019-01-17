export class User {
  public userID: number;
  public userName: string;
  public firstName: string;
  public lastName: string;
  public emailAddress: string;
  public businessUnit: string;
  public region: string;
  public account: string;
  public isAdmin: boolean;
  public isFactoryRep: boolean;
  public isActive: boolean;
  public isLocked: boolean;
  public changePwdRequired: boolean;
  public imagePath: string;

  constructor(userID: number, userName: string, firstName: string, lastName: string, emailAddress: string, businessUnit: string, region: string, account: string, isAdmin: boolean, isFactoryRep: boolean, isActive: boolean, isLocked: boolean, changePwdRequired: boolean, imagePath: string) {
    this.userID = userID;
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.businessUnit = businessUnit;
    this.region = region;
    this.account = account;
    this.isAdmin = isAdmin;
    this.isFactoryRep = isFactoryRep;
    this.isActive = isActive;
    this.isLocked = isLocked;
    this.changePwdRequired = changePwdRequired;
    this.imagePath = imagePath;
  }
}
