import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src="../logo-e-commerce.jpeg" alt="" />
      </div>
      <p>© - Louis Bouet - 2022 - 2023</p>
      <Link href="/cgv">Condition general de vente</Link>
    </footer>
  );
};

export default Footer;
