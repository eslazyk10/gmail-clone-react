import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";


import "./css/SendMail.css";

export default function SendMail() {
    const { register, handleSubmit, watch, error } = useForm();

   
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail__close" />
            </div>

            <form> 
                <input
                    name="to"
                    placeholder="To"
                    type="text"
                    ref={register({required: true})}
                />
                <input
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    ref={register({required: true})}
                />
                <input
                    name="message"
                    placeholder="Message..."
                    type="text"
                    className="sendMail__message"
                    ref={register({required: true})}
                />

                <div className="sendMail__options">
                    <Button
                        className="sendMail__send"
                        varient="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}