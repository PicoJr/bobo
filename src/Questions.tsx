
import React from 'react';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface DiagnosticProps {
    setLazy: React.Dispatch<React.SetStateAction<boolean>>,
}

const Questions: React.FC<DiagnosticProps> = (props) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        props.setLazy(event.target.checked);
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
                        label="Vous êtes fatigué"
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default Questions;
