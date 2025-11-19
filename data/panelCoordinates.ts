
export interface PanelInfo {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  gridRows: string[];
  gridCols: string[];
}

export const panels: PanelInfo[] = [
  {
    id: "49VU",
    name: "49 VU",
    description: "Cockpit Overhead Panel",
    imageUrl: "https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/1c9dff8f-f2c4-405c-bc58-00b9234a360c/assets/images/422b53d8-d814-48c3-bea1-ba3761173da1.png?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=Gqk7MZLjOrqcxSJIlE%2BHjHLH%2B4Y%3D&Expires=1763620824",
    gridRows: ["A", "B", "C", "D", "E", "F", "G", "H", "HA"],
    gridCols: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"],
  },
  {
    id: "121VU",
    name: "121 VU",
    description: "Behind F/O's Seat",
    imageUrl: "https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/1c9dff8f-f2c4-405c-bc58-00b9234a360c/assets/images/422b53d8-d814-48c3-bea1-ba3761173da1.png?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=Gqk7MZLjOrqcxSJIlE%2BHjHLH%2B4Y%3D&Expires=1763620824",
    gridRows: ["C", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "T", "U", "V", "W"],
    gridCols: Array.from({ length: 45 }, (_, i) => (i + 1).toString()),
  },
  {
    id: "122VU",
    name: "122 VU",
    description: "Behind F/O's Seat",
    imageUrl: "https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/1c9dff8f-f2c4-405c-bc58-00b9234a360c/assets/images/422b53d8-d814-48c3-bea1-ba3761173da1.png?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=Gqk7MZLjOrqcxSJIlE%2BHjHLH%2B4Y%3D&Expires=1763620824",
    gridRows: ["I", "L", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    gridCols: Array.from({ length: 42 }, (_, i) => (i + 1).toString()),
  },
  {
    id: "123VU",
    name: "123 VU",
    description: "Behind F/O's Seat",
    imageUrl: "https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/1c9dff8f-f2c4-405c-bc58-00b9234a360c/assets/images/422b53d8-d814-48c3-bea1-ba3761173da1.png?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=Gqk7MZLjOrqcxSJIlE%2BHjHLH%2B4Y%3D&Expires=1763620824",
    gridRows: ["AA", "AB", "AC", "AD", "AE", "AF", "C"],
    gridCols: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  },
  {
    id: "124VU",
    name: "124 VU",
    description: "Behind F/O's Seat - High Load Items",
    imageUrl: "https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/1c9dff8f-f2c4-405c-bc58-00b9234a360c/assets/images/422b53d8-d814-48c3-bea1-ba3761173da1.png?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=Gqk7MZLjOrqcxSJIlE%2BHjHLH%2B4Y%3D&Expires=1763620824",
    gridRows: ["BA", "BB", "BE", "BF", "BG", "BH"],
    gridCols: ["1", "2", "3", "4", "5", "6", "7", "8"],
  },
  {
    id: "125VU",
    name: "125 VU",
    description: "Behind F/O's Seat - On Side",
    imageUrl: "https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/1c9dff8f-f2c4-405c-bc58-00b9234a360c/assets/images/422b53d8-d814-48c3-bea1-ba3761173da1.png?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=Gqk7MZLjOrqcxSJIlE%2BHjHLH%2B4Y%3D&Expires=1763620824",
    gridRows: ["CA", "CC", "CE", "CK"],
    gridCols: ["1", "2"],
  },
  {
    id: "105E&E",
    name: "105 E&E",
    description: "Electronics & Equipment Bay",
    imageUrl: "https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/1c9dff8f-f2c4-405c-bc58-00b9234a360c/assets/images/422b53d8-d814-48c3-bea1-ba3761173da1.png?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=Gqk7MZLjOrqcxSJIlE%2BHjHLH%2B4Y%3D&Expires=1763620824",
    gridRows: ["a", "b", "e", "D"],
    gridCols: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  },
  {
    id: "106E&E",
    name: "106 E&E",
    description: "Electronics & Equipment Bay",
    imageUrl: "https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/1c9dff8f-f2c4-405c-bc58-00b9234a360c/assets/images/422b53d8-d814-48c3-bea1-ba3761173da1.png?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=Gqk7MZLjOrqcxSJIlE%2BHjHLH%2B4Y%3D&Expires=1763620824",
    gridRows: ["a", "b"],
    gridCols: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  },
  {
    id: "FwdCabin",
    name: "Fwd Cabin",
    description: "Forward Cabin Ceiling",
    imageUrl: "https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/1c9dff8f-f2c4-405c-bc58-00b9234a360c/assets/images/617790f3-dcd3-46a5-9972-c46d9d8edac2.png?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=LYlNBBt%2BoMpextOrubt9Y5B6Z8A%3D&Expires=1763620824",
    gridRows: ["a", "b", "c", "d", "e", "f", "g", "h", "ha"],
    gridCols: ["1", "2", "3", "4", "5", "6", "7", "8"],
  },
  {
    id: "AftCabin",
    name: "Aft Cabin",
    description: "Aft Cabin Ceiling",
    imageUrl: "https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/1c9dff8f-f2c4-405c-bc58-00b9234a360c/assets/images/617790f3-dcd3-46a5-9972-c46d9d8edac2.png?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=LYlNBBt%2BoMpextOrubt9Y5B6Z8A%3D&Expires=1763620824",
    gridRows: ["aa", "bb", "cc", "dd", "ee", "ff"],
    gridCols: ["1", "2", "3", "4", "5", "6", "7", "8"],
  },
];
