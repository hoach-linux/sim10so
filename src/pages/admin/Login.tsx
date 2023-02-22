import { Button, Card, Input, Text } from "@nextui-org/react";
import supabase from "../../supabase";
import { useNavigate } from "react-router-dom";
import { Password } from "../../components/icons/Password";
import { Mail } from "../../components/icons/Mail";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage]: [
    errorMessage: any,
    setErrorMessage: any
  ] = useState(null);

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: userData.email,
      options: {
        shouldCreateUser: false,
        emailRedirectTo: "https://sim10so.netlify.app/admin/order",
      },
    });

    setErrorMessage(error?.message);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card variant="bordered" css={{ maxWidth: "550px" }}>
        <Card.Body>
          <form>
            <Input
              clearable
              bordered
              fullWidth
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              color="default"
              size="lg"
              label="Email"
              placeholder="example@xyz.com"
              contentLeft={<Mail fill="currentColor" />}
              css={{ mb: "20px" }}
            />
            {errorMessage !== null && <Text color="error">{errorMessage}</Text>}
            <Button
              size="lg"
              onClick={signInWithEmail}
              css={{ minWidth: "100%" }}
            >
              Đăng nhập
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
