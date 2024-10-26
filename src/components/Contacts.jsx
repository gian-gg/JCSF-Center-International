const Contact = ({ delay, label, text, colorLabel, colorText }) => {
  return (
    <p
      data-aos="fade-left"
      data-aos-once="true"
      data-aos-delay={delay}
      data-aos-offset="50"
      className={`text-${colorText}`}
    >
      <strong className={`text-${colorLabel}`}>{label}:</strong> {text}
    </p>
  );
};

const Contacts = ({ colorLabel, colorText }) => {
  return (
    <>
      <Contact
        colorLabel={colorLabel}
        colorText={colorText}
        delay="800"
        label="Mobile (English)"
        text="+855 964167805"
      />
      <Contact
        colorLabel={colorLabel}
        colorText={colorText}
        delay="1000"
        label="Mobile (Khmer)"
        text="+855 99901380"
      />
      <Contact
        colorLabel={colorLabel}
        colorText={colorText}
        delay="1200"
        label="Email"
        text="jcsfcicambodia@gmail.com"
      />
    </>
  );
};

export default Contacts;
