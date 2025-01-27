import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
    resetErrorBoundary(); // Reset the error boundary
  };

  const handleRefresh = () => {
    window.location.reload(); // Refresh the page
    resetErrorBoundary(); // Reset the error boundary
  };

  return (
    <Box
      role="alert"
      sx={{
        width: "100%",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ color: "primary.main", mt: 2 }}>
        Oops! Something went wrong.
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mt: 2 }}>
        We are working on fixing the problem. Please <br /> refresh the page and
        try again.
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
        <Button variant="outlined" onClick={handleBack}>
          PREVIOUS PAGE
        </Button>
        <Button variant="contained" onClick={handleRefresh}>
          Refresh
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorFallback;
