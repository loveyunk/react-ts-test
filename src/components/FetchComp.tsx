import React from 'react';
import axios from 'axios';

const Wrapper = (url: string) => (Component: any) => {
  return class extends React.Component<
    {},
    {
      data: {
        hits: Array<{
          objectID: string;
          title: string;
          url: string;
        }>;
      };
      loading: boolean;
    }
  > {
    constructor(props: any) {
      super(props);
      this.state = {
        data: {
          hits: []
        },
        loading: false
      };
    }

    fetchData = async () => {
      const result = await axios(url);

      this.setState({
        data: result.data
      });

      this.setState({ loading: false });
    };

    componentDidMount() {
      this.setState({ loading: true }, this.fetchData);
    }

    render() {
      return (
        <Component
          {...this.props}
          data={this.state.data}
          loading={this.state.loading}
          fetchData={this.fetchData}
        />
      );
    }
  };
};

export interface FetchCompProps {
  data: {
    hits: Array<{
      objectID: string;
      title: string;
      url: string;
    }>;
  };
  loading: boolean;
}

export interface FetchCompState {}

class FetchComp extends React.Component<FetchCompProps, FetchCompState> {
  constructor(props: FetchCompProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, loading } = this.props;

    return (
      <div>
        {loading ? (
          <div>Loading</div>
        ) : (
          <ul>
            {data.hits.map(item => (
              <li key={item.objectID}>
                <a href={item.url} target='_blank'>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Wrapper('https://hn.algolia.com/api/v1/search?query=react')(
  FetchComp
);
