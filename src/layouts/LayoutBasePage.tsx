import { Box, Typography, useTheme } from "@mui/material";

import { ReactNode } from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  barraDeFerramneta: ReactNode;
}

export function LayoutBasePage({ children, title, barraDeFerramneta }: Props) {
  const theme = useTheme();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        display="flex"
        alignItems="center"
        height={theme.spacing(12)}
      >
        <Typography variant="h3">{title}</Typography>
      </Box>
      <Box>{barraDeFerramneta}</Box>
      <Box>{children}</Box>
    </Box>
  );
}
