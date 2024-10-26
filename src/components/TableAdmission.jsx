const TableAdmission = ({ num, step, text, delay }) => {
  return (
    <div
      className="w-full md:w-4/5"
      data-aos="fade-left"
      data-aos-once="true"
      data-aos-delay={delay}
    >
      <table className=" table-auto border-separate border-spacing-4">
        <tbody>
          <tr className="text-center">
            <td className="font-bold text-3xl lg:text-6xl text-plum px-2 md:px-4 py-2 align-top font-robotoMono">
              {num}
            </td>
            <td className="lg:font-semibold text-xl lg:text-2xl md:px-4 md:py-2 text-oxfordBlue align-top font-introRust text-left">
              {step}
              <p className="text-sm md:text-base text-black md:px-4 md:py-2 leading-relaxed align-top font-georgiaPro text-justify">
                - {text}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  );
};

export default TableAdmission;
