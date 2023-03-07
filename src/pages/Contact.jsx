import SecondaryHeader from "../components/SecondaryHeader";
import InputeComponent from "../components/InputeComponent";
import CommonBoxComp from "../components/CommonBoxComp";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Oval } from 'react-loader-spinner'

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
    const [isInvalid, setIsInvalid] = React.useState(validetionObj);
    const [btn_loader, set_btn_loader] = useState(false)

    const form = useRef();

    const sendEmail = () => {
        set_btn_loader(true)
        emailjs.sendForm('service_2yxsu5c', 'template_bckwequ', form.current, 'DNmk_qagyttJNilQ1')
            .then((result) => {
                set_btn_loader(false)
                console.log("hey Mukesh", result)
                alert("messege sent")
            }, (error) => {
                set_btn_loader(false)
                console.log(error.text);
            });
    };

    function submitForm(e) {
        e.preventDefault();

        let valid = true;
        let name_regex = /^[a-z\s]+$/i
        if (formValues?.fullName?.length > 0) {
            if (formValues?.fullName?.length > 15) {
                valid = false;
                alert("maximum 15 characters are allowed")
            } else {
                let check_name = name_regex.test(formValues.fullName)
                if (!check_name) {
                    valid = false;
                    alert("enter valid name")
                } else {
                    let email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                    if (formValues?.email?.length > 0) {
                        let check_mail = email_regex.test(formValues.email)
                        if (!check_mail) {
                            valid = false;
                            alert("enter valid email")
                        }
                    } else {
                        valid = false
                        alert("enter email")
                    }
                }
            }

        } else {
            valid = false
            alert("enter name")
        }



        if (valid) sendEmail()
    }

    return (
        <div id="basecontainer">
            <div className="mainViewForResume">
                <SecondaryHeader title={"LET'S talk"} />
                <CommonBoxComp>
                    <div style={{ margin: "3rem", width: "100%" }}>

                        <form ref={form} onSubmit={submitForm}>
                            <InputeComponent
                                title={"Full Name*"}
                                value={formValues.fullName}
                                placeholder={"Enter your full name"}
                                isValid={isInvalid}
                                onChange={(event) => {
                                    setFormValues({ ...formValues, fullName: event.target.value })
                                }}
                                inputBoxStyle={{ width: "100%", }}
                                name={"from_name"}
                                required={true}
                            />

                            <InputeComponent
                                title={"Email*"}
                                value={formValues.email}
                                placeholder={"your.mail@gmail.com"}
                                isValid={isInvalid}
                                onChange={(event) => {
                                    setFormValues({ ...formValues, email: event.target.value })
                                }}
                                inputBoxStyle={{ width: "100%" }}
                                name={"from_email"}
                                type={"email"}
                                required={true}
                            />

                            {/* <InputeComponent
                                title={"Subject"}
                                value={formValues.subject}
                                placeholder={"Subject line"}
                                isValid={isInvalid}
                                onChange={(event) => {
                                    setFormValues({ ...formValues, subject: event.target.value })
                                }}
                                inputBoxStyle={{ width: "100%" }}
                                name={"_subject"}
                                required={true}
                            /> */}

                            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", width: "100%" }}>
                                <label style={{ fontSize: "14px", fontWeight: "600", color: "#c5905a" }}>Message</label>
                                <textarea
                                    placeholder="Enter your message.."
                                    style={{ height: "90px", border: "none", outline: "none ", borderBottom: "1px solid black", }}
                                    name="message"
                                />
                            </div>
                            <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
                                {
                                    !btn_loader
                                        ? <button type="submit" >Send</button>
                                        : <button>Sending <Oval
                                            height={15}
                                            width={15}
                                            color="#000"
                                            wrapperStyle={{ display: "inline" }}
                                            wrapperClass=""
                                            visible={true}
                                            ariaLabel='oval-loading'
                                            secondaryColor="#555"
                                            strokeWidth={8}
                                            strokeWidthSecondary={2}
                                        />
                                        </button>
                                }
                            </div>
                        </form>
                    </div>

                </CommonBoxComp>
            </div>
        </div>
    )
}
export default Contact;