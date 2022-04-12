const Navbar = () => {
  return (
    <div className="font-montserrat text-white flex justify-between items-center h-[80px]">
      <h1 className="font-[800] lg:text-[22px]">ONE-OF-BUSINESS</h1>

      <div className="hidden lg:flex justify-between items-center w-3/12  ">
        <p className="font-[600] text-[16px] leading-[24px] text-brandGreen1">
          Home
        </p>
        <p className="text-[16px] leading-[24px] ">Features</p>
        <p className="text-[16px] leading-[24px] ">About Us</p>
      </div>

      <div className="hidden lg:flex justify-between items-center w-2/12">
        <ion-icon
          name="logo-twitter"
          style={{
            width: "26px",
            height: "21.13px",
          }}
        ></ion-icon>

        <ion-icon
          name="logo-discord"
          style={{
            width: "26px",
            height: "21.13px",
          }}
        ></ion-icon>
        <button className="text-[17px] leading-[25px] border border-white px-4 py-2">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
