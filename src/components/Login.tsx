import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import * as yup from "yup";

interface ILoginProps {
  children: React.ReactNode;
}

const loginSchema = yup.object().shape({
  email: yup.string().email("E-mail invalido").required("E-mail obrigatorio"),
  password: yup
    .string()
    .min(5, "Minimo de 5 caracteres")
    .required("Senha obrigatoria"),
});

export function Login({ children }: ILoginProps) {
  const { isAuthenticated } = useAuthContext();

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);

    loginSchema
      .validate({ email, password }, { abortEarly: false })
      .then((data) => {
        console.log({ data });
      })
      .then(() => setIsLoading(false))

      .catch((errors: yup.ValidationError) => {
        errors.inner.forEach((error) => {
          setIsLoading(false);
          if (error.path === "email") {
            setErrorEmail(error.message);
          } else if (error.path === "password") {
            setErrorPassword(error.message);
          }
        });
      });
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <>
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Card>
          <CardContent>
            <Box display="flex" flexDirection="column" gap={2} width={350}>
              <Typography variant="h6" align="center">
                Indentifique-se
              </Typography>
              <TextField
                fullWidth
                label="E-mail"
                type="email"
                value={email}
                disabled={isLoading}
                error={!!errorEmail}
                helperText={errorEmail}
                onChange={(event) => setEmail(event.target.value)}
                onKeyDown={() => setErrorEmail("")}
              ></TextField>
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                disabled={isLoading}
                error={!!errorPassword}
                helperText={errorPassword}
                onChange={(event) => setPassword(event.target.value)}
                onKeyDown={() => setErrorPassword("")}
              ></TextField>
            </Box>
          </CardContent>
          <CardActions>
            <Box width="100%" display="flex" justifyContent={"flex-end"}>
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={isLoading}
                endIcon={
                  isLoading ? (
                    <CircularProgress
                      variant="indeterminate"
                      color="inherit"
                      size={20}
                    />
                  ) : (
                    ""
                  )
                }
              >
                Entrar
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
