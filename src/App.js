import "./App.css";
import UserTable from "./components/UserTable";

function App() {
  const userData = [
    {
      id: 1,
      name: "Nguyễn Văn E",
      dob: "09/09/2003",
      phone: "0123456789",
      email: "nguyenvane@gmail.com",
      address: "Địa chỉ E",
      role: "User",
    },
    {
      id: 2,
      name: "Nguyễn Văn A",
      dob: "05/06/2003",
      phone: "0123456789",
      email: "nguyenvana@gmail.com",
      address: "Địa chỉ A",
      role: "User",
    },
    {
      id: 3,
      name: "Nguyễn Văn G",
      dob: "01/01/2003",
      phone: "0123456789",
      email: "nguyenvang@gmail.com",
      address: "Địa chỉ G",
      role: "User",
    },
    {
      id: 4,
      name: "Nguyễn Văn D",
      dob: "07/08/2003",
      phone: "0123456789",
      email: "nguyenvand@gmail.com",
      address: "Địa chỉ D",
      role: "User",
    },
    {
      id: 5,
      name: "Nguyễn Văn F",
      dob: "11/11/1990",
      phone: "0123456789",
      email: "nguyenvanf@gmail.com",
      address: "Địa chỉ F",
      role: "User",
    },
    {
      id: 6,
      name: "Nguyễn Văn C",
      dob: "10/03/1999",
      phone: "0123456789",
      email: "nguyenvanc@gmail.com",
      address: "Địa chỉ C",
      role: "User",
    },
    {
      id: 7,
      name: "Nguyễn Văn B",
      dob: "04/04/2005",
      phone: "0123456789",
      email: "nguyenvanb@gmail.com",
      address: "Địa chỉ B",
      role: "User",
    },
  ];

  return (
    <>
      <h1 style={{ textTransform: "uppercase", textAlign: "center" }}>
        Quản lý người dùng - Thông tin người dùng
      </h1>
      <UserTable userData={userData} />
    </>
  );
}

export default App;
