const TableAdmission = ({ num, step, text }) => {
  return (
    <div>
      <table className="w-full table-auto border-separate border-spacing-4">
        <tbody>
          <tr className="text-center">
            <td className="font-bold text-3xl lg:text-6xl text-plum px-4 py-2 align-top font-mono">
              {num}
            </td>
            <td className="font-semibold text-xl lg:text-2xl px-4 py-2 text-gray-700 align-top font-introRust">
              {step}
            </td>
            <td className="text-lg md:text-base text-gray-600 px-4 py-2 leading-relaxed text-left align-top font-georgiaPro">
              {text}
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  );
};

export default TableAdmission;
