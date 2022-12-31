import { Box, Button, Grid, Link } from "@mui/material";

export function UserPermissionForm() {
  return (
    <Box width={500} height={250} display="flex" flexDirection="column" gap={2}>
      <span>Configure os vinculos do usuario</span>
      <Button sx={{ maxWidth: 150 }} variant="outlined">
        Novo Vinculo
      </Button>
      <b>Usuario</b>
      14-Teste
      <Box
        display="flex"
        justifyContent="space-between"
        gap={2}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Link href="#">
          <span>Estabelicimento</span>
        </Link>
        <Link href="#">
          <span>Nivel de Acesso</span>
        </Link>
        <Link href="#">
          <span>Excluir</span>
        </Link>
      </Box>
      <Box display="flex" justifyContent="flex-end" gap={1}>
        <Button variant="outlined" color="error">
          Excluir
        </Button>
        <Button variant="contained">Salvar</Button>
      </Box>
    </Box>
  );
}
