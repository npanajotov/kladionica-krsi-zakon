import {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router";

type PathParamsType = {
    param1: string,
}

type Props = RouteComponentProps<PathParamsType> & {
    location: string,
}

class ScrollToTop extends Component<Props> {
    componentDidUpdate(prevProps: Props) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);
