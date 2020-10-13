import React, { Component } from 'react'

import { HeroNav, AboutAgency, AgencyContainer, BestProjects, PartnersConfessions, LatestBlog, ContactInfo, Footer } from './Components'

import GlobalStyle from './globalStyles'

class App extends Component {
  render() {
    return (
      <div>
          <GlobalStyle />

          <HeroNav />
          
          <AboutAgency />

          <AgencyContainer />

          <BestProjects />

          <PartnersConfessions />

          <LatestBlog />

          <ContactInfo />

          <Footer />
      </div>
    )
  }
}

export default App

