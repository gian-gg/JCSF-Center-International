const TableAdmission = ({ num, step, text }) => {
  return (
    <table className="w-full table-auto border-separate border-spacing-4">
      <tbody>
        <tr className="text-center">
          <td className="font-bold text-xl text-plum px-4 py-2 align-top">
            {num}
          </td>
          <td className="font-semibold text-lg px-4 py-2 text-gray-700 align-top">
            {step}
          </td>
          <td className="text-sm md:text-base text-gray-600 px-4 py-2 leading-relaxed text-left align-top">
            {text}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableAdmission;
