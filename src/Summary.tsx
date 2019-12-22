
import React from 'react';
import Chip from '@material-ui/core/Chip';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

interface SummaryProps {
    bobo: boolean,
}

const Summary: React.FC<SummaryProps> = (props) => {

    return (
        <div>
            <ExpansionPanel defaultExpanded={true}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Résumé</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {props.bobo && <Chip label="bobo" />}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default Summary;
