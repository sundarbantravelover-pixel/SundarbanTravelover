import { IconType } from "react-icons";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export type ContactItem = {
  icon: IconType;
  label: string;
  details: string[];
};

export const contactDetails: ContactItem[] = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    details: ["+91 8927791880", "+91 8001809667"],
  },
  {
    icon: FaEnvelope,
    label: "Email",
    details: ["mondalmousumi6054@gmail.com"],
  },
];