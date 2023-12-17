export type FakeUsers = {
  identifier: string;
  firstName: string;
  middleName: string;
  lastName: string;
  city: string;
  street: string;
  zipCode: string;
  country: string;
  phone: string;
};

export type FetchUsersOptions = {
  seed: number;
  region: string;
  errorRate: number;
  batch: number;
};
