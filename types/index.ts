// User types
export interface Admin {
  _id: string;
  name: string;
  mobile: number;
  email: string;
  dob: Date;
  address: string;
  district: string;
  state: string;
  image: string;
  username: string;
  password?: string;
}

export interface Student {
  _id: string;
  name: string;
  fname: string;
  mname: string;
  mobile: number;
  email: string;
  dob: Date;
  gender: string;
  address: string;
  district: string;
  state: string;
  course: string;
  image: string;
  SCName: string;
  marks: number;
  yop: number;
  HSCName: string;
  HSmarks: number;
  HSyop: number;
  password?: string;
}

export interface Faculty {
  _id: string;
  name: string;
  mobile: number;
  email: string;
  dob: Date;
  gender: string;
  address: string;
  district: string;
  state: string;
  image: string;
  qualification: string;
  specialization: string;
  department: string;
  designation: string;
  username: string;
  password?: string;
  experience: number;
  publication: string;
  doj: Date;
}

// Session types
export interface Session {
  user: {
    _id: string;
    email: string;
    name: string;
    role: 'admin' | 'student' | 'faculty';
  };
  iat: number;
  exp: number;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
