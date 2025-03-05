import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../types';

/**
 * ErrorBoundary component for catching JavaScript errors anywhere in the child component tree.
 * @param children - The child components to be wrapped.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false, error: null, errorInfo: null };
	}

	/**
	 * Update state so the next render will show the fallback UI.
	 * @param error - The error that was thrown.
	 */
	static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
		return { hasError: true, error };
	}

	/**
	 * Log the error and error information.
	 * @param error - The error that was thrown.
	 * @param errorInfo - An object with information about the component stack.
	 */
	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		this.setState({ errorInfo });
		console.error('Error caught by ErrorBoundary:', error, errorInfo);
	}

	render(): ReactNode {
		if (this.state.hasError) {
			return (
				<div className="bg-red-100 mb-4 p-4 border border-red-400 rounded text-red-700">
					<h2 className="mb-2 font-bold text-lg">Something went wrong</h2>
					<p className="mb-2">
						We encountered an unexpected error. Please try refreshing the page.
					</p>
					<details className="text-sm whitespace-pre-wrap">
						<summary>Error details</summary>
						{this.state.error && this.state.error.toString()}
						<br />
						{this.state.errorInfo && this.state.errorInfo.componentStack}
					</details>
					<button
						className="bg-red-500 hover:bg-red-600 mt-4 px-4 py-2 rounded text-white"
						onClick={() =>
							this.setState({ hasError: false, error: null, errorInfo: null })
						}
					>
						Try again
					</button>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
