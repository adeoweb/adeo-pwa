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

                componentDidUpdate() {
                    if (this.state.renderError) {
                        this.recoverFromError();
                    }
                }

                recoverFromError() {
                    if (process.env.NODE_ENV === 'development') {
                        console.log(
                            'Default window.location.reload() error handler not running in developer mode.'
                        );
                        return;
                    }

                    window.location.reload();
                }

                render(): ReactNode {
                    const { props, state } = this;
                    const { renderError } = state;

                    /**
                     * Moved render error handling up here to prevent
                     * invoking the same errors all over again when
                     * rendering the very same tree.
                     *
                     * Put your desired view for these type of errors
                     */
                    if (renderError) {
                        return <p>Render error has occurred</p>;
                    }

                    return (
                        // @ts-expect-error
                        <WrappedComponent {...props} />
                    );
                }
            },
        []
    );
