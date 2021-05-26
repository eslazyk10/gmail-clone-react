import React from 'react';
import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorder';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportant';



import "./css/EmailRow.css";

function EmailRow({id, title, subject, description, time}) {
    return (
        <div className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>

            <div className="emailRow__title">
                
            </div>

            <div className="emailRow__message">
                
            </div>

            <div className="emailRow__description">
                
            </div>
        </div>
    )
}

export default EmailRow
