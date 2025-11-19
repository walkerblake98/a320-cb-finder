
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
    gridRows: ["A", "B", "C", "D", "E", "F", "G", "H"],
    gridCols: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
  },
  {
    id: "121VU",
    name: "121 VU",
    description: "Behind F/O's Seat",
    imageUrl: "https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/1c9dff8f-f2c4-405c-bc58-00b9234a360c/assets/images/422b53d8-d814-48c3-bea1-ba3761173da1.png?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=Gqk7MZLjOrqcxSJIlE%2BHjHLH%2B4Y%3D&Expires=1763620824",
    gridRows: ["J", "K", "L", "M", "N", "P"],
    gridCols: Array.from({ length: 45 }, (_, i) => (i + 1).toString()),
  },
  {
    id: "122VU",
    name: "122 VU",
    description: "Behind F/O's Seat",
    imageUrl: "https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/1c9dff8f-f2c4-405c-bc58-00b9234a360c/assets/images/422b53d8-d814-48c3-bea1-ba3761173da1.png?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=Gqk7MZLjOrqcxSJIlE%2BHjHLH%2B4Y%3D&Expires=1763620824",
    gridRows: ["S", "T", "U", "V", "W", "X", "Y", "Z"],
    gridCols: Array.from({ length: 31 }, (_, i) => (i + 1).toString()),
  },
  {
    id: "123VU",
    name: "123 VU",
    description: "Behind F/O's Seat",
    imageUrl: "https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/1c9dff8f-f2c4-405c-bc58-00b9234a360c/assets/images/422b53d8-d814-48c3-bea1-ba3761173da1.png?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=Gqk7MZLjOrqcxSJIlE%2BHjHLH%2B4Y%3D&Expires=1763620824",
    gridRows: ["AA", "AB", "AC", "AD", "AE", "AF"],
    gridCols: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  },
  {
    id: "124VU",
    name: "124 VU",
    description: "Behind F/O's Seat - High Load Items",
    imageUrl: "https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/1c9dff8f-f2c4-405c-bc58-00b9234a360c/assets/images/422b53d8-d814-48c3-bea1-ba3761173da1.png?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=Gqk7MZLjOrqcxSJIlE%2BHjHLH%2B4Y%3D&Expires=1763620824",
    gridRows: ["BA"],
    gridCols: ["1", "2", "3", "4"],
  },
  {
    id: "125VU",
    name: "125 VU",
    description: "Behind F/O's Seat - On Side",
    imageUrl: "https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/1c9dff8f-f2c4-405c-bc58-00b9234a360c/assets/images/422b53d8-d814-48c3-bea1-ba3761173da1.png?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=Gqk7MZLjOrqcxSJIlE%2BHjHLH%2B4Y%3D&Expires=1763620824",
    gridRows: ["CA", "CK"],
    gridCols: ["1", "2"],
  },
  {
    id: "2000VU",
    name: "2000 VU",
    description: "Fwd Cabin Ceiling",
    imageUrl: "https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/1c9dff8f-f2c4-405c-bc58-00b9234a360c/assets/images/617790f3-dcd3-46a5-9972-c46d9d8edac2.png?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=LYlNBBt%2BoMpextOrubt9Y5B6Z8A%3D&Expires=1763620824",
    gridRows: ["a", "b", "c", "d", "e", "f", "g", "h"],
    gridCols: ["1", "2", "3", "4", "5", "6", "7", "8"],
  },
  {
    id: "2001VU",
    name: "2001 VU",
    description: "Aft Cabin Ceiling",
    imageUrl: "https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/1c9dff8f-f2c4-405c-bc58-00b9234a360c/assets/images/617790f3-dcd3-46a5-9972-c46d9d8edac2.png?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=LYlNBBt%2BoMpextOrubt9Y5B6Z8A%3D&Expires=1763620824",
    gridRows: ["aa", "a", "b", "c", "d", "e", "f", "ff"],
    gridCols: ["1", "2", "3", "4", "5", "6", "7", "8"],
  },
];
