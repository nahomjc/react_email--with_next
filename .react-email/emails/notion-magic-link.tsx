import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

const Email = () => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white m-12 mx-auto font-sans">
          <Img
            className="mx-auto w-24"
            src="https://yt3.googleusercontent.com/ZucYF6S_1cbxW6Mxg7qw1NlUs011gTfDJBPSSCkFupPO1ETiHg00M_Py0VSpdSLloMOZsQjL=s900-c-k-c0x00ffffff-no-rj"
          ></Img>
          <Container className="p-8 rounded-lg shadow-lg">
            <Heading className="text-xl pt-4">
              Hello there 👋 Muyalogy Customer
            </Heading>
            <Text className="text-lg font-medium text-gray-700">
              Thanks for joining us on this journey, check out Courses down here
              below
            </Text>
            <Button
              className="bg-blue-500 text-white font-bold px-3  py-5 rounded-md ml-40"
              href="https://www.muyalogy.com"
            >
              {" "}
              Check out the courses
            </Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
