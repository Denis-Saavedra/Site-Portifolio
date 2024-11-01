import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Região</span>Guarulhos ,
        São Paulo.
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">Email</span>{" "}
        <a href="mailto:denissaavedrafernandes@gmail.com">denissaavedrafernandes@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">telefone</span>{" "}
        <a href="Tel: +55 (11) 96571-8805">+55 (11) 96571-8805</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
