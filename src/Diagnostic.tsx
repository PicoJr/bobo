
import React from 'react';
import Chip from '@material-ui/core/Chip';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

interface DiagnosticProps {
    bobo: boolean,
}

const Diagnostic: React.FC<DiagnosticProps> = (props) => {

    return (
        <div>
            <ExpansionPanel defaultExpanded={true}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Diagnostique</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>{props.bobo ? "Le patient a un bobo" : "Le patient va bien"}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default Diagnostic;
