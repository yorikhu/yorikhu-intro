"use client";

import React, { useEffect } from "react";

const Message = () => {
  useEffect(() => {
    console.log(window);
  }, []);
  return <div>index</div>;
};

export default Message;
