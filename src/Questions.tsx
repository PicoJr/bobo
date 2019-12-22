
import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface DiagnosticProps {
    setBobo: React.Dispatch<React.SetStateAction<boolean>>,
}

const Questions: React.FC<DiagnosticProps> = (props) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        props.setBobo(event.target.checked);
    };

    return (
        <div>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Etat Physique</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                value="checkedB"
                                color="primary"
                            />
                        }
                    label="Bobo?"
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default Questions;
