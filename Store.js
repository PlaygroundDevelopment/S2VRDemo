import * as React from 'react';

const State = {
  posts: [
    {
      "id":"assets/2Rb9zxgkDEM",
      "name":"Simple Science",
      "author":"Newport Beach",
      "description":"We work with our clients building brands, educating target audiences, and motivating people and organizations to action. We began in 2001 as an online, direct-response advertising firm and have grown into a full-service creative agency with a strong focus on digital media. We are an experienced team of strategists, writers, designers, producers, developers, sales & marketing experts. Our clients range from small business owners and entrepreneurs to established Fortune 500 companies.",
      "preview":"logo.png",
      "image":"logo.png"
    },
    {
      "id":"assets/dcuaH6bEkwn",
      "name":"GeoScience",
      "author":"G3SoilWorks",
      "description":"Soilworks, a successful geosciences firm, wished to completely re-brand to distinguish themselves from their competitors and increase their visibility online. The first phase of the project included renaming to G3 Soilworks, creating a logo, new business cards and branded apparel. Shortly thereafter, the second phase of the project included a new, search engine optimized website, and producing a variety of engaging videos that extend their online presence.",
      "preview":"project-logo-g3.png",
      "image":"slider2.jpg"
    },
    {
      "id":"assets/8NsrLwbXhfl",
      "name":"Patient Education",
      "author":"Surgical Specialists of Louisiana & Mississippi",
      "description":"The Surgical Specialists of Louisiana & Mississippi is a successful weight loss clinic whom S2 recently worked with to launch a microsite for their new Acid Reflux service line. The assignment was to create a small website, or microsite, that was affordable and could be used to educate prospective patients and create referrals for their physicians.",
      "preview":"project-logo-ssl.png",
      "image":"slider3.jpg"
    },
    {
      "id":"assets/bFZbl-mmCeD",
      "name":"Search Engine Marketing",
      "author":"Ehrlich Bariatrics",
      "description":"Ehrlich Bariatrics, which previously was only engaged in social media and Digital PR, recently benefited from adding a local Search Engine Marketing (SEM) ad campaign. The goal was to increase web traffic for their website and generate new inquiries outside of their existing relationships and social media efforts. In 90 days, patient total referrals increased by 27%",
      "preview":"project-logo-ehrlich.png",
      "image":"slider4.jpg"
    }
  ],
  current: -1,
};

const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

export function setCurrent(value) {
  State.current = value;
  updateComponents();
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      posts: State.posts,
      current: State.current,
    };
    _listener = () => {
      this.setState({
        posts: State.posts,
        current: State.current,
      });
      
  //console.log(JSON.stringify(State.posts));
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    componentWillUnmount() {
      listeners.delete(this._listener);
    }

    render() {
      return (
        <Component
          {...this.props}
          posts={this.state.posts}
          current={this.state.current}
        />
      );
    }
  };
}
