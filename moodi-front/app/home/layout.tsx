import React from "react";

export default function HomeLayout(props: {
  children: React.ReactNode;
  videoModal: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      {props.videoModal}
    </>
  );
}
