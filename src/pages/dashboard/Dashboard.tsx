import { Box } from "@mui/material";
import { BarraDeFerramenta } from "../../components/BarraDeFerramenta";
import { BasicTable } from "../../components/BasicTable";
import { LayoutBasePage } from "../../layouts/LayoutBasePage";

export function Dashboard() {
  return (
    <>
      <LayoutBasePage
        title="Usuarios"
        barraDeFerramneta={<BarraDeFerramenta />}
      >
        <BasicTable />
      </LayoutBasePage>
    </>
  );
}
