import { FieldErrors } from "react-hook-form";

export type ProviderType = {
  name: string;
  units: string[];
};

export type TimezoneType = {
  name: string;
  offset: string;
};

export type DetailsFormProps = {
  control: any;
  loading: boolean;
  errors: FieldErrors;
  providers: ProviderType[];
  getValues: (val: string) => any;
};

export type TimezoneProps = {
  control: any;
  errors: FieldErrors;
  timezoneLoading: boolean;
  timezones: TimezoneType[];
  selectedTimezone: string | null;
  getValues: (val: string) => any;
};

export type FormValues = {
  city: string;
  state: string;
  address: string;
  timezone: string;
  providerUnit: string;
  providerGroup: string;
  email: string;
  labName: string;
  zipcode: string;
  mobile: string;
  officePhone: string;
};
