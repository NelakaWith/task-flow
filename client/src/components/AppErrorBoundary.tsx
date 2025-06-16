import { Component, type ReactNode, type ErrorInfo } from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

// Functional wrapper for route errors
export function AppRouteErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold mb-2">
          {error.status} {error.statusText}
        </h2>
        <pre className="text-sm text-red-500 mb-2">
          {error.data || "An error occurred."}
        </pre>
      </div>
    );
  }
  return (
    <div className="p-8 text-center">
      <h2 className="text-xl font-bold mb-2">Unexpected Error</h2>
      <pre className="text-sm text-red-500 mb-2">
        {error instanceof Error ? error.message : String(error)}
      </pre>
    </div>
  );
}

// Class-based error boundary for React errors
interface AppErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface AppErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  constructor(props: AppErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): AppErrorBoundaryState {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ error, errorInfo: info });
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-8 text-center">
            <h2 className="text-xl font-bold mb-2">Something went wrong.</h2>
            <pre className="text-sm text-red-500 mb-2">
              {this.state.error?.message}
            </pre>
            {this.state.errorInfo && (
              <details className="text-xs text-gray-500 whitespace-pre-wrap">
                {this.state.errorInfo.componentStack}
              </details>
            )}
          </div>
        )
      );
    }
    return this.props.children;
  }
}
