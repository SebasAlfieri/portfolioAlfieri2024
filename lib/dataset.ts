import {
  DataSetNavigationType,
  // FaqDataType,
  // SocialsDataType,
  // NominatedsDataType,
  // DataSetSponsorsType
} from "@/types/model";

export const navigation: DataSetNavigationType = {
  items: [
    { id: 1, label: "Profile", link: "profile" },
    { id: 2, label: "Personal Info", link: "personal-info" },
    { id: 3, label: "Contact", link: "contact" },
  ],
};
