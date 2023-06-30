import React from "react";
import { Element } from "react-scroll";
import { Form } from "../../features/navigation/form/form";

import "./contacts.css";

export const Contacts = () => {
  return (
    <Element name="contacts" className="contacts">
      <Form />
    </Element>
  );
};
