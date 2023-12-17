import { FakeUsers } from "../../../types";
import UsersTableSkeleton from "./UserTableSkeleton";

type UsersTableProps = {
  usersData: FakeUsers[];
};

const UsersTable: React.FC<UsersTableProps> = ({ usersData }) => {
  return (
    <>
      {usersData.length ? (
        <table className="w-full text-left text-sm text-blue-100 rtl:text-right dark:text-blue-100">
          <thead className="border-b border-blue-400 bg-blue-600 text-xs uppercase text-white dark:text-white">
            <tr>
              <th scope="col" className="w-4 p-4">
                Index
              </th>
              <th scope="col" className="w-4 px-6 py-3">
                Identifier
              </th>
              <th scope="col" className="w-4 px-6 py-3">
                firstName
              </th>
              <th scope="col" className="w-4 px-6 py-3">
                middleName
              </th>
              <th scope="col" className="w-4 px-6 py-3">
                lastName
              </th>
              <th scope="col" className="w-4 px-6 py-3">
                city
              </th>
              <th scope="col" className="w-4 px-6 py-3">
                street
              </th>
              <th scope="col" className="w-4 px-6 py-3">
                zip Code
              </th>
              <th scope="col" className="w-4 px-6 py-3">
                country
              </th>
              <th scope="col" className="w-4 px-6 py-3">
                phone Number
              </th>
            </tr>
          </thead>
          <tbody>
            {usersData.map(
              (
                {
                  identifier,
                  firstName,
                  middleName,
                  lastName,
                  city,
                  street,
                  zipCode,
                  country,
                  phone,
                },
                index
              ) => (
                <tr
                  key={identifier}
                  className="border-b border-blue-400 bg-blue-600 hover:bg-blue-500"
                >
                  <td className="w-4 overflow-y-auto whitespace-pre-wrap px-6 py-4 font-medium">
                    {index + 1}
                  </td>
                  <td className="w-4 overflow-y-auto whitespace-pre-wrap px-6 py-4 font-medium">
                    {identifier}
                  </td>
                  <td className="w-4 overflow-y-auto whitespace-pre-wrap px-6 py-4 font-medium">
                    {firstName}
                  </td>
                  <td className="w-4 overflow-y-auto whitespace-pre-wrap px-6 py-4 font-medium">
                    {middleName}
                  </td>
                  <td className="w-4 overflow-y-auto whitespace-pre-wrap px-6 py-4 font-medium">
                    {lastName}
                  </td>
                  <td className="w-4 overflow-y-auto whitespace-pre-wrap px-6 py-4 font-medium">
                    {city}
                  </td>
                  <td className="w-4 overflow-y-auto whitespace-pre-wrap px-6 py-4 font-medium">
                    {street}
                  </td>
                  <td className="w-4 overflow-y-auto whitespace-pre-wrap px-6 py-4 font-medium">
                    {zipCode}
                  </td>
                  <td className="w-4 overflow-y-auto whitespace-pre-wrap px-6 py-4 font-medium">
                    {country}
                  </td>
                  <td className="w-4 overflow-y-auto whitespace-pre-wrap px-6 py-4 font-medium">
                    {phone}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      ) : (
        <UsersTableSkeleton />
      )}
    </>
  );
};

export default UsersTable;
