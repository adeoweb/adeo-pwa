import React, { ReactNode, useMemo } from 'react';

interface State {
    renderError?: Error;
}

export const useErrorBoundary = (WrappedComponent: ReactNode) =>
    useMemo(
        () =>
            class ErrorBoundary extends React.Component<
                Record<string, never>,
                State
            > {
                constructor(props) {
                    super(props);

                    this.state = { renderError: undefined };
                }

                static getDerivedStateFromError(renderError: Error) {
                    return { renderError };
                }

                render(): ReactNode {
                    const { props, state } = this;
                    const { renderError } = state;

                    return (
                        // @ts-expect-error
                        <WrappedComponent
                            {...props}
                            renderError={renderError}
                        />
                    );
                }
            },
        []
    );
