import React from "react";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";

const TopAgentCard = () => {
	return (
		<Stack className="top-agent-box">
			<Box
				className="card-img"
				style={{
					backgroundImage: `url("/img/profile/girl.svg")`,
				}}></Box>
			<Box className="info">
				<strong className="title">Martin</strong>
				<p className="desc">Agent</p>
			</Box>
		</Stack>
	);
};

export default TopAgentCard;