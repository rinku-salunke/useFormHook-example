import axios from "axios";
import { useEffect, useState } from "react";

function ViewStudents() {
    const [students, setStudents] = useState([]);

    const onGetStudents = () => {
        axios.get("http://localhost:5000/students")
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    setStudents(res.data);
                }
            })
            .catch(error => {
                alert("Something Went Wrong...!");
                console.log(error);
            });
    };

    // Run only on mount
    useEffect(() => {
        onGetStudents();
    }, []);

    return (
        <>
            <h1>Students List</h1>
            <table border={1} width={"500px"}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>FULLNAME</th>
                        <th>AGE</th>
                        <th>CONTACT NO</th>
                        <th>ADDRESS</th>
                        <th>EMAIL ID</th>
                        <th>GENDER</th>
                        <th>COURSES</th>
                        <th>MODE</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(students) && students.map((st, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{st.fullName}</td>
                            <td>{st.age}</td>
                            <td>{st.contactNumber}</td>
                            <td>{st.address}</td>
                            <td>{st.email}</td>
                            <td>{st.gender}</td>
                            <td>{st.courses?.join(", ")}</td>
                            <td>{st.batchMode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ViewStudents;
