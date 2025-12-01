import { cn } from "@/lib/utils";
import React from "react";

export const BlobOne = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      id="blobSvg"
      className={cn("w-[600px] h-[600px]", className)}
      {...props}
    >
      <path
        d="M447.5,296.5Q413,343,375.5,373.5Q338,404,294,420Q250,436,206.5,431Q163,426,128,400.5Q93,375,50,341Q7,307,24,258.5Q41,210,50.5,166Q60,122,106,99.5Q152,77,201,62Q250,47,294,59.5Q338,72,374,99Q410,126,432,165.5Q454,205,465.5,250.5Q477,296,447.5,296.5Z"
        fill="currentColor"
      ></path>
    </svg>
  );
  
  export const BlobTwo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      id="blobSvg"
      className={cn("w-[500px] h-[500px]", className)}
      {...props}
    >
      <path
        d="M394.5,308Q337,366,288.5,394Q240,422,185,417.5Q130,413,101.5,372Q73,331,65.5,280.5Q58,230,83,189.5Q108,149,139,121Q170,93,210,79Q250,65,295,78Q340,91,372.5,123.5Q405,156,423,203Q441,250,394.5,308Z"
        fill="currentColor"
      ></path>
    </svg>
  );
  
  export const BlobThree = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      id="blobSvg"
      className={cn("w-[800px] h-[800px]", className)}
      {...props}
    >
      <path
        d="M449.5,315.5Q415,381,357.5,410.5Q300,440,237,450.5Q174,461,113,426Q52,391,33.5,320.5Q15,250,41,188Q67,126,108.5,88Q150,50,200,60Q250,70,303.5,69Q357,68,401,104.5Q445,141,465,195.5Q485,250,449.5,315.5Z"
        fill="currentColor"
      ></path>
    </svg>
  );
  
  export const BlobFour = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
     <svg 
        viewBox="0 0 500 500" 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        id="blobSvg" 
        className={cn("w-[400px] h-[400px]", className)}
        {...props}
      >
        <path d="M407.28,290.536Q387.071,331.071,354.536,357.28Q322,383.5,286,396.129Q250,408.758,210.6,398.92Q171.2,389.081,133.581,367.685Q95.961,346.29,66.961,310.645Q37.961,275,54.48,227.5Q71,180,95.5,142.5Q120,105,161.75,88.129Q203.5,71.258,250,68.871Q296.5,66.484,335.75,90.371Q375,114.258,397.629,152.129Q420.258,190,427.258,240.268Q434.258,290.536,407.28,290.536Z" fill="currentColor"></path>
    </svg>
  )
  