import React from "react";
import { withRouter } from "next/router";
import Layout from "./Layout";
import { fetchSpacePrograms } from "../actions";

export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      programs: props.programs || [],
    };
  }

  componentDidMount() {
    const { programs } = this.state;
    if (!programs.length) this.callFetchPrograms();
  }

  componentDidUpdate(prevProps) {
    const { router } = this.props;
    if (
      (router &&
        prevProps.router &&
        router.query &&
        prevProps.router.query &&
        (router.query.launch_year !== prevProps.router.query.launch_year ||
          router.query.launch_success !==
            prevProps.router.query.launch_success)) ||
      router.query.land_success !== prevProps.router.query.land_success
    ) {
      this.callFetchPrograms();
    }
  }

  callFetchPrograms = () => {
    const {
      router: { query },
    } = this.props;
    fetchSpacePrograms(query)
      .then((programs) => {
        this.setState({ programs });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { programs } = this.state;
    return (
      <>
        <Layout programs={programs}></Layout>
      </>
    );
  }
}

export default withRouter(Home);
