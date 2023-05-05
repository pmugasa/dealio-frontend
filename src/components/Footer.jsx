function Footer() {
  return (
    <>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <p className="font-bold text-xl text-white">
            Offer<span className="text-primary">ly</span>
          </p>
          <p className="text-baseline">Copyright © 2023 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a>
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a>
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
