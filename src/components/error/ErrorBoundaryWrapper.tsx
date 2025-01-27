import { ErrorBoundary } from "react-error-boundary";
import { useLocation } from "react-router-dom";
import ErrorFallback from "./ErrorFallback";

interface ErrorBoundaryWrapperProps {
  children: React.ReactNode;
}

const ErrorBoundaryWrapper = ({ children }: ErrorBoundaryWrapperProps) => {
  const location = useLocation();

  return (
    <ErrorBoundary
      key={location.pathname} // Reset error boundary on route change
      FallbackComponent={ErrorFallback}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryWrapper;
