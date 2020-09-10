import React from 'react'

export class Footer extends React.Component {

  render () {

    return (
      <div className="footerWrapper" style={{
        textAlign: "center",
        gridArea: "footer",
        
      }}>
        <p>Created by <a href="https://github.com/k0sior">k0sior</a></p>
      </div>

    )
  }
}