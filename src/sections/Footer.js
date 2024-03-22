const Footer = () => {
  return (
    <footer
      className={
        "absolute bottom-2 md:bottom-10 right-0 lg:right-96 text-center sm:text-right text-sm font-light" +
        " tracking-widest"
      }
    >
      <p className={"mr-5 sm:mr-10 py-1 text-stone-500"}>
        &copy; Copyright 2023{" "}
        <a
          href={"/"}
          className={"uppercase hover:text-primary transition-all duration-500"}
        >
          MadStoneDev
        </a>
      </p>
    </footer>
  );
};

export default Footer;
