function Footer({theme, translate: text}) {
  return (
    <footer className={theme}>
      <h4>{text.footerTitle}</h4>
    </footer>
  );
}

export default Footer;
