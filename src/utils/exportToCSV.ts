export const exportToCSV = (userData: FakeUsers[]) => {
  const csvData =
    "Index,Identifier,FirstName,MiddleName,LastName,City,Street,Country,PhoneNumber\n" +
    userData
      .map(
        (user, index) =>
          `${index + 1},"${user.identifier}","${user.firstName}","${
            user.middleName
          }","${user.lastName}","${user.city}","${user.street}","${
            user.country
          }","${user.phone}"`,
      )
      .join("\n");

  const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });

  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "userData.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
