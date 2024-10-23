const TableAdmission = ({ num, step, text }) => {
  return (
    <div className="w-full">
      <table className=" table-auto border-separate border-spacing-4">
        <tbody>
          <tr className="text-center">
            <td className="font-bold text-3xl lg:text-6xl text-plum px-4 py-2 align-top font-robotoMono">
              {num}
            </td>
            <td className="lg:font-semibold text-xl lg:text-2xl px-4 py-2 text-oxfordBlue align-top font-introRust text-left">
              {step}
              <p className="text-lg md:text-base text-black px-4 py-2 leading-relaxed align-top font-georgiaPro text-justify">
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
