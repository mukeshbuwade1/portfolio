import React from "react";
import SecondaryHeader from "../components/SecondaryHeader";
import InputeComponent from "../components/InputeComponent";
import CommonBoxComp from "../components/CommonBoxComp";


const Contact = () => {
    const initialFormKeys = {
        fullName: "fullName",
        firstName: "firstName",
        lastName: "lastName",
        email: "email",
        message: "message",
        subject: "subject"

    };
    const initialFormValues = {
        fullName: "",
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        subject: "",
    }
    const validetionObj = {
        firstName: false,
        lastName: false,
        email: false,
        message: false,
        subject: false
    };

    const [formValues, setFormValues] = React.useState({ ...initialFormValues })
    const [isInvalid, setIsInvalid] = React.useState(validetionObj)
    const [name, setname] = React.useState("e")
    return (
        <div id="basecontainer">
            <div className="mainViewForResume">
                <SecondaryHeader title={"LET'S talk"} />
                <CommonBoxComp>
                    <div style={{ margin: "3rem", width: "100%" }}>
                        {/* <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <InputeComponent
                                title={"First Name*"}
                                value={formValues.firstName}
                                placeholder={""}
                                isValid={isInvalid}
                                onChange={(event) => {
                                    setFormValues({ ...formValues, firstName: event.target.value })
                                }}
                                inputBoxStyle={{ width: "50%",border:"1px solid black" }}
                            />
                            <InputeComponent
                                title={"Last Name*"}
                                value={formValues.lastName}
                                placeholder={""}
                                isValid={isInvalid}
                                onChange={(event) => {
                                    setFormValues({ ...formValues, lastName: event.target.value })
                                }}
                                inputBoxStyle={{ width: "50%" }}
                            />
                        </div> */}

                        <InputeComponent
                            title={"Full Name*"}
                            value={formValues.fullName}
                            placeholder={"Mukesh Buwade"}
                            isValid={isInvalid}
                            onChange={(event) => {
                                setFormValues({ ...formValues, fullName: event.target.value })
                            }}
                            inputBoxStyle={{ width: "100%" , }}
                        />

                        <InputeComponent
                            title={"Email*"}
                            value={formValues.email}
                            placeholder={"mukesh@mail.com"}
                            isValid={isInvalid}
                            onChange={(event) => {
                                setFormValues({ ...formValues, email: event.target.value })
                            }}
                            inputBoxStyle={{ width: "100%" }}
                        />

                        <InputeComponent
                            title={"Subject"}
                            value={formValues.subject}
                            placeholder={"Subject line"}
                            isValid={isInvalid}
                            onChange={(event) => {
                                setFormValues({ ...formValues, subject: event.target.value })
                            }}
                            inputBoxStyle={{ width: "100%" }}
                        />

                        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", width: "100%" }}>
                            <label style={{ fontSize: "14px", fontWeight: "600" }}>Message</label>
                            <textarea
                               placeholder="Hi, Mukesh" style={{ height: "90px", border: "none", outline: "none ", borderBottom: "1px solid black", }}
                            />
                        </div>
                        <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
                            <button type="submit" >Send</button>
                        </div>
                    </div>

                </CommonBoxComp>
            </div>
        </div>
    )
}
export default Contact;