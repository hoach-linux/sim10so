import { Button, Card, Input } from "@nextui-org/react";
import supabase from "../../supabase";
import { useNavigate } from "react-router-dom";
import { Password } from "../../components/icons/Password";
import { Mail } from "../../components/icons/Mail";

function Login() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== "SIGNED_OUT") {
      navigate("/admin/order");
    } else {
      navigate("/");
    }
  });

  return (
    <div style={{minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Card variant="bordered" css={{ maxWidth: "550px" }}>
        <Card.Body>
          <form>
            <Input
              clearable
              bordered
              fullWidth
              color="default"
              size="lg"
              label="Email"
              placeholder="example@xyz.com"
              contentLeft={<Mail fill="currentColor" />}
              css={{ mb: "20px" }}
            />
            <Input
              clearable
              bordered
              fullWidth
              color="default"
              size="lg"
              label="Password"
              placeholder="XsadfklJSDLkj89"
              contentLeft={<Password fill="currentColor" />}
              css={{ mb: "20px" }}
            />
            <Button size="lg" css={{ minWidth: "100%" }}>
              Sign in
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
