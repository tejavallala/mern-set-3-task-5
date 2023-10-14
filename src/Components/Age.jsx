import React, { useState } from "react";

const Age = () => {
    const [age, setAge] = useState(null);
    const [dob, setDob] = useState("");

    function ageCalculate() {
        const today = new Date();
        const birthDate = new Date(dob);
        const ageDifference = today.getFullYear() - birthDate.getFullYear();
        const isBirthdayNotPassed =
            today.getMonth() < birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() &&
                today.getDate() < birthDate.getDate());

        const calculatedAge = isBirthdayNotPassed ? ageDifference - 1 : ageDifference;
        setAge(calculatedAge);
    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card w-50">
                    <div className="card-body">
                        <h3 className="mb-5 text-center">Age Calculator</h3>
                        <p className="h6">Enter your Date Of Birth</p>
                        <input
                            type="date"
                            className="form-control mb-3"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" onClick={ageCalculate}>
                                Calculate Age
                            </button>
                        </div>
                        {age !== null && (
                            <p className="h6 mt-3 text-center">Your Age is: {age} years</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Age;
