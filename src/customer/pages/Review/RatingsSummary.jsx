import { Box, LinearProgress, Stack, Typography } from "@mui/material";

const RatingBar = ({ label, value, color }) => (
  <Stack direction="row" alignItems="center" spacing={2}>
    <Typography sx={{ width: 80 }}>{label}</Typography>

    <Box sx={{ flex: 1 }}>
      <LinearProgress
        variant="determinate"
        value={value} // 0–100
        sx={{
          height: 6,
          borderRadius: 999,
          backgroundColor: "#e5e5e5",
          "& .MuiLinearProgress-bar": {
            borderRadius: 999,
            backgroundColor: color,
          },
        }}
      />
    </Box>

    <Typography variant="body2" color="text.secondary">
      19259
    </Typography>
  </Stack>
);

export default function RatingsSummary() {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <RatingBar label="Excellent" value={80} color="#1b8244" />
      <RatingBar label="Very Good" value={70} color="#1b8244" />
      <RatingBar label="Good" value={50} color="#00a7a7" />
      <RatingBar label="Average" value={35} color="#9c6b00" />
      <RatingBar label="Poor" value={20} color="#d32f2f" />
    </Stack>
  );
}
