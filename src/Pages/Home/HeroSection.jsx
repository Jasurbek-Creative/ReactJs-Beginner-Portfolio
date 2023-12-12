function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content-box">
        <div className="hero--section--content">
          <p className="section--title">Hey I'm John</p>

          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>

          <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur ad isicing elit.
            <br />
            Id perferendis quae laudantium facere quisquam.
          </p>
        </div>

        <button className="btn btn-primary">Get In Touch</button>
      </div>

      <div className="hero--section--img">
        <img src="/img/hero_img.png" alt="Hero Section Img" />
      </div>
    </section>
  );
}

export default HeroSection;
