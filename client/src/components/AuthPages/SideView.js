import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Box,
    Typography,
    SvgIcon,
} from "@material-ui/core";
import { ReactComponent as Bubble } from "../../assets/bubble.svg";
import bgImg from "../../assets/bg-img.png";

const useStyles = makeStyles((theme) => ({
    BgImage: {
        backgroundImage: `linear-gradient(to bottom, rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85)), url(${bgImg})`,
        width: "100%",
        position: "relative",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    contentWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    bubble: {
        width: "100px",
        height: "100px",
        marginBottom: theme.spacing(5)
    },
    slogan: {
        color: "#ffffff",
        fontSize: 36,
        textAlign: "center",
        marginBottom: 170
    }
}));

const SideView = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.BgImage}>
            <Grid className={classes.contentWrapper}>
                <SvgIcon viewBox="0 0 67 67" className={classes.bubble}>
                    <Bubble />
                </SvgIcon>
                <Typography className={classes.slogan}>
                    Converse with anyone<br />
                    with any language
                </Typography>
            </Grid>
        </Box>
    );
}

export default SideView;
