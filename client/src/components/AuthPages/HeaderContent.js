import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Button,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        display: "flex",
        position: "absolute",
        top: 0,
        right: theme.spacing(10),
        marginTop: theme.spacing(8),
        justifyContent: "flex-end",
        flexDirection: "row",
        alignItems: "center",
    },
    contentText: {
        color: theme.palette.secondary.main,
        // fontSize: theme.typography.fontSize,
        fontFamily: theme.typography.fontFamily,
        marginRight: theme.spacing(8),
    },
    headerButton: {
        width: "200px",
        height: "60px",
        borderRadius: "3px",
        fontWeight: theme.typography.button.fontWeight,
        backgroundColor: "white",
        color: theme.palette.primary.main,
    }
}));

const HeaderContent = ({ contentText, buttonText, onButtonClick }) => {
    const classes = useStyles();
    return (
        <Grid className={classes.contentWrapper}>
            <Typography component="h3" className={classes.contentText}>
                {contentText}
            </Typography>
            <Button
                variant="contained"
                onClick={onButtonClick}
                className={classes.headerButton}>
                {buttonText}
            </Button>
        </Grid>
    );
}

export default HeaderContent;
