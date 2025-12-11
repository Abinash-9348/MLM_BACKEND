export interface RegisterPayload {
  userId?: number; // usually generated server-side
  fname: string;
  mname?: string;
  lname?: string;
  country_code: string;
  mobile1: string;
  mobile2: string;
  email: string;
  password: string;
  age: number;
  gender: string;
  purchese_plan?: number | null;
  total_purchese_bv?: number | null;
  total_user_bv?: number | null;
  total_bv?: number | null;
  profile_img?: string | null;
  pin_code: number;
  city: string;
  state: string;
  memId?: string;
  upline?: string | null;
  sponser?: string | null;
  left_leg?: number | null;
  right_leg?: number | null;
  myjoinig?: number[] | null;
  status?: "ACTIVE" | "INACTIVE";
  isBlock?: number;
  createdBy?: number | null;
  updatedBy?: number | null;
  sponsorId?: number | null; // incoming sponsor userId to place under
}
