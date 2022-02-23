import tw from 'tailwind-styled-components';

export const FormWrapper = tw.div`
  min-h-full 
  flex flex-col 
  justify-center 
  py-12 
  sm:px-6 
  lg:px-8
`;

export const FormBox = tw.div`
  sm:mx-auto 
  sm:w-full 
  sm:max-w-md 
`;

export const FormImage = tw.img`
  mx-auto 
  h-12 
  w-auto
`;

export const FormHeading = tw.h2`
  mt-6 
  text-center 
  text-3xl 
  font-extrabold 
  text-gray-900
`;

export const FormContainer = tw.div`
  bg-white 
  py-8 
  px-4 
  shadow 
  rounded-lg 
  sm:px-10
  m-6
`;

export const FormError = tw.div`
  mt-6
`;
